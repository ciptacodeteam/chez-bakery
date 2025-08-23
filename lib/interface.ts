export interface Category {
    id: string;
    categoryName: string;
    categoryImage: string;
    isActive: boolean;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
}

export interface Menu {
    id: string;
    menuName: string;
    menuDescription: string;
    price: number;
    menuImage: string;
    isFavourite: boolean;
    categoryId: string;
    isActive: boolean;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
}