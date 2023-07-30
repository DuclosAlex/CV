import getProjectsMetadata from "./getProjectMetadata";
import ProjectItem from "./components/ProjectItem";

const Projects: React.FC = () =>  {

    const projectsMedatada = getProjectsMetadata();

    return (
        <div className="mb-32">
            <h1 className="text-center text-6xl text-white mb-32">Projects</h1>
            {projectsMedatada.map((data) => (
                <ProjectItem key={data.slug} {...data} />
            ))}
        </div>
    )
}

export default Projects;