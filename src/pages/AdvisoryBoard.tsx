import { useEffect } from "react";
import FirstAdv from "@/assets/FirstAdv.jpeg";
import SecondAdv from "@/assets/SecondAdv.jpeg";
import ThirdAdv from "@/assets/ThirdAdv.jpeg";
import FourthAdv from "@/assets/FourthAdv.jpg";

type Member = {
  id: number;
  name: string;
  photo: string;
  details: string[];
};

const members: Member[] = [
  {
    id: 1,
    name: "Prof. A. D. Amar, Ph.D.",
    photo: FirstAdv,
    details: ["Seton Hall University", "USA"],
  },
  {
    id: 2,
    name: "Prof. Sudhir K. Jain",
    photo: SecondAdv,
    details: [
      "Former Vice Chancellor",
      "Shri Mata Vaishno Devi University, Jammu, India",
      "Former Head – DMS, IIT Delhi",
    ],
  },
  {
    id: 3,
    name: "Prof. Garima Tiwari",
    photo: ThirdAdv,
    details: [
      "National Law University, Delhi",
      "PhD – University of Camerino, Italy",
    ],
  },
  {
    id: 4,
    name: "Prof. Suman Rani",
    photo: FourthAdv,
    details: [
      "O. P. Jindal Global University, India",
      "Fulbright Scholar – University of Notre Dame, USA",
    ],
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
  padding: clamp(44px, 7vw, 76px) clamp(14px, 4vw, 24px) clamp(52px, 8vw, 88px);
  font-family: var(--aab-sans);
}

/* Orange block-print pattern — screen ke saath fixed */
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
  background-size: clamp(84px, 11vw, 128px) clamp(84px, 11vw, 128px);
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
    rgba(253, 249, 243, 0.62) 45%,
    rgba(253, 249, 243, 0.18) 80%
  );
}

.aab__container {
  max-width: 1060px;
  margin: 0 auto;
}

/* ---------- Header ---------- */

.aab__head {
  text-align: center;
  max-width: 620px;
  margin: 0 auto clamp(30px, 5vw, 52px);
}

.aab__eyebrow {
  font-size: clamp(9px, 1.8vw, 11px);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--aab-gold);
  margin: 0 0 12px;
}

.aab__title {
  font-family: var(--aab-serif);
  font-size: clamp(27px, 6vw, 48px);
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
  font-size: clamp(13px, 2.4vw, 15px);
  line-height: 1.6;
  color: var(--aab-body);
  margin: 0;
}

/* ---------- Cards ka grid ---------- */

.aab__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(16px, 2.5vw, 26px);
}

.aab__card {
  display: flex;
  align-items: flex-start;
  gap: clamp(14px, 2.2vw, 22px);
  padding: clamp(14px, 2.4vw, 22px);
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
  flex: 0 0 clamp(96px, 13vw, 132px);
  width: clamp(96px, 13vw, 132px);
  aspect-ratio: 4 / 5;
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

.aab__info {
  flex: 1;
  min-width: 0;
  padding-top: 2px;
}

.aab__name {
  font-family: var(--aab-serif);
  font-size: clamp(17px, 2.4vw, 22px);
  font-weight: 600;
  line-height: 1.3;
  color: var(--aab-ink);
  margin: 0 0 10px;
}

.aab__name::after {
  content: "";
  display: block;
  width: 30px;
  height: 1px;
  background: var(--aab-gold);
  margin-top: 10px;
}

.aab__detail {
  font-size: clamp(12px, 1.5vw, 13.5px);
  line-height: 1.65;
  color: var(--aab-body);
  margin: 0 0 4px;
}

.aab__detail:last-child {
  margin-bottom: 0;
}

/* Tablet aur chhoti screens: ek column */
@media (max-width: 860px) {
  .aab__grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
  .aab__photo-wrap {
    flex: 0 0 116px;
    width: 116px;
  }
  .aab__name {
    font-size: 19px;
  }
  .aab__detail {
    font-size: 13px;
  }
}

/* Chhote phone: thoda aur compact, photo chhoti */
@media (max-width: 420px) {
  .aab__card {
    gap: 14px;
    padding: 14px;
  }
  .aab__photo-wrap {
    flex: 0 0 92px;
    width: 92px;
  }
  .aab__name {
    font-size: 17px;
    margin-bottom: 8px;
  }
  .aab__name::after {
    margin-top: 8px;
  }
  .aab__detail {
    font-size: 12.5px;
    line-height: 1.6;
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
            Our <span className="aab__title-accent">Advisory Council</span>
          </h1>

          <p className="aab__tagline">
            Global knowledge. Shared heritage. Shared future.
          </p>
        </header>

        <div className="aab__grid">
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

              <div className="aab__info">
                <h2 className="aab__name">{member.name}</h2>

                {member.details.map((line, i) => (
                  <p className="aab__detail" key={i}>
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}