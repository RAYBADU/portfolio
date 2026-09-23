import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  // bg-[#f4efe9]

  return (
    <footer className="border-t border-[#e7dccf] bg-[#7b4d2a]/10 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.3rem] text-slate-900">
              RAYMOND
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Building calm, polished digital experiences for people who value
              clarity and craft.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#e7dccf] pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} Raymond. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
