import fs from "fs";
import matter from 'gray-matter';
import { ProjectsMetadata } from '@/interfaces/components/ProjectsMetadata';

const getProjectsMetadata = (): ProjectsMetadata[] => {
    const folder = "works/";
    const files = fs.readdirSync(folder);
    const markdownProjects = files.filter((file) => file.endsWith(".md"));

    const projects = markdownProjects.map((filename) => {
        const fileContents = fs.readFileSync(`works/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            image: matterResult.data.image,
            technos: matterResult.data.technos,
            description: matterResult.data.description,
            slug: filename.replace(".md", ""),
        };
    });

    return projects; 
};

export default getProjectsMetadata;