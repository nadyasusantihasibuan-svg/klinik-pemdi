
export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#003867] text-white pt-4 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Menu navigasi footer */}
        <nav
          aria-label="Informasi layanan"
          className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mb-3 text-sm"
        >
          <a
            href="/faq"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <b>FAQ</b>
          </a>

          <span aria-hidden="true" className="text-gray-300">|</span>

          <a
            href="/privacy"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <b>Privacy</b>
          </a>

          <span aria-hidden="true" className="text-gray-300">|</span>

          <a
            href="/standar-pelayanan"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <b>Standar Pelayanan</b>
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm leading-6">
          <p>
            &copy; Direktorat Akselerasi Teknologi Pemerintah Digital Daerah
          </p>
          <p>Kementerian Komunikasi dan Digital</p>
        </div>
      </div>
    </footer>
  );
}
