import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated." }, { status: 401 })
    }

    const user = await currentUser()

    const data = await req.formData()

    const blob = await put(`images/menus/${(data.get("menuImage") as File).name}`, data.get("menuImage") as File, {
        access: "public"
    })

    const createMenu = await prisma.menus.create({
        data: {
            menuName: data.get("menuName") as string,
            menuDescription: data.get("menuDescription") as string,
            price: parseInt(data.get("price") as string),
            menuImage: blob.url,
            categoryId: data.get("categoryId") as string,
            createdBy: `${user?.firstName} ${user?.lastName}`
        }
    })

    return Response.json({ success: true, message: "Menu successfully created." }, { status: 201 })
}

export async function GET() {
    const menus = await prisma.menus.findMany()
    const categories = await prisma.categories.findMany({
        select: {
            id: true,
            categoryName: true
        }
    })

    return Response.json({ success: true, menus, categories }, { status: 200 })
}