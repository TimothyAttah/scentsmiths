import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	position: sticky;
  left: 0;
	top: 0;
	height: 100px;
	z-index: 999;

	@media screen and (max-width: 450px) {
		height: 150px;
	}
`;

export const HeaderContainer = styled.div`
	height: 100%;
	display: flex;
	padding: 50px 20px;
	justify-content: space-between;
	align-items: center;
	gap: 200px;

	@media screen and (max-width: 1200px) {
		gap: 50px;
	}

	@media screen and (max-width: 450px) {
	flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
	}
`;

export const HeaderLogo = styled.div`
	a {
    display: flex;
    line-height: 1;
  }
`;
