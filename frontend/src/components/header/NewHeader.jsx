import * as Styles from './NewHeaderStyles';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import DesktopNav from '../nav/DesktopNav';
import MobileNav from '../nav/MobileNav';

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

const NewHeader = () => {
	const [showMobileSidebar, setShowMobileSidebar] = useState(false);

	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 85) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	return (
		<Styles.Header className={navbar ? 'activeHeader' : ''}>
			<Styles.HeaderContainer>
				<Styles.HeaderLogo>
					<Link to='/' onClick={scrollToTop}>
						Scentsmith <br /> bytenii
					</Link>
				</Styles.HeaderLogo>
				<DesktopNav
					showMobileSidebar={showMobileSidebar}
					setShowMobileSidebar={setShowMobileSidebar}
				/>
			</Styles.HeaderContainer>

			<AnimatePresence>
				{showMobileSidebar && (
					<MobileNav
						showMobileSidebar={showMobileSidebar}
						setShowMobileSidebar={setShowMobileSidebar}
					/>
				)}
			</AnimatePresence>
		</Styles.Header>
	);
};

export default NewHeader;
