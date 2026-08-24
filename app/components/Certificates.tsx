import Image from 'next/image';
import SectionHeading from './SectionHeading';
import AnimationWrapper from './AnimationWrapper';

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
  image?: string;
};

const certificates: Cert[] = [
  {
    id: 1,
    title: 'Example Certificate 1',
    issuer: 'Issuer Name',
    date: '2025',
    url: '/certs/cert1.jpg',
    image: '/certs/cert1.jpg',
  },
  {
    id: 2,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert2.jpg',
    image: '/certs/cert2.jpg',
  },
  {
    id: 3,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert3.jpg',
    image: '/certs/cert3.jpg',
  },
  {
    id: 4,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert4.png',
    image: '/certs/cert4.png',
  },
  {
    id: 5,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert5.png',
    image: '/certs/cert5.png',
  },
  {
    id: 6,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert6.png',
    image: '/certs/cert6.png',
  },
  {
    id: 7,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert7.png',
    image: '/certs/cert7.png',
  },
  {
    id: 8,
    title: 'Example Certificate 2',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert8.png',
    image: '/certs/cert8.png',
  },
  {
    id: 9,
    title: 'Example Certificate 9',
    issuer: 'Another Issuer',
    date: '2024',
    url: '/certs/cert9.jpeg',
    image: '/certs/cert9.jpeg',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" title="Certificates" kicker="Proof" />

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          {certificates.map((cert, index) => (
            <AnimationWrapper key={cert.id} animation="fadeUp" delay={index * 0.04} className="bg-ink">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-ink p-4 transition-colors hover:bg-ink-soft"
                data-cursor="view"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-black/40">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted">No preview</div>
                  )}
                </div>
                <h3 className="font-heading text-lg">{cert.title}</h3>
                <p className="kicker mt-2">
                  {cert.issuer} · {cert.date}
                </p>
              </a>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
