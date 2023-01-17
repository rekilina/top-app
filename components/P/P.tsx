import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size, children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, {
				[styles.p_xs]: size == 'xs',
				[styles.p_s]: size == 's',
				[styles.p_m]: size == 'm',
			})}
			{...props}
		>
			{children}
		</p>
	);
};