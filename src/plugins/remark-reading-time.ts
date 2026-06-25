import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import type { Root } from "mdast";
import type { VFile } from "vfile";

export function remarkReadingTime() {
	return (tree: Root, file: VFile) => {
		const textOnPage = mdastToString(tree);
		const readingTime = getReadingTime(textOnPage);
		const astro = file.data.astro ?? (file.data.astro = {} as Record<string, any>);
		const frontmatter = astro.frontmatter ?? (astro.frontmatter = {} as Record<string, any>);
		frontmatter.minutesRead = readingTime.text;
	};
}
