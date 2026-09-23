
import {
  FiDatabase,
  FiServer,
  FiCode,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

const Stacks = () => {
  const frontendStack = [
    {
      id: 1,
      label: "React",
      description: "Component-driven interfaces built for clarity and speed.",
      icon: <FaReact size={24} />,
    },
    {
      id: 2,
      label: "JavaScript",
      description: "Interactive behavior with strong UI logic and state flow.",
      icon: <FiCode size={24} />,
    },
    {
      id: 3,
      label: "CSS / Tailwind",
      description: "Polished layouts, responsive systems, and visual consistency.",
      icon: <FaCss3Alt size={24} />,
    },
   
  ];

  const backendStack = [
    {
      id: 1,
      label: "Node.js",
      description: "Fast server-side JavaScript for APIs and application logic.",
      icon: <FaNodeJs size={24} />,
    },
    {
      id: 2,
      label: "Express",
      description: "Simple and scalable routing for backend services.",
      icon: <FiServer size={24} />,
    },
    {
      id: 3,
      label: "MongoDB",
      description: "Flexible data modeling for web apps and content-driven products.",
      icon: <FiDatabase size={24} />,
    },
   
  ];

  const renderStack = (items, title) => (
    <div className="rounded-[2rem] border border-[#e7dccf] bg-[#f9f4ef] p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
      <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
        {title}
      </p>

      <div className="space-y-3">
        {items.map((stack) => (
          <div
            key={stack.id}
            className="group flex items-start gap-4 rounded-2xl border border-[#efe2d4] bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d3ab86]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2e8dc] text-[#493126] transition-colors duration-300 group-hover:bg-[#e7d2b8] group-hover:text-[#2b1d18]">
              {stack.icon}
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-900">{stack.label}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {stack.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
              Stack
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-4xl">
              Tools I use to build thoughtful digital experiences.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-600">
            From interface design to the data layer, I focus on tools that keep the product fast, clear, and reliable.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {renderStack(frontendStack, "Frontend")}
          {renderStack(backendStack, "Backend")}
        </div>
      </div>
    </section>
  );
};

export default Stacks;

