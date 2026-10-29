
import Link from "next/link";
import { PiChefHatFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

function Nav() {
  return (
    <nav className="w-full border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 lg:px-12">
      <div className="flex w-full flex-wrap items-center justify-between gap-y-4">

        {/* Logo */}
        <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start">
          <PiChefHatFill className="text-3xl sm:text-4xl lg:text-[52px]" />
          <h2 className="whitespace-nowrap text-xl font-bold sm:text-xl lg:text-2xl">
            Recipe Explorer
          </h2>
        </div>

        {/* Menu */}
        <div className="flex w-full items-center justify-center gap-8 text-sm sm:w-auto sm:gap-5 md:gap-8 lg:gap-12 lg:-translate-x-8">
          <Link className="transition hover:text-green-600" href="/">
            Home
          </Link>
          <Link className="transition hover:text-green-600" href="/Recipe">
            Recipes
          </Link>
          <Link className="transition hover:text-green-600" href="/About">
            About
          </Link>
        </div>

        {/* Search - Hidden on mobile */}
        <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 sm:flex">
          <IoSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search recipes..."
            aria-label="Search recipes"
            className="w-40 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 md:w-48 lg:w-64 xl:w-96"
          />
        </div>

      </div>
    </nav>
  );
}

export default Nav;
