import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext, IAppContext } from '../../context/app.context';
import { Context, useContext } from 'react';
import { IFirstLevelMenuItem, MenuItem, Page } from '../../interfaces/menu.interface';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';


const firstLevelMenu: IFirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
	{ route: 'serices', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}))
	}

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: menu.id == firstCategory
							})}>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</Link>
						{menu.id == firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: Page[], route: string) => {
		return (
			pages.map(p => (
				// eslint-disable-next-line react/jsx-key
				<Link key={p.alias} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
				})}>
					{p.category}
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};
