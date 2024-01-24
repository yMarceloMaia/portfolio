import Card from "../components/Card"
import projectsData from "../jsons/projects-en.json"

const Projects = () => {
    console.log(projectsData)

    const { projects } = projectsData
    return (
        <main className="h-4/6">
            <div className="flex flex-wrap justify-center h-full">
                {projects.map((project) => (
                    <Card project={project} />
                ))}
            </div>
        </main>
    )
}

export default Projects;