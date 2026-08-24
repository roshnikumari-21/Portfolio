const techs = [
  'C',
  'C++',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Spring Boot',
  'Tailwind CSS',
  'MongoDB',
  'MySQL',
  'Redis',
  'Kubernetes',
  'Git',
];

export default function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div className="marquee relative z-10" aria-hidden="true">
      <div className="marquee-track py-5 md:py-7">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="mx-6 md:mx-10 font-heading text-xl md:text-3xl tracking-tight text-paper/80"
          >
            {tech}
            <span className="ml-6 md:ml-10 font-display italic text-accent/80">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
