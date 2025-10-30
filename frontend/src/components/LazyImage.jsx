import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ src }) => {
	const ref = useRef();
	const id = Math.random();
	const [inView, setInView] = useState(false);

	let callback = (entries, observer) => {
		entries.forEach((entry) => {
			setInView(true);
		});
	};

	useEffect(() => {
		let observer = new IntersectionObserver(callback);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			// if (ref.current) {
			//   observer.unobserve(ref.current);
			// }

			observer.disconnect();
		};
	}, []);
	return inView ? (
		// <img src={ src } />
		<LazyLoadImage
			src={src}
			height='100%'
			width='100%'
			// effect='blur'
			placeholderSrc={src}
		/>
	) : (
		<img
			ref={ref}
			alt=''
			style={{ backgroundColor: '#ddd', width: '100%', height: '100%' }}
		/>
		// <LazyLoadImage
		// 	itemRef={ref}
		// 	// src={src}
		// 	height='100%'
		// 	width='100%'
		// 	// effect='blur'
		// 	// placeholderSrc={src}
		// />
	);
};

export default LazyImage;
