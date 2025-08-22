import prisma from "@/lib/prisma";
import { currentDateTime } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs/server";
import { put, del } from "@vercel/blob";

export async function GET(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated" }, { status: 401 })
    }

    const categoryId = await req.url.split("/")[5]

    const categoryDetail = await prisma?.categories.findFirst({
        where: {
            id: categoryId
        }
    })

    return Response.json({ success: true, categoryDetail }, { status: 200 })
}

export async function PUT(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "Unauthenticated." }, { status: 401 })
    }

    const user = await currentUser()

    const categoryId = req.url.split("/")[5]
    const data = await req.formData()

    let blob

    // Find out why the prevCategoryImage is null
    console.log(data.get("prevCategoryImage"))

    if ((data.get("categoryImage") as File).size !== 5) {
        const deleteBlob = await del(data.get("prevCategoryImage") as string)

        blob = await put(`/images/categories/${(data.get("categoryImage") as File).name}`, data.get("categoryImage") as File, {
            access: "public"
        })
    }

    const updateCategory = await prisma?.categories.update({
        where: {
            id: categoryId
        },
        data: {
            categoryName: data.get("categoryName") as string,
            categoryImage: blob === null ? data.get("prevCategoryImage") as string : blob!.url as string,
            updatedAt: currentDateTime(),
            updatedBy: `${user?.firstName} ${user?.lastName}`
        }
    })


    return Response.json({ success: true, message: "Category successfully updated." }, { status: 201 })
}