
"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";

const categories = [
    {
        id: "survei",
        title: "Survei Kepuasan Layanan",
        image: "/images/Kepuasan-Layanan-Persepsi.png",
        description: "Informasi Survei Layanan & Persepsi Anti Korupsi.",
        imageClass: "max-h-[65vh]",
    },
    {
        id: "aduankonten",
        title: "Standar Pelayanan Klinik Pemerintah Digital",
        image: "/images/Infografis-Standar-Pelayanan.png",
        description: "Infografis standar pelayanan Klinik Pemerintah Digital",
        imageClass: "max-h-[65vh]",
    },
    {
        id: "maklumat",
        title: "Maklumat Pelayanan Konsultasi Klinik Pemerintah Digital",
        image: "/images/Maklumat.png",
        description: "Maklumat pelayanan Konsultasi Klinik Pemerintah Digital",
        imageClass: "max-h-[650px]",
    },
];

export default function StandarPelayananPage() {
    const [activeCategory, setActiveCategory] = useState("survei");

    const selectedCategory =
        categories.find((category) => category.id === activeCategory) ??
        categories[0];

    return (
        <>
            {/* Header - dipertahankan */}
            <header className="sticky top-0 z-50 w-full border-b border-[#D9E8F5] bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
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

            <main className="min-h-screen bg-[#F4F9FE]">

                {/* Judul halaman */}

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
                                    Informasi Layanan
                                </span>
                                <span className="h-1 w-14 rounded-full bg-[#168FD3]" />
                            </div>

                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#003867] sm:text-4xl lg:text-5xl">
                                Standar{" "}
                                <span className="text-[#087FC1]">
                                    Pelayanan
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#58769A] sm:text-lg sm:leading-8">
                                Informasi standar pelayanan, survei kepuasan, dan
                                maklumat pelayanan Klinik Pemerintah Digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Daftar kategori dan konten */}
                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">

                        {/* Kategori sebelah kiri */}
                        <aside className="rounded-xl border border-[#D9E8F5] bg-white p-3 shadow-sm">
                            <h2 className="px-3 pb-3 pt-2 text-sm font-bold text-[#003867]">
                                Kategori Informasi
                            </h2>

                            <div className="space-y-2">
                                {categories.map((category) => {
                                    const isActive =
                                        activeCategory === category.id;

                                    return (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() =>
                                                setActiveCategory(category.id)
                                            }
                                            aria-pressed={isActive}
                                            className={`flex w-full items-start gap-3 rounded-lg px-3 py-4 text-left text-sm font-semibold leading-6 transition-colors ${isActive
                                                ? "bg-[#0878BE] text-white shadow-sm"
                                                : "text-[#344B63] hover:bg-[#EAF5FC] hover:text-[#003867]"
                                                }`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mt-0.5 shrink-0"
                                                aria-hidden="true"
                                            >
                                                <rect
                                                    x="4"
                                                    y="3"
                                                    width="16"
                                                    height="18"
                                                    rx="1"
                                                />
                                                <path d="M8 7h8M8 11h8M8 15h5" />
                                            </svg>

                                            <span>{category.title}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        {/* Konten sebelah kanan */}
                        <article className="min-w-0 overflow-hidden rounded-xl border border-[#D9E8F5] bg-white shadow-sm">
                            <div className="flex items-start gap-3 border-b border-[#D9E8F5] px-5 py-5 sm:px-7">
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-[#0878BE]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <rect x="3" y="4" width="18" height="16" rx="2" />
                                        <path d="M7 8h10M7 12h10M7 16h6" />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="text-base font-bold leading-6 text-[#003867] sm:text-lg">
                                        {selectedCategory.title}
                                    </h2>
                                    <p className="mt-1 text-xs text-[#7890A8]">
                                        Informasi pelayanan
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 sm:p-7">
                                {selectedCategory.image ? (
                                    <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-[#E4EDF5] bg-[#F8FBFE] p-3 sm:min-h-[600px] sm:p-6">
                                        <img
                                            src={selectedCategory.image}
                                            alt={selectedCategory.description}
                                            className={`block w-auto max-w-full rounded-md object-contain ${selectedCategory.id === "maklumat"
                                                ? "max-h-[650px]"
                                                : "max-h-[200vh]"
                                                }`}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-[#B9D4E9] bg-[#F8FBFE] px-5 py-12 text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF5FC] text-[#0878BE]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <path d="M8 10h8M8 14h5" />
                                            </svg>
                                        </div>

                                        <h3 className="text-base font-semibold text-[#003867]">
                                            Informasi Belum Tersedia
                                        </h3>
                                        <p className="mt-2 max-w-md text-sm leading-6 text-[#58769A]">
                                            {selectedCategory.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </article>
                    </div>

                    {/* Tautan FAQ */}
                    <div className="mt-8 rounded-xl border border-[#D9E8F5] bg-white p-5 sm:p-6">
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
                </section>
            </main>

            {/* Footer - dipertahankan */}
            <Footer />
        </>
    );
}
