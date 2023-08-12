interface IContent {
	title: string,
	text?: string
	content?: IContent
}

type Content = IContent[];

export {
	IContent,
	Content
}