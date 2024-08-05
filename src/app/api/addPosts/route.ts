// route for posting a new Post

import prisma from "@/lib/db";

export async function POST(req: Request) {
  const { title, description, userId } = await req.json();

  try {
    const checkIfUserExist = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!checkIfUserExist) {
      return Response.json(
        {
          success: false,
          message: "User do not exist",
        },
        {
          status: 404,
        }
      );
    } else {
      const saveStatus = await prisma.post.create({
        data: {
          title: title,
          description: description,
          userId: userId,
        },
      });
      if (saveStatus) {
        return Response.json(
          {
            success: true,
            message: "Post created successfully",
          },
          {
            status: 200,
          }
        );
      } else {
        return Response.json(
          {
            success: false,
            message: "Post do not get created may because of some error",
          },
          {
            status: 500,
          }
        );
      }
    }
  } catch (error) {
    console.log(
      `Error happend while publishing the post in addPost/route.ts ${error}`
    );
  }
}
