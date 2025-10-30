import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const MobileNavContainer = styled.div`
	/* padding: 15px; */
`;
export const MobileMenuButton = styled(motion.div)`

	position: relative;
	position: absolute;
	right: 30px;
	top: 20px;
	/* background-color: rgb(129 59 1); */
	background: inherit !important;
	color: #fff;
	border-radius: 10px;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	/* color: #000; */
`;
export const MobileNavWrapper = styled(motion.div)`
	position: absolute;
	right: 0;
	top: 0;
	overflow-y: scroll;
	height: 100vh;
	max-width: 400px;
	width: 100%;
	background-color: #000;
	color: #fff;
	padding-top: 150px;
	z-index: 99;
  padding-left: 50px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ListItems = styled.ul`
  padding: 0;

  display: flex;
  gap: 50px;
  flex-direction: column;

  a {
    color: var(--teniColor);
  }
`
