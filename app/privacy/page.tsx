
import Link from "next/link";
import { Footer } from "@/components/landing/footer";

function PrivacyHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#D9E8F5] bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo Klinik Pemdi */}
                <Link
                    href="/"
                    aria-label="Kembali ke Beranda Klinik Pemerintah Digital"
                    className="flex min-w-0 items-center gap-3"
                >
                    <img
                        src="/images/klinik_logo.svg"
                        alt="Logo Klinik Pemerintah Digital"
                        className="h-10 w-10 shrink-0 object-contain"
                    />

                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#003867] sm:text-base">
                            Klinik Pemerintah Digital
                        </p>
                        <p className="text-xs text-[#58769A]">
                            Konsultasi Digital
                        </p>
                    </div>
                </Link>

                {/* Tombol Aksi */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                    <Link
                        href="/auth/login"
                        className="hidden rounded-full border border-[#0878BE] px-4 py-2 text-sm font-medium text-[#0878BE] transition-colors hover:bg-[#EAF5FC] sm:inline-flex"
                    >
                        Masuk sebagai Admin
                    </Link>

                    <Link
                        href="/konsultasi-form"
                        className="inline-flex items-center justify-center rounded-full bg-[#0878BE] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#003867] sm:px-6 sm:text-sm"
                    >
                        Mulai Konsultasi
                    </Link>
                </div>
            </div>
        </header>
    );
}

