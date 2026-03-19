import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import SectionReveal from "@/components/SectionReveal";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import krishnaImg from "@/assets/krishna-program-new.jpg";
import ramaImg from "@/assets/rama-program-new.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero9 from "@/assets/hero-9.jpg";
import CinematicIntro from "@/components/CinematicIntro";
import {
  Mail,
  ArrowRight,
} from "lucide-react";



export default function Index() {
  const [showIntro, setShowIntro] = useState(sessionStorage.getItem("introPlayed") !== "true");

  return (
    <div className="min-h-screen bg-background">
      {showIntro && <CinematicIntro onComplete={() => { setShowIntro(false); sessionStorage.setItem("introPlayed", "true");

      }} />}
      <Header />
      <HeroSlider />

      <main>
      {/* ═══════════════════════════════════════════════
      BACKGROUND & VISION — Editorial Layout
═══════════════════════════════════════════════ */}

<section id="background" className="relative overflow-hidden grain-overlay">
  <div className="container mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-12">

      {/* Left column */}
      <div className="lg:col-span-7 py-24 lg:py-36 flex justify-start">

        <div className="max-w-xl lg:ml-6">

          {/* Section label */}
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent mb-6 block">
            Background & Vision
          </span>

          {/* Heading */}
          <h2 className="font-serif text-4xl lg:text-[3.3rem] leading-[1.1] font-bold text-foreground mb-8">
            Bridging Civilisational
            <br />
            Wisdom with Modern
            <br />
            <span className="text-gradient">Governance</span>
          </h2>

          {/* divider */}
          <div className="w-14 h-px bg-heritage-gold/40 mb-10"></div>

          {/* content */}
          <div className="space-y-7 text-muted-foreground text-[1.05rem] leading-[1.85]">

            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
              India is one of the world's oldest living civilisations, home to diverse religious traditions,
              cultural philosophies, and intellectual systems that have shaped societies for millennia.
              Yet India lacks a single consolidated Institute of National Importance exclusively dedicated to
              Civilisation, Culture, and Religious Studies.
            </p>

            <p>
              At a time when global conflicts, diplomacy, migration, identity politics, and social cohesion
              are deeply influenced by religion and civilizational identity, there is a growing need for
              leaders, diplomats, scholars, and policymakers to be civilisationally literate.
            </p>

            <p>
              The Institute of Civilisational & Cultural Relations (ICCR) seeks to bridge this gap through
              an integrated knowledge and engagement platform that fosters civilizational understanding,
              cultural dialogue, and global collaboration in alignment with the vision of
              <span className="text-foreground font-semibold"> Vikshit Bharat 2047</span>.
            </p>

          </div>

          {/* tag */}
          <div className="mt-12 inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-6 py-2 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
            <span className="text-heritage-gold">✦</span>
            Ek Bharat, Shreshth Bharat
            <span className="text-heritage-gold">✦</span>
          </div>

        </div>
      </div>
              <div className="hidden lg:block lg:col-span-5 relative -mr-[calc((100vw-100%)/2)]">
  <div className="absolute inset-0">
    <img
      src={hero9}
      alt="Varanasi ghats"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
  </div>
</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
      WHO WE ARE — Editorial Two Column
═══════════════════════════════════════════════ */}

<section
  id="who-we-are"
  className="py-20 lg:py-28 bg-warm-stone grain-overlay"
>
  <div className="container mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-5">

        <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent mb-6 block">
          Who We Are
        </span>

        <h2 className="font-serif text-4xl lg:text-[3.2rem] leading-[1.08] font-semibold text-foreground max-w-[520px]">
          An Initiative at the <br />
          Intersection of{" "}
          <span className="text-gradient">Texts, Traditions & Societies</span>
        </h2>

        <div className="w-12 h-[2px] bg-heritage-gold/60 mt-8"></div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-7 max-w-xl xl:max-w-2xl lg:pt-2 border-l border-accent/20 pl-6">

        <div className="space-y-7 text-[1.02rem] leading-[1.9] text-muted-foreground">

          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-[0.85]">
            Institute of Civilizational & Cultural Relations (ICCR) is an academic,
            practice-oriented initiative that explores civilisations and cultural
            traditions through immersive programs, lived experiences, heritage
            visits, structured dialogues, and regional forums.
          </p>

          <p className="text-muted-foreground/90">
            Drawing insights from classical civilizational sources such as the{" "}
            <span className="font-medium text-foreground">Ramayana</span> and the{" "}
            <span className="font-medium text-foreground">Mahabharata</span>, alongside global intellectual
            traditions, ICCR examines how enduring ideas on leadership,
            ethics, diplomacy, conflict resolution, and crisis management
            continue to offer perspectives for contemporary governance,
            society, and organisations.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
        {/* ═══════════════════════════════════════════════
            WHAT WE DO — Image-text split layout
        ═══════════════════════════════════════════════ */}
        <section id="what-we-do" className="relative overflow-hidden grain-overlay">
          <div className="container mx-auto px-4 lg:px-8 py-28 lg:py-40">
            <SectionReveal>
              <div className="mb-20">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
                  What We Do
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-foreground heading-editorial">
                  Programs &amp; <span className="text-gradient">Areas of Focus</span>
                </h2>
              </div>
            </SectionReveal>

           <Link to="/programs/leadership" className="group block mb-28">

  <div className="max-w-6xl mx-auto">

    <span className="text-[11px] tracking-[0.35em] font-semibold text-accent uppercase block mb-6">
      Executive Program
    </span>

    {/* Image */}
    <div className="relative overflow-hidden rounded-sm mb-10">
      <img
        src={ramaImg}
        alt="Rama Leadership Program"
        className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
      />
    </div>

    {/* Text */}
    <div className="max-w-2xl">

      <h3 className="font-serif text-3xl lg:text-[2.4rem] leading-tight font-semibold text-foreground mb-4">
      Leadership & Governance - Rama's Model 
      </h3>

      <p className="text-muted-foreground leading-[1.85] text-[1.05rem] mb-6">
        2-days in-person program on Leadership, Public Policy & Global Governance:
        <p>Drawing insights from Ramayana followed by the Ayodhya cultural visit.</p>
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
        Explore Program
        <ArrowRight className="h-4 w-4" />
      </span>

    </div>

  </div>

</Link>

            {/* Program 2 — Text left, image right */}
            <SectionReveal delay={100}>
              <Link to="/programs/krishnas-learning" className="group block">

  <div className="max-w-6xl mx-auto">

    <span className="text-[11px] tracking-[0.35em] font-semibold text-accent uppercase block mb-6">
      Flagship Program
    </span>

    <div className="relative overflow-hidden rounded-sm mb-10">
      <img
        src={krishnaImg}
        alt="Krishna Learnings Program"
        className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
      />
    </div>

    <div className="max-w-2xl">

      <h3 className="font-serif text-3xl lg:text-[2.4rem] leading-tight font-semibold text-foreground mb-4">
        Diplomacy and Crisis Management - Krishna's Model
      </h3>

      <p className="text-muted-foreground leading-[1.85] text-[1.05rem] mb-6">
       2-days in-person program on Diplomacy, Strategy & Crisis Management:
<p>Drawing insights from the strategic wisdom of Krishna in the Mahabharata, 
  followed by Kurukshetra cultural visit.</p>
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
        Explore Program
        <ArrowRight className="h-4 w-4" />
      </span>

    </div>

  </div>

</Link>
            </SectionReveal>
          </div>
        </section>

      

        {/* ═══════════════════════════════════════════════
            EVENTS & DIALOGUE — Full-width dark immersive
        ═══════════════════════════════════════════════ */}
    <section
  id="events"
  className="relative py-32 lg:py-44 bg-foreground text-background overflow-hidden"
>

  {/* cinematic radial light */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

  <div className="container mx-auto px-6 lg:px-10 relative z-10">

    <div className="grid lg:grid-cols-12 gap-20 items-start">

      {/* LEFT */}
      <div className="lg:col-span-5">

        <span className="text-[11px] tracking-[0.35em] uppercase text-heritage-gold font-semibold mb-6 block">
          Events & Dialogue
        </span>

        <h2 className="font-serif text-4xl lg:text-[3.4rem] leading-[1.08] font-bold text-background">
          The Conclave on
          <br />
          Civilisation, Culture,
          <br />
          and Coexistence
        </h2>

        <p className="text-heritage-gold text-sm tracking-[0.15em] font-semibold mt-5">
          An ICCR Initiative
        </p>

        <div className="w-12 h-[2px] bg-heritage-gold/60 mt-10"></div>

      </div>

      {/* RIGHT */}
<div className="lg:col-span-7 max-w-2xl font-sans">

  <div className="space-y-7 text-[1.05rem] leading-[1.9] text-background/70">
    <p>
      Culture and religion continue to shape public policy,
      diplomacy, and social outcomes across regions often
      implicitly rather than by design.
    </p>

    <p>
      This Conclave convenes policymakers, diplomats,
      scholars, and institutional practitioners to explore
      how civilizational traditions, cultural frameworks,
      and religious ideas influence governance, trade,
      diplomacy, international engagement, and coexistence.
    </p>

    <p>
      The platform brings together diplomats, scholars,
      religious and cultural leaders, and global experts
      to exchange insights, foster collaboration, and
      examine civilizational perspectives.
    </p>
  </div>

  {/* schedule block */}
  <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row gap-10">

    <div>
      <span className="text-[11px] tracking-[0.3em] uppercase text-heritage-gold font-semibold block mb-2">
        Schedule
      </span>
      <p className="text-background/80 text-sm">
        August - September 2027
      </p>
    </div>

    <div>
      <span className="text-[11px] tracking-[0.3em] uppercase text-heritage-gold font-semibold block mb-2">
        Venue
      </span>
      <p className="text-background/80 text-sm">
        India International Centre, Delhi, India
      </p>
    </div>

  </div>

  <p className=" text-background/40 text-sm mt-8">
    ICCR invites contributions, speaker proposals,
    and institutional partnerships to help shape this
    evidence-based, dialogue-driven forum.
  </p>

</div>

    </div>

  </div>
</section>

        {/* ═══════════════════════════════════════════════
            COLLABORATION — Centered, refined CTA
        ═══════════════════════════════════════════════ */}
    <section
  id="collaboration"
  className="relative py-24 lg:py-32 overflow-hidden bg-warm-stone grain-overlay"
>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />

  <div className="container mx-auto px-6 lg:px-10 relative z-10">
    <SectionReveal>
      <div className="max-w-2xl mx-auto text-center">

        {/* LABEL */}
        <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent mb-6 block">
          Collaboration &amp; Partnership
        </span>

        {/* HEADING */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-semibold text-foreground leading-[1.1] mb-6">
          Let’s Shape the <br />
          <span className="text-gradient">Future Together</span>
        </h2>

        {/* DIVIDER (proper replacement) */}
        <div className="w-16 h-[2px] bg-accent/50 mx-auto mb-8"></div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground/90 leading-[1.85] text-[1.05rem] mb-12 max-w-xl mx-auto">
          ICCR partners with institutions, scholars, policymakers, and cultural leaders to
          advance research, dialogue, and programs that bridge civilisations and cultures.
        </p>

        {/* CTA BUTTON */}
        <a
          href="mailto:ntyagi@iccrglobal.org"
          className="group inline-flex items-center gap-3 bg-foreground text-background px-9 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase rounded-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.05]"
        >
          <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Get in Touch
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* EMAIL */}
        <p className="mt-6 text-sm text-muted-foreground tracking-wide hover:text-accent transition-colors duration-300">
          ntyagi@iccrglobal.org
        </p>

      </div>
    </SectionReveal>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}
