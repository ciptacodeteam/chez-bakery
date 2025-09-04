'use client';

import { fetchAPI } from '@/lib/apiClient';
import { Category } from '@/lib/interface';

import { CircleStackIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import Image from 'next/image';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import SectionTitle from '@/components/sections/titles/SectionTitle';
import { Button } from '@/components/ui/button';
import { IconPencil } from '@tabler/icons-react';

const loadCategories = [1, 2, 3, 4, 5];

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    const load = async () => {
      const data = await fetchAPI('/api/categories', 'GET');

      setCategories(data.categories);
      setIsLoading(false);
    };

    load();
  }, []);

  return (
    <div className='px-4 md:px-0'>
      <SectionTitle
        title='Categories'
        description='A list of all the categories in your database.'
      >
        <Button asChild>
          <Link href='/dashboard/categories/add' className='font-quicksand'>
            Add Category
          </Link>
        </Button>
      </SectionTitle>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Category Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Category Image
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Updated By
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Updated On
                    </th>
                    <th
                      scope='col'
                      className='relative py-3.5 pr-4 pl-3 sm:pr-6'
                    >
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white font-quicksand'>
                  {isLoading
                    ? loadCategories.map((c, index) => (
                        <tr key={index}>
                          <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6'>
                            <Skeleton className={'w-[50px]'} />
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            <Skeleton className={'w-[120px] h-[60px]'} />
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            <Skeleton className={'w-[100px]'} />
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            <Skeleton className={'w-[100px]'} />
                          </td>
                          <td className='relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6'>
                            <Skeleton className={'w-[25px]'} />
                          </td>
                        </tr>
                      ))
                    : categories.map((category, index) => (
                        <tr key={index}>
                          <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6'>
                            {category.categoryName}
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            <Image
                              src={category.categoryImage}
                              className='w-[100px] h-[100px] object-contain'
                              width={100}
                              height={100}
                              alt='category'
                            />
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            {category.updatedBy ? category.updatedBy : '-'}
                          </td>
                          <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                            {!category.updatedAt
                              ? dayjs(category.createdAt).format('DD MMM YYYY')
                              : dayjs(category.updatedAt).format('DD MMM YYYY')}
                          </td>
                          <td className='relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6'>
                            <Button asChild variant='secondary'>
                              <Link
                                href={`/dashboard/categories/${category.id}`}
                                className='text-primary font-quicksand'
                              >
                                <IconPencil
                                  size={16}
                                  className='inline-block'
                                />
                                Edit<span className='sr-only'></span>
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
              {isLoading ? (
                <></>
              ) : categories.length === 0 ? (
                <div className='my-5 flex flex-col justify-center font-quicksand'>
                  <CircleStackIcon className='text-primary h-[60px]' />
                  <p className='text-center mt-2'>
                    Currently you have no categories data in the database.
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
