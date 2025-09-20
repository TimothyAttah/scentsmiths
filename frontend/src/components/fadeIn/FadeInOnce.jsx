import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled, { css } from 'styled-components';

const FadeInStyle = styled(motion.div)`
	width: auto;
	display: flex;
	align-items: center;
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
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.center ? 'center' : '')};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const FadeInOnce = ({
	children,
	delay,
	direction,
	fullWidth,
	padding,
	center,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);
	return (
		<FadeInStyle ref={ref}>
			<FadeInMotionStyle
				variants={{
					hidden: {
						opacity: 0,
						x: direction === 'right' ? -100 : direction === 'left' ? 100 : 0,
						y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
					},
					visible: {
						opacity: 1,
						x: 0,
						y: 0,
					},
				}}
				initial='hidden'
				animate={controls}
				transition={{
					duration: 1.25,
					type: 'tween',
					delay: delay,
					ease: [0.25, 0.25, 0.25, 0.75],
				}}
				center={center}>
				{children}
			</FadeInMotionStyle>
		</FadeInStyle>
	);
};
