import fs from 'fs';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectsMetadata from '@/components/Projects/getProjectMetadata';

const getProjectContent = (slug: string) => {
    const folder = "works/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const projects = getProjectsMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
};

const ProjectPage = (props: any) => {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
    return (
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-white">{project.data.title}</h1>
            </div>

        <article className="prose">
            <Markdown>{project.content}</Markdown>
        </article>
        </div>
    )
};

export default ProjectPage;