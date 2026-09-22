import React from "react";

const roles = [
  {
    period: "2026 (SEPTEMBER)",
    title: "Frontend Intern",
    company: "Amalitech voluntary internship - avi",
    description:
      "Through AmaliTech's Voluntary Internship, I helped to build a health queue management system and gained more knowledge on teamwork.",
  },
  {
    period: "2026 (AUGUST)",
    title: "Frontend Intern",
    company: "WINCare Foundation",
    description:
      "I interned with WINCare Foundation and helped them  gain an online presence by building a website for them. Feel free to check it out at the Projects page and also kindly contribute if possible",
  },
  {
    period: "2025 — Present",
    title: "Frontend Developer",
    company: "Independent / Freelance",
    description:
      "Designing and developing responsive web experiences with attention to usability, speed, and polished visual systems.",
  },
 

];

const Experience = () => {
  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
            Experience
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            Building experiences with structure, clarity, and practical product thinking.
          </h1>
        </div>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <div key={index} className="grid gap-4 rounded-[2rem] border border-[#e7dccf] bg-[#f9f4ef] p-6 md:grid-cols-[180px_1fr] md:items-start">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {role.period}
              </p>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                  {role.title}
                </h2>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#7b4d2a]">
                  {role.company}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
