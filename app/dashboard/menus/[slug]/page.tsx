'use client';

import { fetchAPI } from '@/lib/apiClient';
import { Category, Menu } from '@/lib/interface';

import { usePathname, useRouter } from 'next/navigation';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { validateMenuForm } from '@/lib/formValidation';
import clsx from 'clsx';

import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export default function MenuDetail() {
  const path = usePathname();
  const router = useRouter();

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const [menuDetail, setMenuDetail] = useState<Menu>({
    id: '',
    menuName: '',
    menuDescription: '',
    menuImage: '',
    isActive: true,
    isFavourite: true,
    price: 0,
    categoryId: '',
  });
  const [categories, setCategories] = useState<Category[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoadingSubmit(true);

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append('prevImageUrl', menuDetail.menuImage);
    formData.append('isFavourite', isFavourite.toString());

    const { valid, errors } = validateMenuForm(formData, 'PUT');

    if (!valid) {
      setErrors(errors);
      setIsLoadingSubmit(false);
      return;
    }

    const data = await fetchAPI(
      `/api/menus/${path.split('/')[3]}`,
      'PUT',
      formData
    );

    if (data.success) {
      router.push('/dashboard/menus');
    }

    setIsLoadingSubmit(false);
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'favourite') {
      setIsFavourite(!isFavourite);
      return;
    }

    setMenuDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchAPI(`/api/menus/${path.split('/')[3]}`, 'GET');

      setMenuDetail(data.menuDetail);
      setIsFavourite(data.menuDetail.isFavourite);
      setCategories(data.categories);
      setIsLoading(false);
    };

    load();
  }, [path]);

  return (
    <>
      <div>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base/7 font-semibold text-gray-900'>
            Menu Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm/6 text-gray-500 font-quicksand'>
            Create new menu information.
          </p>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <form onSubmit={handleSubmit} className='font-quicksand'>
            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Menu Name
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  {isLoading ? (
                    <Skeleton className='w-[200px]' />
                  ) : (
                    <input
                      id='menuName'
                      name='menuName'
                      type='text'
                      onChange={handleChange}
                      value={menuDetail.menuName}
                      placeholder='Cake'
                      className={clsx(
                        'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6',
                        errors.menuName === undefined
                          ? 'border-gray-300'
                          : 'border-red-500'
                      )}
                    />
                  )}
                  {errors.menuName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.menuName}
                    </p>
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Category Name
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  {isLoading ? (
                    <Skeleton className='w-[200px]' />
                  ) : (
                    <select
                      name='categoryId'
                      onChange={handleChange}
                      value={menuDetail.categoryId}
                      className={clsx(
                        'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6',
                        errors.categoryId === undefined
                          ? 'border-gray-300'
                          : 'border-red-500'
                      )}
                    >
                      <option value=''>-</option>
                      {categories.map((c, index) => (
                        <option key={index} value={c.id}>
                          {c.categoryName}
                        </option>
                      ))}
                    </select>
                  )}
                  {errors.categoryId && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.categoryId}
                    </p>
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Menu Description
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  {isLoading ? (
                    <Skeleton className='h-[100px] w-[200px]' />
                  ) : (
                    <textarea
                      id='menuDescription'
                      name='menuDescription'
                      placeholder='Cake'
                      onChange={handleChange}
                      value={menuDetail.menuDescription}
                      className={clsx(
                        'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 border-gray-300'
                      )}
                    />
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Menu Image
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  {isLoading ? (
                    <Skeleton className='w-[200px]' />
                  ) : (
                    <div>
                      {menuDetail.menuImage === '' ? (
                        <></>
                      ) : (
                        <Image
                          alt='menu image'
                          src={menuDetail.menuImage}
                          className='my-2 rounded-xl aspect-square w-[200px] object-contain h-[200px]'
                          width={200}
                          height={200}
                        />
                      )}
                      <input
                        id='menuImage'
                        name='menuImage'
                        type='file'
                        // value="2500000"
                        accept='image/jpeg, .jpg, .jpeg, .png'
                        className={clsx(
                          'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6',
                          errors.menuImage === undefined
                            ? 'border-gray-300'
                            : 'border-red-500'
                        )}
                      />
                    </div>
                  )}
                  {errors.menuImage && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.menuImage}
                    </p>
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>Price</dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  {isLoading ? (
                    <Skeleton className='w-[200px]' />
                  ) : (
                    <input
                      id='price'
                      name='price'
                      type='number'
                      onChange={handleChange}
                      value={menuDetail.price}
                      min='0'
                      placeholder='150000'
                      className={clsx(
                        'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6',
                        errors.price === undefined
                          ? 'border-gray-300'
                          : 'border-red-500'
                      )}
                    />
                  )}
                  {errors.price && (
                    <p className='text-red-500 text-xs mt-1'>{errors.price}</p>
                  )}
                </dd>
              </div>
            </dl>

            <dl className='divide-y divide-gray-100'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium text-gray-900'>
                  Favourite
                </dt>
                <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                  <input
                    id='favourite'
                    name='favourite'
                    type='checkbox'
                    checked={isFavourite}
                    onChange={handleChange}
                    className='block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                  />
                </dd>
              </div>
            </dl>

            <button
              type='submit'
              className='rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ml-4 mt-5 md:ml-0 hover:cursor-pointer hover:bg-[#5d8650]'
            >
              {isLoadingSubmit ? 'Submitting...' : 'Create New Menu'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
