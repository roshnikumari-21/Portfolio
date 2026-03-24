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
    },
    {
        id: 9,
        title: 'Example Certificate 9',
        issuer: 'Another Issuer',
        date: '2024',
        url: '/certs/cert9.jpeg',
        image: '/certs/cert9.jpeg'
    }
]

export default function Certificates() {
    return (
        <section id="certificates" className="container mx-auto px-6 py-16">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
                <p className="text-gray-300 mb-6">A selection of my professional certificates. Place files under <code className="text-white">/public/certs/</code>.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((c) => (
                        <a
                            key={c.id}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gray-800/60 border border-white/6 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="h-40 bg-black/20 flex items-center justify-center">
                                {c.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={c.image} alt={c.title} className="object-contain h-full w-full" />
                                ) : (
                                    <div className="text-gray-400">No preview</div>
                                )}
                            </div>

                            <div className="p-4">
                                <h3 className="font-medium">{c.title}</h3>
                                <p className="text-sm text-gray-400">{c.issuer} • {c.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
