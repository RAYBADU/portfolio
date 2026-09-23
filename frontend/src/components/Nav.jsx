import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {FiCode} from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Experience", href: "/experience" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 ">
      <nav className="relative mx-auto flex w-full items-center justify-between border border-[#e9ddcf] bg-[#f7f3ee]/90 px-5 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)] backdrop-blur-sm">
        <Link
          to="/"
          className="text-lg font-semibold tracking-[0.35rem] text-slate-900 flex items-center"
        >
          <p>RAYMOND</p>
          
          <span className="">
            <FiCode size={26} />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#b66a3b]"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-lg border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 md:block"
        >
          Let&apos;s talk
        </Link>  

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dccf] cursor-pointer text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </nav>

      {isOpen && (
        <div className=" absolute z-50 mx-auto  max-w-3xl w-full rounded-3xl  border-[#e7dccf] bg-[#f9f4ef] p-4 shadow-[0_18px_35px_rgba(15,23,42,0.08)] md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
