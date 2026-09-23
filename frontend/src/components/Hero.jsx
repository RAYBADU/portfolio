import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Raymond from "../assets/Raymond.jpg";


const Hero = () => {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 py-15 md:flex-row lg:py-28">
      {/* Text Content */}
      <section className="max-w-xl text-center lg:text-left">
        

        <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-900 md:text-7xl">
          Hello, I'm Raymond
        </h1>

        <p className="mt-3 text-lg font-medium text-[#b66a3b] md:text-2xl">
          An Aspiring Fullstack Developer
        </p>

        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
          I build responsive, accessible, and thoughtful web interfaces that
          bridge the gap between complex engineering and human experience. I'm
          also exploring backend and will fully transition into fullstack soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1f2937] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_30px_rgba(31,41,55,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View projects
            <FiArrowRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-[#d8c7b6] bg-white/60 px-5 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-[#b98a60] hover:text-slate-900"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>

      {/* Image */}
      <div className="relative flex justify-center">
        <div className="relative overflow-hidden rounded-4xl border border-[#e7dccf] bg-[#f3eee8] p-2 shadow-[0_18px_35px_rgba(15,23,42,0.08)]">
          <img
            src={Raymond}
            alt="Raymond's portrait"
            className="h-100 w-75 rounded-3xl object-cover object-center sm:h-112.5 sm:w-80 lg:h-120 lg:w-90"
          />
        </div>
      </div>



    </main>
  );
};

export default Hero;
