import imag from "/fundo.jpg"

type PropsProjects = {
    project: {
        title: string;
        description: string;
        technologies: string[];
        image: string;
        link: string;
    };
}

const Card = ({ project }: PropsProjects) => {
    const {
        title,
        description,
        technologies,
        image,
        link
    } = project

    return (
        <div className="max-w-sm mt-40 flex justify-center items-center border border-8 rounded-lg shadow bg-white dark:border-gray-900 m-5 w-[500px] h-72">

            <h1 className="uppercase font-bold text-3xl">{title}</h1>
            {/* <img className="rounded-t-lg" src={imag} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

            </div> */}
        </div>

    )
}

export default Card;