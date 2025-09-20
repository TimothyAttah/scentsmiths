import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/DesktopHeader';
import Footer from './footer/Footer';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const PaddingBox = styled.div`
	/* padding-top: ${(props) => (props.addPadding ? '100px' : '0px')}; */
`;

const Layout = () => {
	const location = useLocation();

	const [addPadding, setAddPadding] = useState(false);

	useEffect(() => {
		if (location.pathname !== '/') {
			setAddPadding(true);
		} else {
			setAddPadding(false);
		}
	});
	return (
		<>
			<Header />
			<main>
			<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;

// @redux-devtools/extension
// aos
// axios
// embla-carousel
// embla-carousel-autoplay
// embla-carousel-react
// framer-motion
// gsap
// hamburger-react
// react-countup
// react-icons
// react-intersection-observer
// react-redux
// react-router-dom
// react-scroll-trigger
// react-slick
// react-toastify
// redux
// redux-thunk
// slick-carousel
// styled-components
// swiper
// uuid
