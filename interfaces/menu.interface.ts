
export interface MenuItem {
	_id: {
		secondCategory: string
	}
	pages: Page[]
}

export interface Id {
	secondCategory: string
}

export interface Page {
	alias: string
	title: string
	_id: string
	category: string
}
