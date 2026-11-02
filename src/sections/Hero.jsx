export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAF9F6] px-6 pb-24 pt-24 md:pb-32 md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
          CRM · Automation · Digital Solutions
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-[#10264A] sm:text-5xl md:text-7xl">
          Better systems.
          <br />
          More room to <span className="text-[#038DCA]">grow.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#626B78] md:text-lg">
          We help businesses streamline operations, manage customer
          relationships, and build practical digital systems that support
          growth.
        </p>

        {/* Hero Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* Primary Button - Contact Section */}
          <a
            href="#contact"
            style={{
              backgroundColor: "#10264A",
              color: "#FFFFFF",
            }}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition hover:opacity-90"
          >
            Discuss Your Project
          </a>

          {/* Secondary Button - Solutions in Action */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-[#D9D5CC] bg-white px-7 py-3.5 text-sm font-medium text-[#10264A] transition hover:border-[#038DCA] hover:bg-[#EAF5FA]"
          >
            Explore Solutions →
          </a>

        </div>

        <div className="mt-20 border-t border-[#E7E3DC] pt-6">
          <p className="text-xs uppercase tracking-[0.16em] text-[#626B78]">
            Practical digital solutions for growing businesses
          </p>
        </div>
      </div>
    </section>
  );
}