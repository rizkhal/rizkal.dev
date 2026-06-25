export interface Project {
	title: string;
	description: string;
	tags: string[];
	url?: string;
	github?: string;
	year: number;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		title: "ReelFarm",
		description:
			"Self-hosted transcription, smart narrative detection, and automated clip generation. Your data stays on your infrastructure.",
		tags: ["React", "Tailwind"],
		url: "https://reelfarm.surf",
		github: "https://github.com/reelfarm",
		year: 2026,
		featured: true,
	},
	{
		title: "IkanHub",
		description:
			"Another project description. A quick summary of the problem it solves and the tech involved.",
		tags: ["Hono", "React"],
		url: "https://ikanhub.space",
		github: "https://github.com/rizkhal/ikanhub.space",
		year: 2026,
		featured: true,
	},
];
