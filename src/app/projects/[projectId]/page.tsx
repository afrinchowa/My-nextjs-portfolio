import ProjectDetailsCard from "@/components/ui/ProjectDetailsCard";
import { Project } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const projects = await res.json();

  return projects.slice(0, 3).map((project: Project) => ({
    projectId: project.id,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const res = await fetch(`http://localhost:5000/projects/${projectId}`);
  const project = await res.json();

  return {
    title: project.title,
    description: project.description,
  };
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  // console.log(await params);
  const { projectId } = await params;
  const res = await fetch(`http://localhost:5000/projects/${projectId}`);
  const project = await res.json();
  //   console.log(project);
  return (
    <div className="my-10">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
