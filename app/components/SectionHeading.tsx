import AnimationWrapper from './AnimationWrapper';

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <header className="mb-12 md:mb-20">
      <AnimationWrapper animation="fadeUp">
        <p className="kicker mb-4">
          {index} {kicker ? `/ ${kicker}` : ''}
        </p>
        <h2 className="font-heading text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.88] tracking-tight text-paper">
          {title}
        </h2>
      </AnimationWrapper>
    </header>
  );
}
