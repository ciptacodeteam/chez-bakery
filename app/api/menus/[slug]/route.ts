import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { del, put } from "@vercel/blob";
import { currentDateTime } from "@/lib/utils";

export async function GET(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated." }, { status: 401 })
    }

    const menuId = req.url.split("/")[5]

    const menuDetail = await prisma.menus.findUnique({
        where: {
            id: menuId
        }
    })

    const categories = await prisma.categories.findMany()

    return Response.json({ success: true, menuDetail, categories }, { status: 200 })
}

export async function PUT(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated. "}, { status: 401 })
    }

    const user = await currentUser()

    const data = await req.formData()
    const menuId = req.url.split("/")[5]

    let blobUrl

    if ((data.get("menuImage") as File).size !== 0) {
        const blobDel = await del(data.get("prevImageUrl") as string)

        const blob = await put(`images/menus/${(data.get("menuImage") as File).name}`, data.get("menuImage") as File, {
            access: "public",
            addRandomSuffix: true
        })

        blobUrl = blob.url
    }

    const updateMenu = await prisma.menus.update({
        where: {
            id: menuId
        },
        data: {
            menuName: data.get("menuName") as string,
            menuDescription: data.get("menuDescription") as string,
            price: parseInt(data.get("price") as string),
            menuImage: blobUrl === null ? data.get("prevImageUrl") as string : blobUrl,
            categoryId: data.get("categoryId") as string,
            updatedAt: currentDateTime(),
            updatedBy: `${user?.firstName} ${user?.lastName}`,
            isFavourite: data.get("isFavourite") === "true" ? true : false
        }
    })

    return Response.json({ success: true, message: "Menu successfully updated. "}, { status: 201 })
}