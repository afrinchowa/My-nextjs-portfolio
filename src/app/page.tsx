import DownloadResumeButton from "@/components/DownloadResumeButton/DownloadResumeButton";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import LatestProjects from "@/components/LatestProjects/LatestProjects";
import Banner from "@/components/shared/Banner/Banner";
import Skills from "@/components/Skills/Skills";

const HomePage = async () => {
  // Fetch blogs
  const blogsRes = await fetch(
    "https://my-portfolio-client-plum.vercel.app/api/blogs",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogs = await blogsRes.json();
  console.log(blogs);

  // Fetch projects
  const projectsRes = await fetch(
    "https://my-portfolio-client-plum.vercel.app/api/projects",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const projects = await projectsRes.json();
  console.log(projects);

  return (
    <div>
      <Banner />
      <Skills />
      <LatestProjects projects={projects} />
      <LatestBlogs blogs={blogs} />
      <DownloadResumeButton />
    </div>
  );
};

export default HomePage;
