import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-medium-blue);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  a {
    font-size: 20px;
    color: #fff;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    border: 1px solid #fff;
    width: 100px;
    height: 40px;
    background: transparent;
    border-radius: 5px;
    /* padding: 20px; */
  }
	a {
		font-size: 14px;
		color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
	}
`;