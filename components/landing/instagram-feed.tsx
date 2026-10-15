
export function InstagramFeed() {
    return (
        <section
            id="instagram"
            className="bg-background py-16 md:py-24"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                        Instagram Kami
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Ikuti Aktivitas Klinik Pemdi
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Temukan informasi, edukasi, dan aktivitas
                        terbaru dari Klinik Pemdi melalui Instagram kami.
                    </p>
                </div>

                <iframe
                    src="//lightwidget.com/widgets/0676fa583b8c5bf98f4d9dd95be73ea4.html"
                    title="Instagram Klinik Pemdi"
                    className="lightwidget-widget w-full"
                    scrolling="no"
                    style={{
                        width: "100%",
                        minHeight: "417px",
                        border: 0,
                        overflow: "hidden",
                    }}
                    loading="lazy"
                />

                <div className="mt-6 text-center">
                    <a
                        href="https://www.instagram.com/klinik.pemdi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Kunjungi Instagram Kami
                    </a>
                </div>
            </div>
        </section>
    )
}
