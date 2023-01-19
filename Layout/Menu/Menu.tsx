import styles from './Menu.module.css';
import cn from 'classname';
import { format } from 'date-fns';
import { AppContext, IAppContext } from '../../context/app.context';
import { Context, useContext } from 'react';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	return (
		<div>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
};
