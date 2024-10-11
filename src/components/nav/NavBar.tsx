import Link from "next/link";
import { navLink } from "./data";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="px-4 mx-auto sm:px-6 lg:px-8 bg-zinc-800">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <Link
          href={"/"}
          className="group hover:scale-[1.05] duration-200 text-slate-300 font-bold flex gap-2 items-center"
        >
          <img width={42} src="/logo.png" alt="Logo" />
          <h1 className="group-hover:text-slate-50 text-2xl sm:text-3xl">Workout Tracker</h1>
        </Link>
        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
          {navLink.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              title={link.title}
              className="text-base hover:scale-[1.05] font-semibold text-slate-300 transition-all duration-200 hover:text-slate-50"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
