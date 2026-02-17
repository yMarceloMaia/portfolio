import { useEffect, useState } from "react";
import Card, { Project } from "../components/Card";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

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
      <SEO
        title={
          language === "en"
            ? "Projects | Marcelo Maia"
            : "Projetos | Marcelo Maia"
        }
        description={
          language === "en"
            ? "Portfolio projects and open source work."
            : "Projetos do portfólio e trabalhos open source."
        }
        path="/projects"
      />
      <main className="h-full w-full flex justify-center items-center">
        <section className="w-5/6 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1} direction="up">
                <Card project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
