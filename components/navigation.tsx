'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/svg/logo.svg"
import logowhite from "@/public/svg/logowhite.svg"

import img2 from "@/public/images/img2.webp"
import img3 from "@/public/images/img3.webp"
import img4 from "@/public/images/img4.webp"
import img5 from "@/public/images/img5.webp"

export const navigation = [
  { name: 'Home', href: '/' },
  { name: "Chez's Menu", href: '/menus' },
  { name: 'Location', href: 'https://share.google/le4eFOa8gvFFW4y0j' },
  { name: 'Social Media', href: 'https://www.instagram.com/chezbakery_id/' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Login', href: '/sign-in' },
];


export default function Navigation() {
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');
  const isSignIn = path.startsWith('/sign-in');

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedScrolled = localStorage.getItem("isScrolled");
    if (storedScrolled === "true") {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        localStorage.setItem("isScrolled", "true");
      } else {
        setIsScrolled(false);
        localStorage.setItem("isScrolled", "false");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (isDashboard || isSignIn) return null;

  return (
    <>
      <section>
        <div
          className={`fixed z-50 w-full left-0 right-0 transition-all duration-300 py-6
          ${isOpen ? "bg-transparent" : isScrolled ? "bg-white" : "bg-transparent"}`}
        >
          <div className="flex justify-between items-center lg:max-w-7xl mx-auto max-w-11/12">
            {/* Logo */}
            <Link
              href={"/"}>
              <Image
                alt="logo"
                src={isScrolled || isOpen ? logo : logowhite}
                className="lg:w-32 w-28 transition-all duration-300"
              />
            </Link>

            {/* Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <span
                className={`absolute h-0.5 w-6 rounded-sm transition-all duration-300 ${isScrolled || isOpen ? "bg-primary" : "bg-white"
                  } ${isOpen ? "rotate-45" : "-translate-y-2"}`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 rounded-sm transition-all duration-300 ${isScrolled || isOpen ? "bg-primary" : "bg-white"
                  } ${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 rounded-sm transition-all duration-300 ${isScrolled || isOpen ? "bg-primary" : "bg-white"
                  } ${isOpen ? "-rotate-45" : "translate-y-2"}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col md:flex-row transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Left Side (Menu) */}
          <div className="bg-white text-black flex flex-col w-full md:w-2/5 order-1 md:order-none h-screen">
            <div className="px-6 md:ml-18 h-auto md:h-screen flex flex-col justify-start md:justify-end">
              <ul className="space-y-6 text-xl md:text-2xl font-medium font-quicksand mt-28 md:mb-20">
                {navigation.map((item, index) => {
                  const isActive = path === item.href; // cek aktif berdasarkan href

                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`transition-colors ${isActive
                            ? "text-primary font-semibold"
                            : "text-gray-500 hover:text-primary"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Side (Images) */}
          <div className="grid grid-cols-2 w-full md:w-3/5 order-2 md:order-none">
            <div className="relative w-full h-52 md:h-full">
              <Image alt="img2" src={img2} fill className="object-cover" />
            </div>
            <div className="relative w-full h-52 md:h-full">
              <Image alt="img3" src={img3} fill className="object-cover" />
            </div>
            <div className="relative w-full h-52 md:h-full">
              <Image alt="img4" src={img4} fill className="object-cover" />
            </div>
            <div className="relative w-full h-52 md:h-full">
              <Image alt="img5" src={img5} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
