
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";
import { Project } from "@/types";
import LatestProjectCard from "../ui/LatestProject";

const LatestProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest projects From <span className="text-teal-600">Nexaproject</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {projects.slice(0, 2).map((project) => (
          <LatestProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {projects.slice(2, 5).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects">
          <button className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProjects;
