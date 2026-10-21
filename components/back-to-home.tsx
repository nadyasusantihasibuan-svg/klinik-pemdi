
import Link from "next/link";

export function BackToHome() {
    return (
        <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9E8F5] bg-white px-4 py-2 text-sm font-medium text-[#0878BE] shadow-sm transition-colors hover:bg-[#EAF5FC] hover:text-[#003867]"
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

            Kembali ke Beranda
        </Link>
    );
}
