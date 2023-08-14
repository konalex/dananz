interface IContent {
	title: string,
	text: string
	label?: string
	image?: string
}

interface IContentItems {
	title: string,
	text: string
}

interface ICEO {
	image: string,
	name: string,
	position: string
}

interface IContentWithImages extends IContent {
	items: string[]
}

interface IContentWithItems extends IContent {
	items: IContentItems[]
}

interface IAbout extends IContent {
	button: string,
	ceo: ICEO
}

interface IMaterials extends IContentWithImages {
	button: string
}

export {
	IContentWithItems as ContentWithItems,
	IMaterials as Materials,
	IAbout as About
}