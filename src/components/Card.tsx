type PropsProjects = {
    project: {
        title: string;
        description: string;
        technologies: string[];
        image: string;
        link: string;
        repository: string;
    };
}

const Card = ({ project }: PropsProjects) => {

    return (
        <div className="card card-bg-theme rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img src={`/img/${project.image}`} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-theme">{project.title}</h3>
                <p className="card-text-theme mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-theme">View Project</a>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="link-theme">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Card;