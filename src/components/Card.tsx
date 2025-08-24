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
        <div className="card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img src={`/img/${project.image}`} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Card;