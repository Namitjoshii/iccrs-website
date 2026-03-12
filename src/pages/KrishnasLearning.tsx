import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { ArrowLeft, BookOpen, Users, Calendar, Award, MapPin, GraduationCap } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaSIj1Ky6L9TSxzYGhMVvM8WqK4YhOiVfhjgYOEw7mrmsuUA/viewform?usp=sharing&ouid=103365739546291456692";

const whoCanAttend = [
  "Diplomats and embassy officials seeking practical negotiation and alliance-building frameworks",
  "Foreign military and uniformed services personnel interested in crisis management and operational strategy",
  "International executives and corporate leaders navigating complex organizational challenges",
  "Policy and governance professionals from global institutions or think tanks",
  "Leadership coaches and consultants working with multinational teams",
  "Academicians, researchers, and students of international relations, global strategy, ethics, and governance",
];

export default function KrishnasLearning() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block rounded-full border border-heritage-gold/40 bg-heritage-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-heritage-gold uppercase mb-5">
                Flagship Executive Program
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Global Executive Program in Diplomacy, Strategy, and Crisis Management
              </h1>
              <p className="text-white/75 text-lg lg:text-xl leading-relaxed max-w-3xl">
                2-Day In-Person Executive Learning + Kurukshetra Reflection Visit
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <main>
        {/* Overview */}
        <section className="py-16 lg:py-20 bg-warm-stone">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionReveal>
              <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-[1.9] text-base lg:text-lg">
                <p>
                  This flagship executive program explores adaptive strategy, diplomacy, and crisis management through the actions and decisions of Krishna in the Mahabharata (A great ancient Indian Epic). Designed for an international audience, the program draws diplomatic and strategic lessons from Krishna's case studies, fully contextualized for participants with no prior knowledge of Indian epics.
                </p>
                <p>
                  The program focuses on Diplomacy, strategic negotiation, coalition-building, ethical decision-making, crisis management, and leadership under uncertainty. Each module is case-based, discussion-led, and interactive, linking Krishna's insights to modern organizational, diplomatic, and global scenarios.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Who Can Attend */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionReveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="h-7 w-7 text-accent" />
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Who Can Attend</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This program is designed for an international audience seeking practical strategic insights.
                  Participants may include:
                </p>
                <ul className="space-y-3">
                  {whoCanAttend.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground leading-relaxed italic">
                  The program is tailored for professionals who want to translate Krishna's strategic, diplomatic,
                  and ethical lessons into actionable frameworks for global leadership, crisis resolution, and
                  decision-making.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Program Details Grid */}
        <section className="py-16 lg:py-20 bg-warm-stone">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SectionReveal delay={0}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <BookOpen className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Program Format</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    2 days of in-person executive sessions followed by a Kurukshetra Reflection Visit.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={100}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <GraduationCap className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Methodology</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Case discussion → Strategy & Policy dilemma → Group debate → Modern application → Framework extraction
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={200}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <Award className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Outcomes</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participants conclude with a structured strategic diplomatic and crisis management framework inspired by Krishna's adaptive strategy and war crisis management, enabling ethical yet pragmatic decision-making applicable to diplomacy, defense, governance, corporate leadership, and multinational operations.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={300}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <MapPin className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Program Contribution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>USD 599</strong> — Includes accommodation, breakfast, lunch on two program days, airport pick and drop, program materials, certificate, and a curated visit to Kurukshetra for experiential learning.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={400}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <Users className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Batch Size</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Limited Seats | Invitation & Application-Based Selection
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    A carefully curated cohort of 25–30 participants for meaningful discussions and rich peer learning.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={500}>
                <div className="rounded-xl border border-border bg-card p-7 shadow-sm h-full">
                  <Calendar className="h-7 w-7 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Tentative Dates</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                     <p><strong>Cohort 1</strong> – February/March 2027 — Applications Open</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Expression of Interest + Apply Now */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Expression of Interest</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Professionals interested in participating in this executive program may submit their details
                  through the Apply Now button. The detailed brochure, schedule, and cohort information will be
                  shared with shortlisted applicants.
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-heritage-gold px-10 py-4 text-base font-semibold text-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Apply Now
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
