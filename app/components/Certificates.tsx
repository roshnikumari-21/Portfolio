type Cert = {
    id: number
    title: string
    issuer: string
    date: string
    url: string
    image?: string
}

const certificates: Cert[] = [
    {
        id: 1,
        title: 'Example Certificate 1',
        issuer: 'Issuer Name',
        date: '2025',
        url: '/certs/cert1.jpg',
        image: '/certs/cert1.jpg'
    },
    {
        id: 2,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert2.jpg',
        image: '/certs/cert2.jpg'
    },
    {
        id: 3,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert3.jpg',
        image: '/certs/cert3.jpg'
    },
    {
        id: 4,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert4.png',
        image: '/certs/cert4.png'
    },
    {
        id: 5,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert5.png',
        image: '/certs/cert5.png'
    },
    {
        id: 6,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert6.png',
        image: '/certs/cert6.png'
    },
    {
        id: 7,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert7.png',
        image: '/certs/cert7.png'
    },
    {
        id: 8,
        title: 'Example Certificate 2',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert8.png',
        image: '/certs/cert8.png'
    }
]

export default function Certificates() {
    return (
        <section id="certificates" className="container mx-auto px-6 py-16 relative z-10">
            <div className="max-w-6xl mx-auto">
                
                <div className="mb-14 text-center">
                  <h2 className="text-4xl font-bold text-white glitch-text mb-4" data-text="AUTHORIZATION // CLEARANCE">
                    AUTHORIZATION // CLEARANCE
                  </h2>
                  <p className="text-[var(--color-cyber-cyan)] font-mono text-sm uppercase">
                    &gt; verified security nodes and certifications
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certificates.map((c) => (
                        <a
                            key={c.id}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cyber-card bg-black/80 hover:bg-[var(--color-cyber-charcoal)] group transition-colors duration-300 relative"
                        >
                            {/* Neon tab decoration */}
                            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                                <div className="w-[1px] h-12 bg-[var(--color-cyber-yellow)] transform rotate-45 translate-x-3 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            
                            <div className="p-2 border-b border-[var(--color-cyber-charcoal)] text-[10px] font-mono text-[var(--color-cyber-cyan)] flex justify-between">
                                <span>SEC_L{c.id}</span>
                                <span className="text-[var(--color-cyber-pink)]">{c.date}</span>
                            </div>

                            <div className="h-32 bg-black flex items-center justify-center p-2 relative overflow-hidden">
                                {/* Scanline on image */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\'><rect width=\'4\' height=\'1\' fill=\'rgba(0,243,255,0.1)\'/></svg>')] pointer-events-none group-hover:opacity-100 opacity-30 transition-opacity"></div>
                                
                                {c.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={c.image} alt={c.title} className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                    <div className="text-[var(--color-cyber-pink)] font-mono text-xs opacity-50 animate-pulse">NO VISUAL DATA</div>
                                )}
                            </div>

                            <div className="p-4 border-t border-[var(--color-cyber-charcoal)]">
                                <h3 className="font-mono text-sm text-white uppercase truncate mb-1" title={c.title}>{c.title}</h3>
                                <p className="font-mono text-[11px] text-[var(--color-cyber-yellow)] truncate">{c.issuer}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
