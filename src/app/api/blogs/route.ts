// app/api/blogs/route.ts
import { NextResponse } from "next/server";
import { blogs } from "../../data/blogs";  // Importing from the separate file

export const GET = async () => {
  return NextResponse.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: (blogs.length + 1).toString()  // Ensure the ID is a string
  };

  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
};
