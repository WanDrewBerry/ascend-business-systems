export default function Footer() {
  return (
    <footer className="border-t border-[#E7E3DC] bg-[#FAF9F6] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        {/* Brand Logo and Text */}
        <a
          href="#home"
          className="flex items-center gap-3 transition hover:opacity-80"
          aria-label="Ascend Business Systems - Home"
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt=""
            className="h-10 w-10 shrink-0 object-contain"
          />

          {/* Brand Text */}
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold tracking-[0.16em] text-[#10264A]">
              ASCEND
            </span>

            <span className="text-[9px] tracking-[0.2em] text-[#626B78]">
              BUSINESS SYSTEMS
            </span>
          </div>
        </a>

        {/* Copyright */}
        <p className="text-sm text-[#626B78]">
          © {new Date().getFullYear()} Ascend Business Systems. All rights reserved.
        </p>

      </div>
    </footer>
  );
}