'use client';

import { fetchAPI } from '@/lib/apiClient';
import { Menu } from '@/lib/interface';
import { GroupedMenu, groupMenuByCategory } from '@/lib/utils';

import { useEffect, useState } from 'react';

import { CircleStackIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

import SectionTitle from '@/components/sections/titles/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const loadMenus = [1, 2, 3, 4, 5];

export default function Menus() {
  const [storage, setStorage] = useState<GroupedMenu[]>([]);

  const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = (id: string) => {
    const selected = storage.find((s) => s.categoryId === id);
    if (selected) {
      setSelectedMenus(selected.categoryMenu as Menu[]);
    }
  };

  const isActive = (categoryId: string): boolean => {
    return (
      (selectedMenus.length ===
        storage.find((s) => s.categoryId === categoryId)?.categoryMenu.length &&
        categoryId === 'all') ||
      (storage.find((s) => s.categoryId === categoryId)?.categoryMenu ===
        selectedMenus &&
        categoryId !== 'all')
    );
  };

  useEffect(() => {
    setIsLoading(true);

    const load = async () => {
      const data = await fetchAPI('/api/menus', 'GET');

      const categoryMenu = groupMenuByCategory(data.categories, data.menus);

      const fixedMenu: GroupedMenu = {
        categoryId: 'all',
        categoryName: 'All',
        categoryImage: '',
        categoryMenu: data.menus,
      };

      setStorage([fixedMenu, ...categoryMenu]);
      setSelectedMenus(fixedMenu.categoryMenu);

      setIsLoading(false);
    };

    load();
  }, []);

  return (
    <>
      <SectionTitle
        title='Menus'
        description='A list of all the menus in your database.'
      >
        <Button asChild>
          <Link href={'/dashboard/menus/add'} className='font-quicksand'>
            Add Menu
          </Link>
        </Button>
      </SectionTitle>

      {/* Filter condition */}
      <div className='flex my-5'>
        {storage.map((s, index) => (
          <Badge
            key={index}
            id={s.categoryId}
            variant={isActive(s.categoryId) ? 'default' : 'outline'}
            className='px-4 py-2 mr-3 rounded-full text-xs font-semibold hover:cursor-pointer font-quicksand'
            onClick={() => handleClick(s.categoryId)}
          >
            {s.categoryName as string}
          </Badge>
        ))}
      </div>

      {isLoading ? (
        <></>
      ) : selectedMenus.length === 0 ? (
        <div className='my-5 flex flex-col justify-center font-quicksand'>
          <CircleStackIcon className='text-primary h-[60px]' />
          <p className='text-center mt-2'>
            Currently you have no menu&apos;s data in the database.
          </p>
        </div>
      ) : (
        <></>
      )}

      <ul
        role='list'
        className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
      >
        {isLoading
          ? loadMenus.map((_, index) => (
              <li key={index} className='relative'>
                <div className='group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2'>
                  <Skeleton className='w-[300px] h-[150px]' />
                </div>
                <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
                  <Skeleton className='w-[100px]' />
                </p>
                <p className='pointer-events-none block text-xs font-medium text-gray-500'>
                  <Skeleton className='w-[75px]' />
                </p>
                <p className='pointer-events-none block text-sm font-medium text-gray-500'>
                  <Skeleton className='w-[50px]' />
                </p>
              </li>
            ))
          : selectedMenus.map((menu, index) => (
              <li key={index} className='relative'>
                <div className='group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
                  <Link href={`/dashboard/menus/${menu.id}`}>
                    <Image
                      alt={menu.menuName}
                      src={menu.menuImage}
                      className='pointer-events-none aspect-10/7 object-cover group-hover:opacity-75 w-full h-full'
                      width={300}
                      height={150}
                    />
                  </Link>
                </div>
                <p className='pointer-events-none mt-2 block truncate text-sm text-gray-900 font-semibold font-quicksand'>
                  {menu.menuName}
                </p>
                <p className='pointer-events-none block text-xs font-medium text-gray-500 font-quicksand'>
                  {menu.menuDescription}
                </p>
                <p className='pointer-events-none block text-sm font-medium text-gray-500 mt-1 font-quicksand    '>
                  Rp. {menu.price.toLocaleString()}
                </p>
              </li>
            ))}
      </ul>
    </>
  );
}
