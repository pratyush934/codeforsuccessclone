import prisma from "@/lib/db";

export async function GET() {

  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });

    return Response.json(
      {
        success: true,
        data: posts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    
    return Response.json(
      {
        success: false,
        message: "Error occurred while fetching the posts",
      },
      {
        status: 500,
      }
    );
    console.log(`Error occurred in the file getAllPosts/route.ts ${error}`);
  }
}
