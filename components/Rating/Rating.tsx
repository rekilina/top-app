import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star-grey.svg';
import { useEffect, useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
	// state of the rating -- its appearance
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				// eslint-disable-next-line react/jsx-key
				<StarIcon
					className={cn(styles.star_svg, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
				// onMouseEnter={() => changeDisplay(i + 1)}
				// onMouseLeave={() => changeDisplay(rating)}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>

			{ratingArray.map((r, i) => (<span
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onClick(i + 1)}
				className={styles.star} key={i}>{r}</span>))}
		</div>
	);
};