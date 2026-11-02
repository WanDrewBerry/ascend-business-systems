
export default function Footer() {
  return (
    <footer className="border-t border-[#E7E3DC] bg-[#FAF9F6] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.12em] text-[#10264A] transition hover:text-[#038DCA]"
        >
          ASCEND
          <span className="ml-2 text-xs font-normal tracking-normal text-[#626B78]">
            BUSINESS SYSTEMS
          </span>
        </a>

        <p className="text-sm text-[#626B78]">
          © {new Date().getFullYear()} Ascend Business Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
