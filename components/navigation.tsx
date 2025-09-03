'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { IconArrowRight, IconLogin2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AppLogo from './brands/AppLogo';
import { Button } from './ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menus' },
  { name: 'Contact Us', href: '' },
];

export default function Navigation() {
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');
  const isSignIn = path.startsWith('/sign-in');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDashboard || isSignIn) return null;

  return (
    <>
      <motion.header
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
      </motion.header>

      {/* Mobile */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
      </Sheet>
    </>
  );
}
