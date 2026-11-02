import { useState } from "react";
import VideoModal from "../components/VideoModal";

// Cloudflare R2 video storage
const VIDEO_BASE_URL =
  "https://pub-0499836e4a2a48949db92ad5f2bfbb8b.r2.dev";

const projects = [
  {
    category: "CRM & Automation",
    title: "PrimeNest Properties",
    description:
      "A real estate rental automation demo connecting lead capture, CRM pipelines, viewing appointments, rental applications, lease follow-ups, and payment workflows.",
    tools: "GoHighLevel · CRM · Workflow Automation",
    number: "01",
    video: `${VIDEO_BASE_URL}/primenest.mp4`,
  },
  {
    category: "E-commerce",
    title: "Global Merchandise & Co.",
    description:
      "An independent e-commerce website featuring product browsing, a merchandise catalog, shopping cart, checkout, and order confirmation.",
    tools: "E-commerce · Web Development · Digital Solutions",
    number: "02",
    video: `${VIDEO_BASE_URL}/ecommerce.mp4`,
  },
  {
    category: "Workflow Automation",
    title: "Daily Social Media Feeds",
    description:
      "A Zapier automation project connecting RSS feeds, scheduled workflows, content processing, and social media publishing.",
    tools: "Zapier · RSS · Social Media Automation",
    number: "03",
    video: `${VIDEO_BASE_URL}/daily-feeds.mp4`,
  },
  {
    category: "AI & Automation",
    title: "Weekly AI & UX Digest",
    description:
      "An automated digest workflow that collects RSS updates, processes content using AI, compiles summaries, and delivers a scheduled email roundup.",
    tools: "Zapier · AI Automation · RSS · Email Automation",
    number: "04",
    video: `${VIDEO_BASE_URL}/weekly-digest.mp4`,
  },
  {
    category: "AI & Content Automation",
    title: "AI-Powered Instagram Content",
    description:
      "An independent automation project exploring AI-assisted content preparation and social media workflows.",
    tools: "Zapier · AI · Content Automation",
    number: "05",
    video: `${VIDEO_BASE_URL}/instagram-automation.mp4`,
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="projects"
      className="bg-[#FAF9F6] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#038DCA]">
              Solutions in Action
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#10264A] md:text-5xl">
              Practical solutions. Real projects.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#626B78]">
            Explore independent projects showcasing CRM systems, workflow
            automation, and digital solutions—built to simplify processes
            and support everyday business operations.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.number}
              type="button"
              onClick={() =>
                setSelectedVideo({
                  title: project.title,
                  src: project.video,
                })
              }
              aria-label={`Watch ${project.title} project overview`}
              className="flex h-full w-full cursor-pointer flex-col rounded-xl border border-[#E7E3DC] bg-white p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-[#038DCA]/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#038DCA]"
            >
              {/* Category and Number */}
              <div className="mb-8 flex w-full items-center justify-between gap-3">
                <span className="rounded-full bg-[#EAF5FA] px-3 py-1.5 text-xs font-medium text-[#10264A]">
                  {project.category}
                </span>

                <span className="shrink-0 text-sm font-medium text-[#038DCA]">
                  {project.number}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="mb-3 text-xl font-semibold text-[#10264A]">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mb-6 flex-1 text-sm leading-7 text-[#626B78]">
                {project.description}
              </p>

              {/* Tools */}
              <p className="w-full border-t border-[#E7E3DC] pt-5 text-xs leading-6 text-[#626B78]">
                {project.tools}
              </p>

              {/* Video Action */}
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#038DCA]">
                <span aria-hidden="true">▶</span>
                Watch Project Overview
                <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs leading-6 text-[#626B78]">
          These examples represent independent projects and demonstrations,
          not claims of completed client engagements.
        </p>
      </div>

      {/* Floating Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}