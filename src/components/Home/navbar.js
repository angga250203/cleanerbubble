import { Transition } from "@headlessui/react";
import React, { useState,useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
    const ref = React.createRef();

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    
    
},[])
  
	return (
		<div className="top-0">
			<nav className= {colorChange ? 'bg-white text-black shadow-xl fixed w-full z-50' : 'shadow-sm bg-black text-white fixed w-full z-50'}>
				<div className="w-full">
					<div className="flex items-center h-20 max-w-6xl mx-auto">
						<div className="flex items-center  mx-5  justify-between w-full">
							<div className=" justify-center items-center py-4"> 
							<Image
									src="/asset/logo.webp"
									alt="Picture of the author"
									width={75}
									height={75}
									className="bg-black px-3 py-3 rounded-md"
									/>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-3">
									<Link
										activeClass="Home"
										href="/"
										smooth={true}
										offset={50}
										duration={500}
										className=" cursor-pointer hover:bg-white py-2 px-5 transition-all rounded-md hover:text-black"
									>
										Home
									</Link>
									<Link
										activeClass="about"
										href="/about"
										smooth={true}
										offset={50}
										duration={500}
										className=" cursor-pointer hover:bg-white py-2 px-5 transition-all rounded-md hover:text-black	"
									>
										About
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className=" cursor-pointer hover:bg-white py-2 px-5 transition-all rounded-md hover:text-black"
									>
										Projects
									</Link>

									<Link
										activeClass="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className=" cursor-pointer hover:bg-white py-2 px-5 transition-all rounded-md hover:text-black"
									>
										Services
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className=" cursor-pointer hover:bg-white py-2 px-5 transition-all rounded-md hover:text-black"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className=" flex md:hidden " >
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 mr-5 rounded-md text-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w6 "
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{ (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-gray-300 shadow-xl px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-black text-black hover:text-white hover:shadow-xl block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-black text-black hover:text-white hover:shadow-xl block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-black text-black hover:text-white hover:shadow-xl block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-black text-black hover:text-white hover:shadow-xl block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/contact"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-black text-black hover:text-white hover:shadow-xl block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;