// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { projects } from "../../data/projects";  // Importing from the separate file

export const GET = async () => {
  return NextResponse.json(projects);
};

export const POST = async (request: Request) => {
  const project = await request.json();
  const newProject = {
    ...project,
    id: (projects.length + 1).toString()  // Ensure the ID is a string
  };

  projects.push(newProject);

  return new NextResponse(JSON.stringify(newProject), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
};
