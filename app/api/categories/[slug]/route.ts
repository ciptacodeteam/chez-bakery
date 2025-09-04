import prisma from '@/lib/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';
import { del, put } from '@vercel/blob';
import dayjs from 'dayjs';

export async function GET(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json(
      { success: false, message: 'Unauthenticated' },
      { status: 401 }
    );
  }

  const categoryId = await req.url.split('/')[5];

  const categoryDetail = await prisma?.categories.findFirst({
    where: {
      id: categoryId,
    },
  });

  return Response.json({ success: true, categoryDetail }, { status: 200 });
}

export async function PUT(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json(
      { success: false, message: 'Unauthenticated.' },
      { status: 401 }
    );
  }

  const user = await currentUser();

  const categoryId = req.url.split('/')[5];
  const data = await req.formData();

  let blobUrl;

  if ((data.get('categoryImage') as File).size !== 0) {
    await del(data.get('prevImageUrl') as string);

    const blob = await put(
      `/images/categories/${(data.get('categoryImage') as File).name}`,
      data.get('categoryImage') as File,
      {
        access: 'public',
        addRandomSuffix: true,
      }
    );

    blobUrl = blob.url;
  }

  await prisma?.categories.update({
    where: {
      id: categoryId,
    },
    data: {
      categoryName: data.get('categoryName') as string,
      categoryImage:
        blobUrl === null ? (data.get('prevImageUrl') as string) : blobUrl,
      updatedAt: dayjs().toDate(),
      updatedBy: `${user?.firstName} ${user?.lastName}`,
    },
  });

  return Response.json(
    { success: true, message: 'Category successfully updated.' },
    { status: 201 }
  );
}
