import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderSidebarContainer = styled.div``;
export const HeaderSidebarMenuButton = styled(motion.div)`
	z-index: 99999;
	position: absolute;
	right: 20px;
	top: -5px;
	background-color: rgb(129 59 1);
	background-color: #000;
	color: #fff;
	border-radius: 10px;
	width:45px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
  z-index: 99999;
  font-size: 15px;
`;
export const HeaderSidebarNavWrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	overflow-y: auto;
	height: 100vh;
	max-width: 350px;
	width: 100%;
	background-color: var(--brown);
	background-color: #fff;
	color: #fff;
	color: #000;
	padding-top: 120px;
	z-index: 9999;
	padding: 20px;
	padding-top: 150px;
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SidebarLogo = styled.div`
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: absolute;
		left: 20px;
		top: 20px;

		h4 {
			font-size: 14px;
			color: rgb(129 59 1);
		}
	}

	img {
		width: 40px;
	}
`;

export const HeaderLogo = styled.div`
	position: relative;
  width: 100px;
	a {
		display: flex;
		flex-direction: column;
		color: #000;

		h1 {
			font-size: 18px;
			color: #000;

			span {
				font-size: 14px;
				position: absolute;
				right: 0;
			}
		}
	}
`;

export const HeaderDropdownWrapperMobile = styled.div`
	display: flex;
	/* align-items: center; */
  flex-direction: column;
	gap: 10px;
  padding-top: 20px;

	a {
		color: #000;
    font-size: 30px;
	}

	display: none;
	@media screen and (max-width: 900px) {
		margin-right: 70px;
		display: flex;
	}
`;


export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0;
`

export const ImgBox = styled.div`
	width: 100%;

	img {
		width: 100%;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0;
  border-top: 2px solid #ccc;
`;

export const InfoList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 10px;
	padding: 5px 0;

	span {
		color: var(--brown);
	}

	h4 {
		display: flex;
		align-items: center;
		gap: 5px;
		color: rgb(129 59 1);
    font-size: 12px;
	}
`;

export const InfoSocialLinksWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-top: 20px;
`;

export const InfoSocialLink = styled.div`
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: var(--brown);
		background-color: rgb(129 59 1);
		color: #fff;
		padding: 5px;
	}
`;
