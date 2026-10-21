
import Link from "next/link";
import { Footer } from "@/components/landing/footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Apa itu Klinik Pemerintah Digital?",
        answer:
            "Klinik Pemerintah Digital adalah layanan konsultasi, pendampingan, dan berbagi pengetahuan yang diselenggarakan untuk membantu kementerian, lembaga, pemerintah daerah, dan pemangku kepentingan terkait dalam menyelesaikan permasalahan, memperoleh rekomendasi, serta mempercepat implementasi Pemerintah Digital.",
    },
    {
        question: "Siapa yang dapat menggunakan layanan Klinik ini?",
        answer:
            "Layanan ini dapat dimanfaatkan oleh kementerian, lembaga, pemerintah daerah, perangkat daerah (OPD), serta masyarakat yang membutuhkan informasi atau konsultasi terkait penyelenggaraan Pemerintah Digital.",
    },
    {
        question: "Topik apa saja yang dapat dikonsultasikan?",
        answer:
            "Pengguna dapat berkonsultasi mengenai kebijakan Pemerintah Digital/SPBE, arsitektur SPBE, tata kelola, layanan digital, interoperabilitas data, keamanan informasi, manajemen SPBE, pengembangan SDM TIK, serta topik lain yang berkaitan dengan penyelenggaraan Pemerintah Digital.",
    },
    {
        question: "Bagaimana cara mengajukan pertanyaan?",
        answer:
            "Pertanyaan dapat diajukan melalui laman Klinik Pemerintah Digital atau melalui WhatsApp Official Klinik Pemerintah Digital. Untuk memudahkan proses pencatatan, pemantauan status, dan penyampaian jawaban, pengguna disarankan mengajukan pertanyaan melalui laman Klinik Pemerintah Digital.",
    },
    {
        question: "Apakah layanan ini dipungut biaya?",
        answer:
            "Tidak. Seluruh layanan Klinik Pemerintah Digital diberikan tanpa dipungut biaya.",
    },
    {
        question: "Apakah saya harus memiliki akun?",
        answer:
            "Tidak. Pengguna tidak diwajibkan memiliki akun. Pengguna hanya perlu mengisi data yang diperlukan agar tim dapat menghubungi apabila diperlukan klarifikasi atau ketika jawaban telah tersedia.",
    },
    {
        question: "Apa itu nomor token pertanyaan?",
        answer:
            "Nomor token merupakan identitas unik yang diberikan kepada setiap pertanyaan sebagai sarana untuk memantau status penanganan dan mengakses jawaban yang telah diberikan.",
    },
    {
        question: "Berapa lama proses penanganan pertanyaan?",
        answer:
            "Proses penanganan pertanyaan dilakukan paling lama 1–5 hari kerja, bergantung pada tingkat kompleksitas permasalahan dan kebutuhan koordinasi.",
    },
    {
        question: "Bagaimana jika pertanyaan yang saya sampaikan belum lengkap?",
        answer:
            "Apabila informasi yang disampaikan belum lengkap atau memerlukan klarifikasi, tim Klinik Pemerintah Digital akan menghubungi pengguna melalui WhatsApp untuk memperoleh informasi tambahan.",
    },
    {
        question: "Bagaimana cara melihat jawaban atas pertanyaan saya?",
        answer:
            "Jawaban dapat diakses melalui laman Klinik Pemerintah Digital dengan memasukkan nomor token atau melalui pesan WhatsApp Official Klinik Pemerintah Digital yang dikirimkan oleh admin.",
    },
    {
        question: "Apakah saya dapat mengajukan lebih dari satu pertanyaan?",
        answer:
            "Ya. Pengguna dapat mengajukan lebih dari satu pertanyaan. Setiap pertanyaan akan memperoleh nomor token yang berbeda.",
    },
    {
        question: "Apakah saya dapat mengunggah dokumen pendukung?",
        answer:
            "Ya. Pengguna dapat mengunggah dokumen pendukung melalui formulir pengajuan pertanyaan untuk membantu tim memahami permasalahan dan memberikan jawaban yang lebih tepat.",
    },
    {
        question: "Apakah tersedia konsultasi lanjutan?",
        answer:
            "Ya. Apabila permasalahan memerlukan pembahasan lebih lanjut, pengguna dapat menghubungi WhatsApp Official Klinik Pemerintah Digital untuk mengoordinasikan pelaksanaan konsultasi lanjutan.",
    },
    {
        question: "Apakah konsultasi lanjutan dapat dilakukan secara daring maupun luring?",
        answer:
            "Ya. Konsultasi lanjutan dapat dilaksanakan secara daring maupun luring sesuai kebutuhan dan hasil koordinasi. Konsultasi daring dapat dilakukan melalui WhatsApp Official Klinik Pemerintah Digital atau platform konferensi video. Konsultasi luring dapat diajukan melalui surat resmi kepada Direktorat Akselerasi Digitalisasi Pemerintah Daerah dengan menyampaikan kebutuhan konsultasi, waktu pelaksanaan, dan narahubung.",
    },
    {
        question: "Bagaimana jika jawaban yang diberikan belum menyelesaikan permasalahan saya?",
        answer:
            "Pengguna dapat mengajukan pertanyaan lanjutan atau menyampaikan informasi tambahan agar tim dapat memberikan rekomendasi yang lebih sesuai.",
    },
    {
        question: "Bagaimana jika saya kehilangan nomor token?",
        answer:
            "Pengguna dapat menghubungi admin melalui WhatsApp Official Klinik Pemerintah Digital dengan menyampaikan informasi yang diperlukan untuk proses verifikasi.",
    },
    {
        question: "Apakah data dan informasi yang saya sampaikan aman?",
        answer:
            "Data dan informasi yang disampaikan pengguna hanya digunakan untuk keperluan penyelenggaraan layanan Klinik Pemerintah Digital dan dikelola sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.",
    },
    {
        question: "Apakah Klinik Pemerintah Digital dapat membantu persiapan evaluasi atau asesmen Pemerintah Digital?",
        answer:
            "Ya. Tim Klinik Pemerintah Digital dapat memberikan konsultasi dan pendampingan sepanjang permasalahan yang disampaikan berada dalam ruang lingkup layanan Klinik Pemerintah Digital.",
    },
    {
        question: "Ke mana saya dapat menyampaikan masukan atau pengaduan terhadap layanan?",
        answer:
            "Masukan dan pengaduan dapat disampaikan melalui WhatsApp Official Klinik Pemerintah Digital atau kanal pengaduan resmi yang disediakan.",
    },
];

