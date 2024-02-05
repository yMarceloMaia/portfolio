type PropsProjects = {
    project: {
        title: string;
        description: string;
        technologies: string[];
        image: string;
        link: string;
    };
}

const Card = ({}: PropsProjects) => {
   
    return (
        <div className="card flex gap-3 ">
            <div className="card2">

            </div>
        </div>
    )
}

export default Card;