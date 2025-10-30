import styled from "styled-components";

export const NavContainer = styled.nav`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 970px) {
		align-items: center;
		justify-content: flex-end;
	}

	@media screen and (max-width: 450px) {
		align-items: center;
		justify-content: space-between;
	}
`;

export const LeftNavLists = styled.ul`
	padding: 0;
	display: flex;
	gap: 50px;
	align-items: center;

	a {
		display: flex;
		background-color: var(--teniColor);
		padding: 10px;
		position: relative;
		transition: all 0.8s ease;
		border-radius: 10px;

		&::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--teniColor3);
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			right: auto;
		}

		&:hover {
			color: #fff;
			font-weight: bold !important;

			background-color: transparent;
		}
	}

	@media screen and (max-width: 970px) {
		display: none;
	}
`;


export const RightNavLists = styled.ul`
	padding: 0;
	display: flex;
	gap: 30px;
	align-items: center;
	position: relative;

	a {
		display: flex;
		background-color: var(--teniColor);
		padding: 10px;
		position: relative;
		transition: all 0.8s ease;
		border-radius: 10px;

		&::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--teniColor3);
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			right: auto;
		}

		&:hover {
			color: #fff;
			font-weight: bold !important;

			background-color: transparent;
		}
	}

	@media screen and (max-width: 970px) {
		padding-right: 50px;
	}

	@media screen and (max-width: 450px) {
		padding-right: 30px;

		gap: 10px;
		padding: 5px;
	}

	@media screen and (max-width: 360px) {
		padding-right: 30px;

		gap: 10px;
		padding: 5px;
	}
`;

export const Count = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  background-color: #000;
  color: var(--teniColor);
  position: absolute !important;
  top: 20px;
  right: 0;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;


export const SearchBox = styled.div`
	position: absolute;
	bottom: -20px;
	right: 0;
	left: 0;
	/* max-width: 900px; */
	width: 100%;
	height: 50px;
	border-radius: 50px;
	overflow: hidden;

	form {
		width: 100%;
		height: 100%;
	}

	input {
		width: 100%;
		height: 100%;
    padding-left: 20px;
	}

  button {
    padding: 10px 20px;
    background-color: var(--teniColor);
  }
`;

export const MenuBtn = styled.button`
	background-color: transparent;
	color: #fff;
	z-index: 9999;
	background-color: var(--teniColor);
  border-radius: 10px;
  margin-bottom: 12px;

	svg {
		color: #fff;
	}
`;
