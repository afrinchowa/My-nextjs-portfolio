"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import Spinner from "@/components/ui/Spinner";
import { useGetProjectsQuery } from "@/redux/apis/projects.slice";

import { Project } from "@/types";

const ProjectsPage = () => {
  const { data: projects, isLoading } = useGetProjectsQuery({});

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5  font-bold">
        Explore All Projects <span className="text-teal-600">Projects</span>
      </h1>
      <p className="text-center text-gray-600 w-2/5 mx-auto">
        {" "}
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-6 my-5">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
