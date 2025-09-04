import prisma from '@/lib/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';
import { put } from '@vercel/blob';

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json(
      { success: false, message: 'User unauthenticated.' },
      { status: 401 }
    );
  }

  const user = await currentUser();
  const data = await req.formData();

  const blob = await put(
    `images/categories/${(data.get('categoryImage') as File).name}`,
    data.get('categoryImage') as File,
    {
      access: 'public',
      allowOverwrite: true,
    }
  );

  await prisma.categories.create({
    data: {
      categoryName: data.get('categoryName') as string,
      categoryImage: blob.url,
      createdBy: `${user?.firstName} ${user?.lastName}`,
    },
  });

  return Response.json(
    { success: true, message: 'New category successfully created.' },
    { status: 201 }
  );
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return Response.json(
      { success: false, message: 'Unauthenticated.' },
      { status: 401 }
    );
  }

  const categories = await prisma.categories.findMany();

  return Response.json({ success: false, categories }, { status: 200 });
}
