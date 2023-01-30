import { useEffect, useState } from "react";
import NavbarDropdown from "./navbardropdown";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav className="bg-transparent relative">
      <div className="max-w-6xl mx-auto px-5 ">
        <div className="h-24 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-tertiary-300 relative">
          {/* Icon */}
          <Link href="/">
		  <Image
			src="/asset/logo.webp"
			alt="Picture of the author"
			width={100}
			height={100}
			className="py-2 px-2"
									/>
          </Link>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[4px] w-7 bg-white rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-sm lg:text-base fontLinkbody">
		  <Link href="/" className="font-semibold text-white">
              Home
            </Link>
            <Link href="/about" className="font-semibold text-white">
              About
            </Link>
            <Link href="/services" className="font-semibold text-white">
              Services
            </Link>
            <Link href="/blog" className="font-semibold text-white">
              Blog
            </Link>
          </div>

        </div>
         

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}