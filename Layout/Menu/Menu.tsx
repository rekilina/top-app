import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext, IAppContext } from '../../context/app.context';
import { Context, useContext } from 'react';
import { IFirstLevelMenuItem, Page } from '../../interfaces/menu.interface';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';



const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
	{ route: 'serices', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Courses },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Courses },
	{ route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Courses }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory
							})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<div>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>
							{m._id.secondCategory}
						</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlokOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: Page[], route: string) => {
		return (
			pages.map(p => (
				// eslint-disable-next-line react/jsx-key
				<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: true
				})}>
					{p.category}
				</a>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};
