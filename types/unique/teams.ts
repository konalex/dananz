import { Content } from "@/types/content"

interface ITeamsItems {
	title: string,
	text: string,
	image: string
}

interface TeamsContent extends Content {
	items: ITeamsItems[]
}

export { TeamsContent }