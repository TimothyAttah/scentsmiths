import styled from "styled-components";

export const Footer = styled.footer`
	background-color: var(--teniColor);
	padding: 50px 20px;
	display: flex;
	justify-content: space-between;

	div {
		max-width: 400px;
		width: 100%;

		h4 {
			color: #fff;
			color: var(--main-color-g);

			padding-bottom: 10px;
		}

		p {
			color: #fff;
		}

		a {
			color: var(--main-color-g);
			color: #fff;
			transition: all 0.5s;
			display: block;
			padding-bottom: 10px;

			&:hover {
				color: var(--main-color-g);
			}
		}

		ul {
			padding: 0;

			li {
				color: #fff;
				padding-bottom: 10px;
			}
		}
	}

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Contact = styled.div`

`;
export const Collections = styled.div``;
export const Follow = styled.div`
	p {
		padding-bottom: 20px;
	}
	a {
		display: inline !important;
		padding-right: 20px;
		font-size: 22px;
    transition: all .5s;

		&:hover {
			color: var(--main-color-g);
		}
	}
`;