const privacySections = [
    {
        title: "1. Pendahuluan",
        paragraphs: [
            "Klinik Pemerintah Digital (“kami”) menghormati privasi Anda. Kebijakan Privasi ini menjelaskan cara kami mengumpulkan, menggunakan, menyimpan, mengungkapkan, dan melindungi data pribadi Anda ketika Anda menggunakan situs web klinikpemdi.layanan.go.id beserta layanan terkait, sesuai dengan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (“UU PDP”) dan peraturan pelaksanaannya.",
            "Dengan menggunakan situs web kami, Anda menyatakan telah membaca Kebijakan Privasi ini. Dalam hal pemrosesan data pribadi didasarkan pada persetujuan, kami akan meminta persetujuan Anda secara terpisah.",
        ],
    },
    {
        title: "2. Pengendali Data Pribadi",
        paragraphs: [
            "Klinik Pemerintah Digital bertindak sebagai pengendali data pribadi atas data yang diproses melalui situs web klinikpemdi.layanan.go.id. Kami berkedudukan di Jakarta, Indonesia.",
            <>
                <strong>Kontak terkait privasi:</strong>{" "}
                klinikpemdi@layanan.go.id
            </>

        ],
    },
    {
        title: "3. Data Pribadi yang Kami Kumpulkan",
        paragraphs: [
            "Bergantung pada cara Anda berinteraksi dengan kami, kami dapat memproses data pribadi sebagai berikut:",
        ],
        bullets: [
            "Nama, alamat surel, serta nomor telepon atau WhatsApp.",
            "Data akun, seperti nama pengguna dan kata sandi, yang disimpan dalam bentuk terenkripsi.",
        ],
    },
    {
        title: "4. Cara Kami Mengumpulkan Data Pribadi",
        paragraphs: [
            "Kami mengumpulkan data pribadi secara langsung dari Anda, antara lain ketika Anda mengisi formulir, menghubungi kami, mendaftarkan akun, atau melakukan pemesanan.",
        ],
    },
    {
        title: "5. Tujuan dan Dasar Hukum Pemrosesan Data Pribadi",
        paragraphs: [
            "Kami memproses data pribadi untuk tujuan berikut, dengan masing-masing tujuan didasarkan pada salah satu dasar pemrosesan yang sah sebagaimana diatur dalam Pasal 20 ayat (2) UU PDP:",
        ],
        bullets: [
            <>
                <strong>Menanggapi pertanyaan, permintaan informasi, atau konsultasi yang Anda sampaikan</strong>{" "}
                — berdasarkan persetujuan Anda.
            </>,
            <>
                <strong>Menyediakan layanan serta memproses pemesanan, pembayaran, dan pengiriman</strong>{" "}
                — berdasarkan pelaksanaan perjanjian dengan Anda.
            </>,
            <>
                <strong>Menganalisis penggunaan situs web untuk meningkatkan konten dan layanan kami </strong>{" "}
                — berdasarkan persetujuan Anda.
            </>,
            <>
                <strong>Menjaga keamanan situs web serta mencegah penipuan dan penyalahgunaan</strong>{" "}
                berdasarkan kepentingan yang sah, dengan tetap mempertimbangkan hak dan kepentingan Anda.
            </>,
            <>
                <strong>Memenuhi kewajiban hukum,</strong>{" "}
                termasuk kewajiban penyimpanan catatan transaksi dan pemenuhan permintaan dari otoritas yang berwenang — berdasarkan pemenuhan kewajiban hukum.
            </>

        ],
    },
    {
        title: "6. Pengungkapan Data kepada Pihak Ketiga",
        paragraphs: [
            "Kami tidak menjual data pribadi Anda. Kami hanya membagikan data pribadi kepada pihak-pihak yang membantu kami mengoperasikan situs web dan menyediakan layanan, berdasarkan perjanjian yang mewajibkan pihak-pihak tersebut untuk melindungi data pribadi Anda.",
            <>
                Pihak-pihak tersebut meliputi:
                <strong> Penyedia layanan hosting situs web dan server.</strong>
            </>,
            "Kami juga dapat mengungkapkan data pribadi apabila diwajibkan oleh peraturan perundang-undangan atau diminta oleh otoritas yang berwenang.",
        ],
    },
    {
        title: "7. Jangka Waktu Penyimpanan Data",
        paragraphs: [
            "Kami menyimpan data pribadi selama diperlukan untuk memenuhi tujuan pemrosesan, kecuali apabila peraturan perundang-undangan mewajibkan penyimpanan dalam jangka waktu yang lebih lama, misalnya untuk catatan keuangan dan perpajakan. Setelah jangka waktu penyimpanan berakhir, kami akan menghapus atau menganonimkan data pribadi tersebut.",
        ],
    },
    {
        title: "8. Keamanan Data Pribadi",
        paragraphs: [
            "Kami menerapkan langkah-langkah teknis dan organisatoris yang sesuai untuk melindungi data pribadi dari akses, perubahan, pengungkapan, kehilangan, atau pemusnahan yang tidak sah. Langkah-langkah tersebut meliputi penggunaan koneksi terenkripsi (HTTPS), pembatasan akses, dan pembaruan sistem secara berkala.",
            "Apabila terjadi kegagalan pelindungan data pribadi, kami akan menyampaikan pemberitahuan secara tertulis kepada Anda dan otoritas yang berwenang paling lambat 3 x 24 (tiga kali dua puluh empat) jam, sesuai dengan ketentuan Pasal 46 UU PDP.",
        ],
    },
    {
        title: "9. Hak-Hak Anda",
        paragraphs: [
            "Sebagai subjek data pribadi, Anda memiliki hak untuk:",
        ],
        bullets: [
            "Memperoleh informasi mengenai identitas pengendali data pribadi, dasar hukum, tujuan, dan penggunaan data pribadi Anda.",
            "Melengkapi, memperbarui, dan/atau memperbaiki kesalahan atau ketidakakuratan data pribadi Anda.",
            "Mengakses dan memperoleh salinan data pribadi Anda.",
            "Mengakhiri pemrosesan, menghapus, dan/atau memusnahkan data pribadi Anda.",
            "Menarik kembali persetujuan yang telah Anda berikan.",
            "Mengajukan keberatan terhadap keputusan yang hanya didasarkan pada pemrosesan otomatis, termasuk pemrofilan, yang menimbulkan akibat hukum atau berdampak signifikan terhadap Anda.",
            "Menunda atau membatasi pemrosesan data pribadi Anda.",
            "Memperoleh dan/atau menggunakan data pribadi Anda dalam format yang lazim digunakan dan dapat dibaca oleh sistem elektronik.",
            "Mengajukan gugatan dan memperoleh ganti rugi atas pelanggaran dalam pemrosesan data pribadi Anda.",
        ],
        closingParagraphs: [
            "Untuk menggunakan hak-hak tersebut, silakan menghubungi kami melalui surel klinikpemdi@layanan.go.id. Kami dapat melakukan verifikasi identitas sebelum menindaklanjuti permintaan Anda. Kami akan memberikan tanggapan dalam jangka waktu yang ditetapkan oleh UU PDP dan peraturan pelaksanaannya, termasuk dalam waktu paling lambat 3 x 24 (tiga kali dua puluh empat) jam untuk permintaan yang secara khusus memiliki batas waktu tersebut berdasarkan ketentuan peraturan perundang-undangan.",
            "Pelaksanaan hak-hak tertentu dapat dibatasi dalam keadaan sebagaimana diatur oleh peraturan perundang-undangan.",
        ]
    },
    {
        title: "10. Data Pribadi Anak",
        paragraphs: [
            "Situs web kami tidak ditujukan bagi anak-anak yang berusia di bawah 18 tahun. Kami tidak secara sengaja mengumpulkan data pribadi anak tanpa persetujuan orang tua dan/atau wali. Apabila Anda meyakini bahwa seorang anak telah memberikan data pribadi kepada kami, silakan menghubungi kami agar data tersebut dapat dihapus.",
        ],
    },
    {
        title: "11. Perubahan Kebijakan Privasi",
        paragraphs: [
            "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan selalu tersedia pada halaman ini beserta tanggal berlakunya. Apabila terdapat perubahan yang signifikan, kami akan memberitahukan perubahan tersebut melalui situs web atau sarana lain yang sesuai.",
        ]
    },
    {
        title: "12. Hubungi Kami",
        paragraphs: [
            "Apabila Anda memiliki pertanyaan, permintaan, atau pengaduan terkait pemrosesan data pribadi Anda, silakan menghubungi Klinik Pemerintah Digital melalui surel klinikpemdi@layanan.go.id.",
        ]
    }
];

