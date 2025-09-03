'use client';

import { fetchAPI } from '@/lib/apiClient';
import { Category } from '@/lib/interface';
import { dateTransform } from '@/lib/utils';

import { CircleStackIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const loadCategories = [1, 2, 3, 4, 5];

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const load = async () => {
    const data = await fetchAPI('/api/categories', 'GET');

    setCategories(data.categories);
    setIsLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className='px-4 md:px-0'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold text-gray-900'>
              Categories
            </h1>
            <p className='mt-2 text-sm text-gray-700 font-quicksand'>
              A list of all the categories in your database.
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <Link
              href='/dashboard/categories/add'
              className='block rounded-md bg-[#304428] px-3 py-2 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 font-quicksand'
            >
              Add Category
            </Link>
          </div>
        </div>
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
                              <Skeleton width={50} />
                            </td>
                            <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                              <Skeleton width={100} height={50} />
                            </td>
                            <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                              <Skeleton width={100} />
                            </td>
                            <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                              <Skeleton width={100} />
                            </td>
                            <td className='relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6'>
                              <Skeleton width={25} />
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
                              {category.updatedBy === null
                                ? '-'
                                : category.updatedBy}
                            </td>
                            <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500'>
                              {category.updatedAt === null
                                ? dateTransform(category.createdAt as string)
                                : dateTransform(category.updatedAt as string)}
                            </td>
                            <td className='relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6'>
                              <Link
                                href={`/dashboard/categories/${category.id}`}
                                className='text-[#304428]'
                              >
                                Edit<span className='sr-only'></span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                {isLoading ? (
                  <></>
                ) : categories.length === 0 ? (
                  <div className='my-5 flex flex-col justify-center font-quicksand'>
                    <CircleStackIcon className='text-[#304428] h-[60px]' />
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
    </>
  );
}
