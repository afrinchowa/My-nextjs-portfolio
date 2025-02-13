
import { projects } from "@/app/data/projects";
import { NextResponse } from "next/server";


export const GET = async (
  request: Request,
  { params }: { params:  Promise<{ id: string }> } // This is where the route parameter is extracted
) => {
  const { id } =await params; // Destructuring `id` from the params object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const project = projects.find((project:any) => project.id === id);

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
};
