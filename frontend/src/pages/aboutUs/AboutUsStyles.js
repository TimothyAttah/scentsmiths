import styled, { css } from 'styled-components';

export const AboutUs = styled.div``;

export const AboutUsHero = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		transition: 0.5s ease all;
	}
`;

export const BlendModeTitle = styled.h1`
	font-size: 8rem;
	width: 100%;
	background-color: #fff;
	color: #000;
	position: absolute;
	bottom: 0px;
	text-align: center !important;
	/* padding: 50px 0; */
	mix-blend-mode: screen;
	letter-spacing: -5px;
	/* padding-top: 10px; */
	padding-bottom: 50px;

	@media screen and (max-width: 900px) {
		font-size: 6rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 790px) {
		font-size: 4rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 450px) {
		font-size: 3rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}

	@media screen and (max-width: 350px) {
		font-size: 2.5rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}
`;

export const CultureInfo = styled.div`
	background-color: #fff;
	padding: 0px 0;

	h4,
	h3 {
		color: var(--teniColor);
		font-size: 28px !important;
		padding-bottom: 10px;
		text-align: center !important;
	}

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;

		b {
			color: var(--teniColor);
		}
	}

	@media screen and (max-width: 570px) {
		text-align: center;

		h4 {
			/* display: none; */
		}

		p {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 390px) {
		padding: 0 20px;
	}
`;

export const AboutUsContainer = styled.div`
	background-color: var(--teniColor3);
	padding: 50px;
	margin-top: 50px;

	div {
		padding: 20px 0;

		h1 {
			color: #fff;
			padding-bottom: 10px;
      border-bottom: 3px solid #fff;
      margin-bottom: 10px;
		}

		p {
			color: #fff;

			b {
				color: #000;
			}
		}

		ul {
			padding: 0;

			li {
				color: #fff;
				span {
					color: #000;
				}
			}
		}


	}

  h4 {
    text-align: center;
    color: #fff;
    margin: 20px 0;
    font-size: 30px;
    margin-top: 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
  }
`;
