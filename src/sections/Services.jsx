
const services = [
  {
    number: "01",
    title: "CRM & Business Automation",
    description:
      "Organize leads, automate repetitive tasks, and create consistent follow-up processes using CRM and automation tools.",
    items: ["GoHighLevel", "Zapier", "Workflow Automation"],
  },
  {
    number: "02",
    title: "Websites & Funnels",
    description:
      "Build clear, professional digital experiences that introduce your business, capture leads, and guide customers toward action.",
    items: ["Business Websites", "Landing Pages", "Lead Capture Forms"],
  },
  {
    number: "03",
    title: "Digital Operations Support",
    description:
      "Improve everyday workflows with organized data, process documentation, customer support, and practical digital tools.",
    items: ["Process Documentation", "CRM Management", "Admin Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
            What We Do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#10264A] md:text-5xl">
            Practical solutions for better business operations.
          </h2>
          <p className="mt-5 leading-7 text-[#626B78]">
            We bring together automation, digital experiences, and operational
            support to help businesses work more efficiently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-[#E7E3DC] bg-[#FAF9F6] p-7 transition hover:-translate-y-1 hover:border-[#038DCA]/40 hover:shadow-md"
            >
              <p className="mb-8 text-sm font-medium text-[#038DCA]">
                {service.number}
              </p>
              <h3 className="mb-4 text-xl font-semibold text-[#10264A]">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-7 text-[#626B78]">
                {service.description}
              </p>
              <ul className="space-y-3 border-t border-[#E7E3DC] pt-5">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-[#10264A]">
                    <span className="mr-2 text-[#038DCA]">↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
