import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slide = styled(motion.div)`
	width: 100%;
	/* background-color: var(--base-color-green-neg); */
	/* background: var(--base-color-gold); */
	position: relative;
	overflow: hidden !important;
	/* margin-top: 50px; */

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		transition: 0.5s ease all;
	}
`;
export const SlideContainer = styled(motion.div)``;

export const SlideContent = styled.div`
	position: absolute !important;
	bottom: 100px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 1000px;
	/* max-width: 800px; */

	h2 {
		font-weight: bold;
		color: #fff;
		text-align: center;
		font-size: 6.4rem !important;
		font-size: 3.5rem !important;

		line-height: 6.8rem !important;
		line-height: 4rem !important;

		letter-spacing: -0.013em !important;
		text-transform: lowercase;
		/* text-align: center !important; */
		animation: text 1s ease forwards;
		padding-bottom: 10px;
	}

	h4 {
		font-size: 18px;
		font-weight: bold;
		color: #fff;
		animation: text 2s ease forwards;
	}

	p {
		font-size: 18px !important;
		line-height: 1.2;
		padding-top: 10px;
		font-weight: bold;
		color: #fff;
		text-align: center;
		animation: text 3s ease forwards;
	}

	div a {
		/* width: 280px; */
		height: 40px;
		margin: auto;
		background-color: #000;
		color: var(--primary-color);
		color: #00813299;
		color: var(--teniColor);
		color: #ab6c56;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
		animation: text 4s ease forwards;
		padding: 15px;
	}

	@media screen and (max-width: 950px) {
		h2 {
			font-size: 4rem !important;
			line-height: 4.2rem !important;
			letter-spacing: -0.013em !important;
			text-align: center;
		}

		p {
			font-size: 14px;
			line-height: 1.1;
			padding-top: 1px;
		}

		div a {
			/* width: 120px; */
			height: 40px;
			font-size: 12px;
			margin: 20px 0;
		}
	}

	@media screen and (max-width: 900px) {
		bottom: 40px;
		text-align: center;
		max-width: 100% !important;
		width: 100%;

		h2 {
			font-size: 3rem !important;
			line-height: 3.4rem !important;
			letter-spacing: -0.013em !important;
			text-align: center !important;
		}

		p {
			font-size: 20px;
			line-height: 1.2;
			text-align: center !important;

			/* padding-top: 10px; */
		}

		div a {
			/* width: 120px; */
			height: 40px;
			font-size: 12px;
			margin: 20px 0;
			margin: auto;
		}
	}
`;

export const SlideContentWrapper = styled.div`
	width: 100%;
	color: #fff;
	z-index: 999999;

	padding: 48px 40px 40px;
	padding: 10px 40px;
	border-radius: 16px;
	backdrop-filter: blur(40px) opacity(1);
	-webkit-backdrop-filter: blur(10px) opacity(1);

	/* transform: translateX(0); */
	/* background-color: #0b2d7180; */
	/* background: #00813299; */
	/* background: var(--base-color-gold); */
	/* background: hsl(35deg 100% 50% / 71%); */
	background: #ab6c56;
	opacity: 1;
	/* z-index: 3; */
	pointer-events: all;
	transition: transform 0.75s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s,
		opacity 0.5s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s;
	backdrop-filter: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1px;
	text-align: center !important;

	@media screen and (max-width: 950px) {
		padding: 20px;
	}

	@media screen and (max-width: 900px) {
		/* padding:  20px 10px; */
		/* height: 390px; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0px;
		text-align: center !important;
	}
`;
// export const Slide = styled.div``;
// export const Slide = styled.div``;
// export const Slide = styled.div``;