export default function PrivacyPage() {
    return (
        <>
            <PrivacyHeader />

            <main className="min-h-screen bg-white">
                {/* Hero dengan background Komdigi */}
                <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[#F4F9FE]">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-20 bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('/images/Kementerian-Komdigi.png')",
                            backgroundPosition: "right center",
                            backgroundSize: "auto 160%",
                        }}
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10"
                        style={{
                            background:
                                "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.98) 38%, rgba(255,255,255,0.82) 58%, rgba(235,246,255,0.38) 100%)",
                        }}
                    />

                    <div className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 sm:pt-6 sm:pb-18 lg:px-8 lg:pt-8 lg:pb-20">
                        <div className="max-w-3xl">
                            <Link
                                href="/#footer"
                                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9E8F5] bg-white/90 px-4 py-2 text-sm font-medium text-[#0878BE] shadow-sm transition-colors hover:bg-[#EAF5FC] hover:text-[#003867]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="m12 19-7-7 7-7" />
                                    <path d="M19 12H5" />
                                </svg>
                                Kembali
                            </Link>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0878BE]">
                                    Informasi Pengguna
                                </span>
                                <span className="h-1 w-14 rounded-full bg-[#168FD3]" />
                            </div>

                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#003867] sm:text-4xl lg:text-5xl">
                                Kebijakan{" "}
                                <span className="text-[#087FC1]">
                                    Privasi
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#58769A] sm:text-lg sm:leading-8">
                                Informasi mengenai pengelolaan, penggunaan,
                                dan perlindungan data dalam layanan Klinik Pemerintah Digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Isi Kebijakan Privasi */}
                <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                    <article className="mx-auto max-w-4xl">
                        <div className="mb-8 rounded-xl border border-[#D9E8F5] bg-[#F4F9FE] p-5 sm:p-6">
                            <h2 className="text-lg font-semibold text-[#003867]">
                                Tentang Kebijakan Ini
                            </h2>
                            <p className="mt-2 text-sm leading-7 text-[#58769A] sm:text-base">
                                Kebijakan ini menjadi informasi bagi pengguna
                                mengenai pengelolaan informasi ketika
                                mengakses dan menggunakan layanan Klinik
                                Pemerintah Digital.
                                <strong> Tanggal Berlaku: 14 Oktober 2026.</strong>
                            </p>
                        </div>


                        <div className="space-y-8 sm:space-y-6">
                            {privacySections.map((section, index) => (
                                <section
                                    key={section.title}
                                    aria-labelledby={`privacy-section-${index}`}
                                >
                                    <h2
                                        id={`privacy-section-${index}`}
                                        className="border-b border-[#D9E8F5] pb-3 text-lg font-bold text-[#003867] sm:text-xl"
                                    >
                                        {section.title}
                                    </h2>

                                    <div className="mt-2 space-y-2 text-sm leading-7 text-[#4B6178] sm:text-base sm:leading-8">
                                        {/* Paragraf pembuka */}
                                        {section.paragraphs.map(
                                            (paragraph, paragraphIndex) => (
                                                <p key={paragraphIndex}>
                                                    {paragraph}
                                                </p>
                                            )
                                        )}

                                        {/* Bullet list */}
                                        {section.bullets && (
                                            <ul className="list-disc space-y-2 pl-6 marker:text-[#087FC1]">
                                                {section.bullets.map(
                                                    (bullet, bulletIndex) => (
                                                        <li key={bulletIndex}>
                                                            {bullet}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                        {/* Paragraf penutup setelah bullet list */}
                                        {section.closingParagraphs?.map(
                                            (paragraph, paragraphIndex) => (
                                                <p key={`closing-${paragraphIndex}`}>
                                                    {paragraph}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>


                        <div className="mt-10 rounded-xl border border-[#D9E8F5] bg-white p-5 sm:p-6">
                            <p className="text-sm leading-7 text-[#58769A]">
                                Untuk informasi lebih lanjut mengenai layanan,
                                silakan kunjungi halaman{" "}
                                <Link
                                    href="/faq"
                                    className="font-semibold text-[#0878BE] underline underline-offset-4 hover:text-[#003867]"
                                >
                                    Pertanyaan yang Sering Diajukan (FAQ)
                                </Link>
                                .
                            </p>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />
        </>
    );
}
