import { TopLevelCategory } from './page.interface'

export interface MenuItem {
	_id: {
		secondCategory: string
	}
	pages: Page[];
	isOpened?: boolean;
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

export interface IFirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}