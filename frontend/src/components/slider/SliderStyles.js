import styled from 'styled-components';

export const SliderContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: var(--teniColor);
	padding: 50px 0 !important;

	@media screen and (max-width: 800px) {
		height: 70vh;
	}

	/* @media screen and (max-width: 600px) {
		height: 70vh;
	} */
`;

export const SliderItems = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 50px;
	justify-content: center;
	padding: 50px;


	@media screen and (max-width: 800px) {
		flex-direction: column;
		gap: 5px;
	}
`;

export const SliderImg = styled.div`
	max-width: 600px;
	width: 100%;
	height: 100%;

	div {
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 800px) {
		max-width: 400px;
		/* height: 50%; */
	}

	@media screen and (max-width: 600px) {
		max-width: 100%;
		height: 50%;
	}
`;

export const SliderContent = styled.div`
	max-width: 500px;
	width: 100%;
	color: #fff;

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		/* gap: 10px; */
	}

	h3 {
		font-size: 30px;
		color: #fff;
	}

	p {
		font-size: 20px;
		color: #f8e7e7ff;
	}

	button {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		color: var(--teniColor);
		font-weight: bold;
		height: 50px;
		margin-top: 50px;
		border-radius: 10px;
		font-size: 18px;
		text-transform: uppercase;
	}

	@media screen and (max-width: 800px) {
		max-width: 100%;
		padding: 10px;
		text-align: center;

		h3 {
			font-size: 20px;
		}

		p {
			font-size: 12px;
		}

		button {
			width: 150px;
			height: 30px;
			margin-top: 20px;
			border-radius: 10px;
			font-size: 15px;
			margin: 20px auto;
		}
	}
`;