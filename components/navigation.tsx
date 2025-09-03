'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { IconArrowRight } from '@tabler/icons-react';
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

  if (isDashboard || isSignIn) return null;

  return (
    <header className='absolute inset-x-0 top-5 z-50 bg-black/70 w-11/12 mx-auto rounded-full'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between px-6 py-2 lg:px-8 font-quicksand'
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
          <Button asChild variant={'link'} className='hover:no-underline group'>
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

      {/* Mobile */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 font-quicksand'>
          <div className='flex items-center justify-between'>
            <AppLogo clickable className='max-w-[100]' />
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-200'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-white/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
