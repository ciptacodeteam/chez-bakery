'use client';

import { useState } from 'react';

import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  BellIcon,
  BookOpenIcon,
  TagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { UserButton } from '@clerk/nextjs';

import chezLogo from '@/public/images/chez.png';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const path = usePathname();

  const navigation = [
    {
      name: 'Categories',
      href: '/dashboard/categories',
      icon: TagIcon,
      current: path.includes('categories'),
    },
    {
      name: 'Menus',
      href: '/dashboard/menus',
      icon: BookOpenIcon,
      current: path.includes('menus'),
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='h-full w-full font-quicksand'>
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side='left' className='p-0 w-full max-w-xs'>
            <SheetHeader className='flex items-center justify-between px-6 py-4'>
              <Image src={chezLogo} alt='logo' width={32} height={32} />
              <button
                type='button'
                onClick={() => setSidebarOpen(false)}
                className='-m-2.5 p-2.5'
              >
                <span className='sr-only'>Close sidebar</span>
                <XMarkIcon
                  aria-hidden='true'
                  className='size-6 text-gray-700'
                />
              </button>
            </SheetHeader>
            <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
              <nav className='flex flex-1 flex-col'>
                <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                  <li>
                    <ul role='list' className='-mx-2 space-y-1'>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-50 text-primary'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                            onClick={() => setSidebarOpen(false)}
                          >
                            <item.icon
                              aria-hidden='true'
                              className={classNames(
                                item.current
                                  ? 'text-primary'
                                  : 'text-gray-400 group-hover:text-primary',
                                'size-6 shrink-0'
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
            <div className='my-5'>
              <div className='flex h-16 items-center'>
                <Image src={chezLogo} alt='logo' />
              </div>
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-primary'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-primary',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                          )}
                        >
                          <item.icon
                            aria-hidden='true'
                            className={classNames(
                              item.current
                                ? 'text-primary'
                                : 'text-gray-400 group-hover:text-primary',
                              'size-6 shrink-0'
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              onClick={() => setSidebarOpen(true)}
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>

            {/* Separator */}
            <div
              aria-hidden='true'
              className='h-6 w-px bg-gray-200 lg:hidden'
            />

            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <form action='#' method='GET' className='grid flex-1 grid-cols-1'>
                <input
                  name='search'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  className='col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6'
                />
                <MagnifyingGlassIcon
                  aria-hidden='true'
                  className='pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400'
                />
              </form>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon aria-hidden='true' className='size-6' />
                </button>

                {/* Separator */}
                <div
                  aria-hidden='true'
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                />

                {/* Profile dropdown */}
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
