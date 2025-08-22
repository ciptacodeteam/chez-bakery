import { auth, currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    const { userId } = await auth()

    if (!userId) {
        return Response.json({ success: false, message: "User unauthenticated." }, { status: 401 })
    }

    const user = await currentUser()
    const data = await req.formData()

    console.log(data)

    // const createCategory = await

    return Response.json({ success: true, message: "New category successfully created."}, { status: 201 })
}