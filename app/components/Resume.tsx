import Magnetic from './Magnetic';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="02" title="Resume" kicker="Curriculum" />

        <div className="grid items-end gap-10 border-t border-line pt-10 md:grid-cols-12">
          <p className="md:col-span-7 text-lg md:text-2xl leading-relaxed text-paper/80 max-w-2xl">
            Download or view my resume — a concise record of internships, projects, and competitive programming.
          </p>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-4">
            <Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-paper bg-paper px-7 py-3 font-heading text-sm tracking-[0.14em] uppercase text-ink transition-colors hover:bg-transparent hover:text-paper"
              >
                View Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center border border-line px-7 py-3 font-heading text-sm tracking-[0.14em] uppercase text-paper transition-colors hover:border-paper"
              >
                Download
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
