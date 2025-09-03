import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Category, Menu } from './interface';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupMenuByCategory = (categories: Category[], menus: Menu[]) => {
  return categories.map((category) => ({
    categoryName: category.categoryName,
    categoryImage: category.categoryImage,
    categoryMenu: menus.filter((menu) => menu.categoryId === category.id),
  }));
};
