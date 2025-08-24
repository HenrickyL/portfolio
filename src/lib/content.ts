import path from "path";
import { promises as fs } from "fs";
import { Experience } from "@/types/Experience";
import { Project } from "@/types/Project";

const contentRootPath = path.join(process.cwd(), "content");

async function readJsonFile<T>(fileName: string): Promise<T> {
	const filePath = path.join(contentRootPath, fileName);
	const data = await fs.readFile(filePath, "utf-8");
	return JSON.parse(data) as T;
}

export async function getExperiences(): Promise<Experience[]> {
	const experiences = await readJsonFile<Experience[]>("experiences.json");
	return experiences.sort((a, b) => {
		const aDate = (a.endDate ?? a.startDate) ?? "";
		const bDate = (b.endDate ?? b.startDate) ?? "";
		return bDate.localeCompare(aDate);
	});
}

export async function getProjects(): Promise<Project[]> {
	return readJsonFile<Project[]>("projects.json");
}
