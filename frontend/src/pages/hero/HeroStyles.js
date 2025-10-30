import styled, { css } from 'styled-components';

export const HeroContainer = styled.div``;

export const HeroIntroContainer = styled.div`
	background-color: var(--teniColor);
	padding: 50px;

	@media screen and (max-width: 570px) {
		padding: 50px 10px;
	}
`;
export const HeroIntroInfoContainer = styled.div`
	color: #fff;
	max-width: 900px;
	margin: auto;
	margin-bottom: 30px;

	h1 {
		color: #fff;
		padding-bottom: 10px;
	}

	h4 {
		padding-bottom: 10px;
		color: var(--main-color-g);
	}

	b,
	span {
		font-weight: bolder;
		color: var(--main-color-g);
	}

	@media screen and (max-width: 900px) {
		h1,
		h4,
		p {
			text-align: center;
		}
	}
`;
export const HeroCollectionsWrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 80px auto;
	/* background-color: #000; */

	h1 {
		text-align: center;
		padding-bottom: 50px;
		font-size: 80px;
	}

	@media screen and (max-width: 750px) {
		h1 {
			font-size: 60px;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 40px;
		}
	}
`;

export const HeroCollectionsContainer = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	/* align-items: center; */
	/* gap: 50px; */
  margin-bottom: 50px;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

    @media screen and (max-width: 750px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

export const HeroCollectionsImgContainer = styled.div`
	max-width: 500px;
	width: 100%;
	height: 400px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

  @media screen and (max-width: 450px){
    height: 300px;
  }
`;
export const HeroCollectionsInfoContainer = styled.div`
	max-width: 500px;
	width: 100%;
	height: 400px;
	padding: 30px;

	background-color: var(--teniColor3);
	color: #fff;

	h4 {
		font-size: 30px;
		color: #fff;
		font-style: italic;
	}

	small {
		padding-bottom: 20px;
		display: inline-block;
		font-style: italic;
	}

	a {
		background-color: #000;
		color: var(--teniColor3);
		padding: 10px 20px;
		display: inline-block;
		margin-top: 50px;
		transition: all 0.5s;

		&:hover {
			background-color: var(--teniColor3);
      border: 1px solid #fff;
      color: #fff;
		}
	}

	@media screen and (max-width: 450px) {
		h4 {
			font-size: 25px;
			text-align: center;
		}

		small {
			padding-bottom: 10px;
			text-align: center;
		}

		p {
			text-align: center;
		}

		a {
			padding: 10px 10px;
			display: block;
			margin: auto;
			margin-top: 20px;
			text-align: center;
		}
	}
`;

export const HeroReasonContainer = styled.div`
	/* background-color: #000; */
	/* color: #fff; */

	div {
		padding: 30px 50px;
    text-align: center;

		h1 {
			color: var(--teniColor);
			padding-bottom: 10px;
		}

		ul li {
			/* list-style: square; */
			padding-bottom: 10px;
			span {
				color: var(--teniColor);
			}
		}
	}

  @media screen  and (max-width: 450px){
    div {
      padding: 10px;

      ul {
        padding: 0;
      }
    }
  }
`;
export const HeroNewsContainer = styled.div`
	background-color: #000;
	color: #fff;

	text-align: center;
	padding: 50px 20px;

	h1 {
		color: var(--teniColor);
		padding-bottom: 10px;
	}

	form {
		max-width: 600px;
		width: 100%;
		margin: 30px auto;
		display: flex;
		align-items: center;

		input {
			height: 45px;
			width: 100%;
			padding: 10px 20px;
			border-top-left-radius: 50px;
			border-bottom-left-radius: 50px;
		}

		button {
			height: 45px;
			padding: 10px 30px;
			background-color: var(--teniColor);
			border-top-right-radius: 50px;
			border-bottom-right-radius: 50px;
			text-align: center;
			/* font-size: 20px; */
			text-transform: uppercase;
			color: #fff;
		}

		@media screen and (max-width: 450px) {
			button {
				padding: 10px;
				font-size: 12px;
			}
		}
	}
`;
// export const HeroContainer = styled.div``;
