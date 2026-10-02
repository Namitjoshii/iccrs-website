import { useEffect } from "react";
import FirstAdv from "@/assets/FirstAdv.jpeg";
import SecondAdv from "@/assets/SecondAdv.jpeg";
import ThirdAdv from "@/assets/ThirdAdv.jpeg";

type Member = {
  id: number;
  name: string;
  photo: string;
  organisation: string;
};

const members: Member[] = [
  {
    id: 1,
    name: "Prof. Amar",
    photo: FirstAdv,
    organisation: "Seton Hall University",
  },
  {
    id: 2,
    name: "Prof. S. K. Jain",
    photo: SecondAdv,
    organisation: "IIT Delhi",
  },
  {
    id: 3,
    name: "Dr. Garima Tiwari",
    photo: ThirdAdv,
    organisation: "National Law University",
  },
];

const styles = `
/* Poore page ka base rang, taaki kahin white na jhanke */
html,
body {
  background: linear-gradient(160deg, #fbf4ea 0%, #f6ead9 55%, #f2e2cf 100%);
  background-attachment: fixed;
}

.aab {
  --aab-ink: #14263c;
  --aab-gold: #c08e33;
  --aab-orange: #d9793f;
  --aab-body: #566b80;
  --aab-serif: "Playfair Display", "Lora", Georgia, serif;
  --aab-sans: "Jost", "Poppins", -apple-system, "Segoe UI", sans-serif;

  position: relative;
  isolation: isolate;
  min-height: 100svh;
  padding: clamp(48px, 7vw, 76px) clamp(16px, 4vw, 24px) clamp(56px, 8vw, 88px);
  font-family: var(--aab-sans);
}

/* Orange block-print pattern — screen ke saath fixed, isliye neeche khali nahi dikhta */
.aab::before {
  content: "";
  position: fixed;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  transform: rotate(-14deg);
  opacity: 0.4;
  z-index: -2;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'><g fill='none' stroke='%23d9793f' stroke-width='1.1'><g transform='translate(64 64)'><g><path d='M0 -22 q9 11 0 22 q-9 -11 0 -22'/><path d='M0 22 q9 -11 0 -22 q-9 11 0 22'/><path d='M-22 0 q11 9 22 0 q-11 -9 -22 0'/><path d='M22 0 q-11 9 -22 0 q11 -9 22 0'/></g><g transform='rotate(45)'><path d='M0 -16 q6 8 0 16 q-6 -8 0 -16'/><path d='M0 16 q6 -8 0 -16 q-6 8 0 16'/><path d='M-16 0 q8 6 16 0 q-8 -6 -16 0'/><path d='M16 0 q-8 6 -16 0 q8 -6 16 0'/></g><circle r='3'/></g><circle cx='0' cy='0' r='4'/><circle cx='128' cy='0' r='4'/><circle cx='0' cy='128' r='4'/><circle cx='128' cy='128' r='4'/><path d='M0 64 h18 M110 64 h18 M64 0 v18 M64 110 v18'/></g></svg>");
  background-repeat: repeat;
  background-size: clamp(88px, 11vw, 128px) clamp(88px, 11vw, 128px);
}

/* Halka parda, taaki pattern text ke peeche se dab jaye */
.aab::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    ellipse at 50% 38%,
    rgba(253, 249, 243, 0.9) 0%,
    rgba(253, 249, 243, 0.6) 45%,
    rgba(253, 249, 243, 0.15) 80%
  );
}

.aab__container {
  max-width: 900px;
  margin: 0 auto;
}

/* ---------- Header ---------- */

.aab__head {
  text-align: center;
  max-width: 620px;
  margin: 0 auto clamp(32px, 5vw, 48px);
}

.aab__eyebrow {
  font-size: clamp(9px, 1.6vw, 11px);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--aab-gold);
  margin: 0 0 12px;
}

.aab__title {
  font-family: var(--aab-serif);
  font-size: clamp(28px, 6vw, 48px);
  line-height: 1.12;
  font-weight: 700;
  color: var(--aab-ink);
  margin: 0 0 10px;
}

.aab__title-accent {
  color: var(--aab-gold);
  font-style: italic;
}

.aab__tagline {
  font-size: clamp(13px, 2.2vw, 15px);
  line-height: 1.6;
  color: var(--aab-body);
  margin: 0;
}

/* ---------- Teen alag cards ---------- */

.aab__list {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 22px);
}

.aab__card {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);
  padding: clamp(16px, 3vw, 28px) clamp(18px, 3.5vw, 36px);
  background: rgba(255, 253, 249, 0.92);
  border: 1px solid rgba(192, 142, 51, 0.32);
  box-shadow: 0 4px 24px rgba(20, 38, 60, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.aab__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 34px rgba(20, 38, 60, 0.11);
  border-color: rgba(192, 142, 51, 0.6);
}

.aab__photo-wrap {
  flex: 0 0 clamp(80px, 13vw, 120px);
  width: clamp(80px, 13vw, 120px);
  aspect-ratio: 1 / 1;
  padding: 4px;
  background: #ffffff;
  border: 1px solid rgba(192, 142, 51, 0.4);
}

.aab__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.aab__name {
  flex: 1;
  min-width: 0;
  font-family: var(--aab-serif);
  font-size: clamp(19px, 3.4vw, 26px);
  font-weight: 600;
  line-height: 1.25;
  color: var(--aab-ink);
  margin: 0;
}

.aab__org {
  flex: 0 0 auto;
  max-width: 240px;
  text-align: right;
  font-size: clamp(10px, 1.7vw, 12px);
  letter-spacing: 0.14em;
  line-height: 1.7;
  text-transform: uppercase;
  color: var(--aab-body);
  margin: 0;
  padding-left: clamp(14px, 2.5vw, 24px);
  border-left: 1px solid rgba(192, 142, 51, 0.35);
}

/* Tablet se neeche: organisation naam ke neeche */
@media (max-width: 720px) {
  .aab__card {
    flex-wrap: wrap;
  }
  .aab__name {
    flex: 1 1 140px;
  }
  .aab__org {
    flex: 1 1 100%;
    max-width: none;
    text-align: left;
    padding-left: 0;
    padding-top: 12px;
    margin-top: 4px;
    border-left: 0;
    border-top: 1px solid rgba(192, 142, 51, 0.35);
  }
}

/* Chhote phone: photo upar, text neeche */
@media (max-width: 420px) {
  .aab__card {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .aab__photo-wrap {
    flex: none;
    width: 96px;
  }
  .aab__org {
    padding-top: 10px;
  }
}
`;

export default function AdvisoryBoard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="aab">
      <style>{styles}</style>

      <div className="aab__container">
        <header className="aab__head">
          <p className="aab__eyebrow">
            Institute of Civilisational &amp; Cultural Relations
          </p>

          <h1 className="aab__title">
            Our <span className="aab__title-accent">Advisory Board</span>
          </h1>

          <p className="aab__tagline">
            Global knowledge. Shared heritage. Shared future.
          </p>
        </header>

        <div className="aab__list">
          {members.map((member) => (
            <article className="aab__card" key={member.id}>
              <div className="aab__photo-wrap">
                <img
                  className="aab__photo"
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
              </div>

              <h2 className="aab__name">{member.name}</h2>

              <p className="aab__org">{member.organisation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}