import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 70px;
	background-color: black;
	background: var(--teniColor);
	color: #fff;
	position: sticky;
	top: 0;
	left: 0;
	padding: 50px;
	z-index: 999;
	position: relative;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;

	.dropdown-menu.show {
		background: var(--teniColor);
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 10px;
	}
`;

export const HeaderLogo = styled.div`
	position: relative;
	a {
		display: flex;
		flex-direction: column;
		color: #fff;

		h1 {
			font-size: 18px;
			color: #fff;

			span {
				font-size: 14px;
				position: absolute;
				right: 0;
			}
		}
	}

	@media screen and (max-width: 400px) {
		a {
			h1 {
				font-size: 12px;
				color: #fff;

				span {
					font-size: 10px;
				}
			}
		}
	}
`;

export const HeaderNavWrapper = styled.nav`
	display: flex;
	align-items: center;
	gap: 20px;
	font-weight: bold;

	a {
		color: #fff;
	}



	 @media screen and (max-width: 990px) {
		display: none;
	}
`;

export const HeaderDropdownWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	background-color: var(--teniColor);

	a {
		color: #fff;
	}

	@media screen and (max-width: 990px) {
		margin-right: 100px;
		display: none;
	}
`;

export const HeaderDropdownWrapperMobile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	a {
		color: #fff;
	}

	display: none;
	@media screen and (max-width: 990px) {
		margin-right: 70px;
		display: flex;
	}
`;

export const HeaderSidebarContainer = styled.div`
	z-index: 999999999;
	position: absolute;
	right: 20px;
	top: 20px;
	display: none;

	@media screen and (max-width: 990px) {
		display: block;
	}
`;
