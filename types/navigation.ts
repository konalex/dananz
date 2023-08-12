interface ILocalLink {
	title: string,
	path: string
}

interface IPublicLink {
	icon: string,
	url: string
}

type Navigation = ILocalLink[]
type Follow = IPublicLink[]

export {
	ILocalLink,
	IPublicLink,
	Follow,
	Navigation
}