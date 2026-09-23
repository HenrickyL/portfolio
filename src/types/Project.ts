export type Project = {
	id: string;
	name: string;
	summary?: string;
	tags?: string[];
	url?: string;
	src?: string;
	date?: string;
};

export type ProjectCard = Project & {
	src: string;
};

export type ProjectSection = {
	id: string;
	title: string;
	projects: ProjectCard[];
};