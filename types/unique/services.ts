import { Content } from "@/types/content"

interface IContentWithImage extends Content {
	image: string
}

interface IContentInArray extends Content {
	items?: IContentWithImage[]
}

export {
	IContentInArray as ServiceContent
}