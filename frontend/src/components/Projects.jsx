import React from "react";
import portfolioImage from "../assets/Portfolio image.png";
import wincare from "../assets/Wincare.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Experience",
      type: "Brand / UI Design",
      image: portfolioImage,
      description:
        "A personal portfolio built with an editorial aesthetic, strong typography, and responsive interactions for a modern personal brand.",
      stack: ["React", "Tailwind", "Vite"],
    },
    {
      id: 2,
      title: "Healthcare Foundation Interface",
      type: "Healthcare / Frontend",
      image: wincare,

      description:
        "A product-focused storefront experience with clean product cards, streamlined navigation, and conversion-minded design.",
      stack: ["React", "Tailwind"],
    },
    {
      id: 3,
      title: "Business Dashboard",
      type: "SaaS / Product Design",
      image: portfolioImage,

      description:
        "An internal dashboard designed to simplify data access, highlight key metrics, and support quicker business decisions.",
      stack: ["React", "Node.js", "REST API"],
    },
  ];

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
              Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-4xl">
              Projects I&apos;ve built with purpose.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-600">
            I focus on crafted interfaces, thoughtful product flows, and
            experiences that feel intentional from the first click.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-[#e7dccf] bg-[#f9f4ef] p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b48b]"
            >
              {/* <div className="mb-5 h-44 rounded-3xl border border-[#eadbc7] bg-gradient-to-br from-[#f3e9df] to-[#efe6de] object-contain">
                </div>  */}
              <img src={project.image} alt={project.title} />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 mt-8">
                {project.type}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e7dccf] bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
