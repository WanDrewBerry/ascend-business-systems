
const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, current tools, and the challenges you want to address.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We identify a practical approach, map the workflow, and agree on the intended outcome.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We put the solution together, connect the necessary tools, and organize the user experience.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "We check the important steps, resolve issues, and refine the workflow before handoff.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
            How We Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#10264A] md:text-5xl">
            A clear process, from idea to implementation.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-t-2 border-[#038DCA] pt-6"
            >
              <p className="mb-8 text-sm font-medium text-[#038DCA]">
                {step.number}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-[#10264A]">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-[#626B78]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
