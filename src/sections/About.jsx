function About() {
  return (
    <section
      id="about"
      className="bg-[#FAF9F6] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* Left: Section Introduction */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
              About Ascend
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#10264A] md:text-5xl">
              Helping businesses move forward with digital solutions.
            </h2>
          </div>

          {/* Right: About Description */}
          <div className="space-y-5 text-sm leading-7 text-[#626B78]">
            <p>
              Ascend Business Systems helps businesses improve the way they
              operate, connect with customers, and establish their digital
              presence through practical technology and creative solutions.
            </p>

            <p>
              Our approach combines business automation, digital systems,
              and web solutions to simplify processes and support sustainable
              growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;