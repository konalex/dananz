interface IMainContent {
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

interface IContentWithImages extends IMainContent {
	items: string[]
}

interface IContentWithItems extends IMainContent {
	items: IContentItems[]
}

interface IAbout extends IMainContent {
	button: string,
	ceo: ICEO
}

interface IMaterials extends IContentWithImages {
	button: string
}

export {
	IContentWithItems as MainContentWithItems,
	IMaterials as MainMaterials,
	IAbout as MainAbout
}