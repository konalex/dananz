interface ICEO {
	image: string
	name: string
	position: string
}

interface IPost {
	cover: string
	description: string
	title: string
	path: string
}

type Posts = IPost[] | undefined; 

export {
	ICEO as CEO,
	Posts
}