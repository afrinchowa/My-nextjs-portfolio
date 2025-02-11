"use server";

import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const projectData = Object.fromEntries(data.entries());
  const res = await fetch("http://localhost:5000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const projectInfo = await res.json();
  if (projectInfo) {
    redirect(`/projects/${projectInfo.id}`);
  }

  return projectInfo();
};
