import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
	return (
		<div className='rating'>
			<span style={{color}}>
				{value >= 1 ? (
					<FaStar />
				) : value >= 0.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 2 ? (
					<FaStar />
				) : value >= 1.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 3 ? (
					<FaStar />
				) : value >= 2.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 4 ? (
					<FaStar />
				) : value >= 3.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 5 ? (
					<FaStar />
				) : value >= 4.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
		  </span>
		  <span>{text && text}</span>
		</div>
		// <div className='rating'>
		// 	<span>
		// 		<i
		// 			style={{ color }}
		// 			className={
		// 				value >= 1
		// 					? 'fas fa-star'
		// 					: value >= 0.5
		// 					? 'fas fa-star-half-alt'
		// 					: 'far fa-star'
		// 			}></i>
		// 	</span>
		// 	<span>
		// 		<i
		// 			style={{ color }}
		// 			className={
		// 				value >= 2
		// 					? 'fas fa-star'
		// 					: value >= 1.5
		// 					? 'fas fa-star-half-alt'
		// 					: 'far fa-star'
		// 			}></i>
		// 	</span>
		// 	<span>
		// 		<i
		// 			style={{ color }}
		// 			className={
		// 				value >= 3
		// 					? 'fas fa-star'
		// 					: value >= 2.5
		// 					? 'fas fa-star-half-alt'
		// 					: 'far fa-star'
		// 			}></i>
		// 	</span>
		// 	<span>
		// 		<i
		// 			style={{ color }}
		// 			className={
		// 				value >= 4
		// 					? 'fas fa-star'
		// 					: value >= 3.5
		// 					? 'fas fa-star-half-alt'
		// 					: 'far fa-star'
		// 			}></i>
		// 	</span>
		// 	<span>
		// 		<i
		// 			style={{ color }}
		// 			className={
		// 				value >= 5
		// 					? 'fas fa-star'
		// 					: value >= 4.5
		// 					? 'fas fa-star-half-alt'
		// 					: 'far fa-star'
		// 			}></i>
		// 	</span>
		// 	<span>{text && text}</span>
		// </div>
	);
};

Rating.defaultProps = {
	color: '#f8e825',
};

export default Rating;
