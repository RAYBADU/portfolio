
const About = () => {
  const strengths = [
    "Designing interfaces that feel clear, calm, and intuitive.",
    "Turning ideas into responsive, production-ready user experiences.",
    "Working comfortably across frontend craftsmanship and backend logic.",
  ];

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7b4d2a]">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            I build thoughtful products that feel simple on the outside and strong underneath.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-[#e7dccf] bg-[#f9f4ef] p-6 md:p-8">
            <p className="text-base leading-8 text-slate-600 md:text-lg">
              I&apos;m a frontend engineer with a strong eye for design and a practical mindset for building digital products. I enjoy solving messy product problems by making interfaces feel effortless, accessible, and memorable.
            </p>

            <div className="mt-8 space-y-4">
              {strengths.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7b4d2a]" />
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-[#e7dccf] bg-white/70 p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Focus</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">Product UI</p>
            </div>

            <div className="rounded-[2rem] border border-[#e7dccf] bg-white/70 p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Approach</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">User-first</p>
            </div>

            <div className="rounded-[2rem] border border-[#e7dccf] bg-white/70 p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Work style</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">Collaborative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
