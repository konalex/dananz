interface IContent {
	title: string,
	text?: string,
	label?: string,
	content?: IContent
}

interface IContentItems {
	title: string,
	text: string
}

interface IContentWithImages extends IContent {
	items: string[]
}

interface IContentWithItems extends IContent {
	items: IContentItems[]
}

import { ServiceContent } from "./unique/services"
import { MainContentWithItems, MainAbout, MainMaterials } from "./unique/home"
import { AboutContent } from "./unique/about"

export {
	IContent as Content,
	IContentWithItems as ContentWithItems,
	IContentWithImages as ContentWithImages,
	ServiceContent,
	MainContentWithItems,
	MainAbout,
	MainMaterials,
	AboutContent
}