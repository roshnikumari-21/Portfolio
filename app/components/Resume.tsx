export default function Resume() {
    return (
        <section id="resume" className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto bg-gray-800/60 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-semibold mb-4">Resume</h2>
                <p className="text-gray-300 mb-6">
                    Download or view my resume. Place your resume PDF at <code className="text-white">/public/resume.pdf</code> so this link works.
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="mb-6 md:mb-0">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded mr-3"
                        >
                            View Resume
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded"
                        >
                            Download
                        </a>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
