import { blogs } from "@/app/data/blogs";
import { NextResponse } from "next/server";


export const GET = async (
  request: Request,
  { params }: { params:  Promise<{ id: string }> } // This is where the route parameter is extracted
) => {
  const { id } =await params; // Destructuring `id` from the params object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog = blogs.find((blog:any) => blog.id === id);

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
};
