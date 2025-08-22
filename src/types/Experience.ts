export type Experience = {
	id: string;
	role: string;
	company?: string;
	startDate: string; // ISO date string
	endDate?: string | null; // ISO date string or null for current
	location?: string;
	description?: string;
	tags?: string[];
	url?: string;
};

