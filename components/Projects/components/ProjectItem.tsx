import { ProjectsMetadata } from "@/interfaces/components/ProjectsMetadata"
import Link from "next/link";

const ProjectItem = (props: ProjectsMetadata) => {

    console.log(props);
    return (
        <div className="text-center">
            <Link href={`/projects/${props.slug}`}>
                <h3 className="text-white text-3xl">{props.title}</h3>
            </Link>
        </div>
    );
};

export default ProjectItem;