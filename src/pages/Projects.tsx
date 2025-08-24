import { useEffect, useState } from "react";
import Card, { Project } from "../components/Card";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectsData = await import(`../jsons/projects-${language}.json`);
      setProjects(projectsData.projects);
    };

    loadProjects();
  }, [language]);

  return (
    <Layout>
      <main className="h-full w-full flex justify-center items-center">
        <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.01]">
          PROJECTS
        </h1>
        <section className="w-5/6 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