function FAQHeader() {
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

export default function FAQPage() {
    return (
        <>
            <FAQHeader />

            <main className="min-h-screen bg-white">
                {/* Hero dengan background Komdigi */}
                <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[#F4F9FE]">
                    {/* Gambar background */}
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

                    {/* Lapisan putih agar teks terbaca */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10"
                        style={{
                            background:
                                "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.98) 38%, rgba(255,255,255,0.82) 58%, rgba(235,246,255,0.38) 100%)",
                        }}
                    />

                    <div className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pt-6 sm:pb-14 lg:px-8 lg:pt-8 lg:pb-16">
                        <div className="max-w-3xl">
                            {/* Tombol Kembali di atas Pusat Bantuan */}
                            <Link
                                href="/#footer"
                                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9E8F5] bg-white/90 px-4 py-2 text-sm font-medium text-[#0878BE] shadow-sm transition-colors hover:bg-[#EAF5FC] hover:text-[#003867]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
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

                            {/* Label Pusat Bantuan */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0878BE]">
                                    Pusat Bantuan
                                </span>
                                <span className="h-1 w-14 rounded-full bg-[#168FD3]" />
                            </div>

                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#003867] sm:text-4xl lg:text-5xl">
                                Pertanyaan yang{" "}
                                <span className="text-[#087FC1]">
                                    Sering Diajukan
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#58769A] sm:text-lg sm:leading-8">
                                Temukan jawaban atas pertanyaan seputar
                                layanan Klinik Pemerintah Digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Daftar pertanyaan */}
                <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                    <div className="mx-auto max-w-7xl rounded-2xl border border-[#D9E8F5] bg-white p-4 sm:p-6 lg:p-8">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`faq-${index}`}
                                    className="mb-3 rounded-xl border border-[#D8E5F2] px-4 last:mb-0 sm:px-6"
                                >
                                    <AccordionTrigger className="gap-4 py-5 text-left text-sm font-semibold text-[#06477F] hover:text-[#087FC1] hover:no-underline sm:text-base">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-5 text-sm leading-7 text-[#5B6F85] sm:text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
