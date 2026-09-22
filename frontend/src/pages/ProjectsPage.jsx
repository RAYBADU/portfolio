import React from "react";

const projects = [
  {
    title: "Portfolio Experience",
    type: "Brand / UI Design",
    description:
      "A refined personal portfolio designed to communicate clarity, trust, and modern craftsmanship through typography and interaction.",
    stack: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Commerce Dashboard",
    type: "E-commerce",
    description:
      "A conversion-focused storefront with clean product layouts, category flows, and better customer decision support.",
    stack: ["React", "CSS", "UX flow"],
  },
  {
    title: "Business Analytics UI",
    type: "SaaS / Product",
    description:
      "A metrics-heavy interface designed to help teams understand performance at a glance without overwhelming the user.",
    stack: ["React", "Node.js", "REST API"],
  },
  {
    title: "Client Portal",
    type: "Web App",
    description:
      "A structured portal experience for managing shared workflows, views, and user-centric product interactions.",
    stack: ["React", "MongoDB", "Express"],
  },
];

const ProjectsPage = () => {
  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            Selected work shaped around product clarity and real-world use.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-[#e7dccf] bg-[#f9f4ef] p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 h-48 rounded-[1.5rem] border border-[#eadcc8] bg-gradient-to-br from-[#f5efe8] to-[#efe5da]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                {project.type}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e7dccf] bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-600"
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

export default ProjectsPage;
