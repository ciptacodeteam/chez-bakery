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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo */}
            <Link
              href={"/"}>
              <Image
                alt="logo"
                src={isScrolled || isOpen ? logo : logowhite}
                className="w-32 transition-all duration-300"
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
          className={`fixed inset-0 z-40 flex transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="bg-white text-black flex flex-col w-2/5">
            <div className="ml-24 h-screen flex flex-col justify-end">
              <ul className="space-y-6 text-2xl font-medium font-quicksand mb-20">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-yellow-500 transition-colors text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 grid grid-cols-2 w-3/5">
            <div className="relative w-full h-full">
              <Image alt="img2" src={img2} fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image alt="img3" src={img3} fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image alt="img4" src={img4} fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
              <Image alt="img5" src={img5} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-5 z-50 bg-black/70 w-11/12 mx-auto rounded-full transition-colors duration-300',
          isScrolled && 'bg-primary shadow-lg backdrop-blur-md'
        )}
      >
        <nav
          aria-label='Navigation'
          className={cn(
            'flex items-center justify-between px-6 py-2 lg:px-8 font-quicksand transition-shadow duration-300'
          )}
        >
          <div className='flex lg:flex-1'>
            <AppLogo clickable className='max-w-16' />
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch
                className='text-sm/6 font-semibold text-white text-border-animate before:bg-white'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Button
              asChild
              variant={'link'}
              className='hover:no-underline group'
            >
              <Link
                href='/sign-in'
                className='text-sm/6 font-semibold text-white'
              >
                Log in
                <IconArrowRight
                  size={16}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </Link>
            </Button>
          </div>
        </nav>
      </motion.header> */}

      {/* Mobile */}
      {/* <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side='left'
          className='lg:hidden bg-black font-quicksand w-screen'
        >
          <SheetHeader>
            <div className='flex items-center justify-between'>
              <AppLogo clickable className='max-w-[100]' />
              <SheetTrigger asChild>
                <Button
                  className='-m-2.5 rounded-md p-2.5 text-gray-200'
                  variant='ghost'
                  size={'icon'}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon aria-hidden='true' className='size-6' />
                </Button>
              </SheetTrigger>
            </div>
          </SheetHeader>
          <div className='flow-root'>
            <div className='divide-y divide-white/10'>
              <div className='space-y-2 p-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch
                    className='block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='p-6'>
                <Link
                  href='/sign-in'
                  className='rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5 flex items-center gap-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IconLogin2 size={16} />
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet> */}
    </>
  );
}
