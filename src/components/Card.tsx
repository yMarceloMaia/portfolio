import { useTheme } from "../contexts/ThemeContext";

type PropsProjects = {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    repository: string;
  };
};

const Card = ({ project }: PropsProjects) => {
  const { theme } = useTheme();

  const cardClasses =
    theme === "dark"
      ? "bg-black border-gray-700 text-white"
      : "bg-white border-gray-200 text-black";

  const techClasses =
    theme === "dark"
      ? "bg-gray-800 text-gray-300"
      : "bg-gray-200 text-gray-800";

  const descriptionClasses =
    theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div
      className={`card border rounded-lg overflow-hidden shadow-lg ${cardClasses}`}
    >
      {/* <img src={`/img/${project.image}`} alt={project.title} className="w-full h-48 object-cover"/> */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className={`mb-4 ${descriptionClasses}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-sm ${techClasses}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            View Project
          </a>
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
