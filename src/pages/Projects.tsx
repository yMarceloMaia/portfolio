import Card from "../components/Card"
import Layout from "../components/Layout"
import projectsData from "../jsons/projects-en.json"

const Projects = () => {
    const { projects } = projectsData
    return (
        <Layout>
            <main className="h-full relative flex gap-4">
                {projects.map(project => (
                    <Card project={project} />
                ))}
                <h1 className="absolute right-0 bottom-0 text-[200px] font-body z-0 opacity-[.01]">PROJECTS</h1>
            </main>
        </Layout>

    )
}

export default Projects;