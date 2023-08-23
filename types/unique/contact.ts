interface IFormInput {
	label: string,
	placeholder: string
}

interface ILocationItem {
	title: string,
	text: string
}

interface ILocation {
	title: string,
	info: ILocationItem[]
	content: ILocationItem[]
}

type Form = {
	[key:string]: IFormInput
}

export { Form, ILocation as LocationContent }