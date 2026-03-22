export default function Resume() {
    return (
        <section id="resume" className="container mx-auto px-6 py-16 relative z-10">
            <div className="max-w-4xl mx-auto cyber-card p-1 bg-black/80">
                <div className="bg-[var(--color-cyber-charcoal)] px-4 py-2 border-b border-[var(--color-cyber-cyan)] flex justify-between items-center">
                    <span className="font-mono text-sm text-[var(--color-cyber-cyan)] uppercase">
                        CREDENTIALS_DOWNLOAD // INIT
                    </span>
                    <span className="w-2 h-2 bg-[var(--color-cyber-yellow)] animate-pulse inline-block"></span>
                </div>
                
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-widest">
                        Operative Resume
                    </h2>
                    <p className="text-gray-400 font-mono text-sm mb-8 max-w-xl">
                        &gt; ACCESS GRANTED. Download or view verified technical capabilities and operational history. 
                        Target file: <code className="text-[var(--color-cyber-pink)]">/sys/credentials/resume.pdf</code>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button text-center"
                        >
                            [ VIEW_RECORD ]
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="cyber-button text-center !border-[var(--color-cyber-pink)] !text-[var(--color-cyber-pink)] hover:!text-black before:!bg-[var(--color-cyber-pink)]"
                        >
                            // DOWNLOAD_DATA
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
