import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const FadeInStyle = styled(motion.div)`
	width: auto;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	padding-left: 0px;
	padding-right: 0px;

	${(props) =>
		props.fullWidth &&
		css`
			width: 100%;
		`}
	${(props) =>
		props.padding &&
		css`
			padding-left: 2.5rem /* 40px */;
			padding-right: 2.5rem /* 40px */;
		`}
`;

const FadeInMotionStyle = styled(motion.div)`
	width: 100%;
	/* display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : '')}; */
`;

export const FadeInAlways = ({
	children,
	delay,
	direction,
	fullWidth,
	padding,
	center,
}) => {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.4,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				x: 0,
				y: 0,
				transition: {
					duration: 1.25,
					type: 'tween',
					delay: delay,
					ease: [0.25, 0.25, 0.25, 0.75],
				},
			});
		}
		if (!inView) {
			animation.start({
				opacity: 0,
				x: direction === 'right' ? -100 : direction === 'left' ? 100 : 0,
				y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			});
		}
	}, [inView, animation, delay, direction]);

	return (
		<FadeInStyle ref={ref}>
			<FadeInMotionStyle animate={animation} center={center}>
				{children}
			</FadeInMotionStyle>
		</FadeInStyle>
	);
};
