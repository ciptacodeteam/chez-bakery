'use client';

import { fetchAPI } from '@/lib/apiClient';
import { validateCategoryForm } from '@/lib/formValidation';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function AddCategory() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { valid, errors } = validateCategoryForm(formData);

    if (!valid) {
      setErrors(errors);
      setIsLoading(false);
      return;
    }

    const data = await fetchAPI('/api/categories', 'POST', formData);

    if (data.success) {
      router.push('/dashboard/categories');
    }

    setIsLoading(false);
  };

  return (
    <>
      <div>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base/7 font-semibold text-gray-900'>
            Category Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm/6 text-gray-500 font-quicksand'>
            Create new category information.
          </p>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <form onSubmit={handleSubmit} className='font-quicksand'>
            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Category Name
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  <input
                    id='categoryName'
                    name='categoryName'
                    type='text'
                    placeholder='Cake'
                    className={clsx(
                      'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6',
                      !errors.categoryName
                        ? 'border-gray-300'
                        : 'border-red-500'
                    )}
                  />
                  {errors.categoryName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.categoryName}
                    </p>
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Category Image
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  <input
                    id='categoryImage'
                    name='categoryImage'
                    type='file'
                    accept='image/jpeg, .jpg, .jpeg, .png'
                    className={clsx(
                      'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#304428] sm:text-sm/6',
                      !errors.categoryImage
                        ? 'border-gray-300'
                        : 'border-red-500'
                    )}
                  />
                  {errors.categoryImage && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.categoryImage}
                    </p>
                  )}
                </dd>
              </div>
            </dl>
            <button
              type='submit'
              className='rounded-md bg-[#304428] px-3 py-2 md:ml-0 text-sm font-semibold text-white shadow-xs hover:bg-[#5d8650] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#304428] ml-4 mt-5 hover:cursor-pointer'
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Create New Category'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
