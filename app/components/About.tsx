import AnimationWrapper from './AnimationWrapper';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="01" title="About Me" kicker="Profile" />

        <div className="grid gap-16 lg:grid-cols-12">
          <AnimationWrapper animation="fadeUp" delay={0.1} className="lg:col-span-7">
            <div>
              <h3 className="font-display italic text-3xl md:text-4xl text-accent mb-8">My Journey</h3>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-paper/80">
                <p>
                  I&apos;m a Computer Science Engineering student at NIT Jamshedpur (2023 – 2027) with a passion for
                  building scalable web applications and solving complex problems. With a CGPA of 9.34/10.0, I
                  consistently rank in the top 0.85% of a 700+ student batch.
                </p>
                <p>
                  I completed two on-site SDE internships at Flipkart, Bengaluru. In 2025 I enhanced the Content
                  Management Platform (Flipkart Minutes – Neolite ADP UI), improving automation efficiency by 30%. In
                  2026 I shipped production APIs and backend services for Flipkart&apos;s Compliance Management Platform.
                </p>
                <p>
                  Before NIT, I studied at Dev Sangha National School — 96.2% in class 12 (5th in district) and 97.2% in
                  class 10 (4th in district). When I&apos;m not coding, I compete in programming contests and contribute
                  to open source.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="fadeUp" delay={0.2} className="lg:col-span-5">
            <div>
              <h3 className="kicker mb-8">Achievements</h3>
              <div className="divide-y divide-line border-y border-line">
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">Top 20 Finalist — Flipkart Runway Season 5</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Selected among 50,000+ applicants · May 2025
                  </p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">Selected — Amazon ML Summer School 2026</h4>
                  <p className="text-muted text-sm leading-relaxed">July 2026</p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">Finalist — BNY Mellon Code Divas 2025</h4>
                  <p className="text-muted text-sm leading-relaxed">March 2025</p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">College Rank 12 — CodeKarma, NIT Jamshedpur</h4>
                  <p className="text-muted text-sm leading-relaxed">November 2024</p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">Competitive Programming</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    CodeChef 3★ (1651) · Codeforces Pupil (1227) · LeetCode (1787) · 1200+ problems
                  </p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">IICPC Competitive Programming Summer Camp</h4>
                  <p className="text-muted text-sm leading-relaxed">May 2024</p>
                </article>
                <article className="py-6">
                  <h4 className="font-heading text-xl mb-2">Open-source contributor — GirlScript Summer of Code</h4>
                  <p className="text-muted text-sm leading-relaxed">April 2024</p>
                </article>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
