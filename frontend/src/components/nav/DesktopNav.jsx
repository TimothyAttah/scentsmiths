import { Link } from 'react-router-dom';
import { leftDesktopNavData, rightDesktopNavData } from '../../utils/navData';
import * as Styles from './DesktopNavStyles';
import { useState } from 'react';
import SearchBox from '../SearchBox';
import { Twirl as Hamburger } from 'hamburger-react';
import { useSelector } from 'react-redux';

const DesktopNav = ({ showMobileSidebar, setShowMobileSidebar }) => {
	const [openSearch, setOpenSearch] = useState(false);
	const handleSearch = () => {
		setOpenSearch(!openSearch);
	};

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	console.log(cartItems.length);
	return (
		<Styles.NavContainer>
			<Styles.LeftNavLists>
				{leftDesktopNavData.map((item, i) => (
					<Link key={i} to={item.linkPath}>
						<li>
							<span>{<item.linkIcon />}</span> <span>{item.linkTitle}</span>
						</li>
					</Link>
				))}
			</Styles.LeftNavLists>
			<Styles.RightNavLists>
				{rightDesktopNavData.map((item, i) => (
					<Link key={i} to={item.linkPath}>
						<li>
							<span onClick={item.linkSearch && handleSearch}>
								{<item.linkIcon />}
							</span>
							{/* {item.cartNum > 0 ? (
								<Styles.Count>{cartItems.length}</Styles.Count>
							) : (
								<Styles.Count>{item.cartNum}</Styles.Count>
							)} */}
						</li>
					</Link>
				))}
			</Styles.RightNavLists>
			{openSearch && (
				<Styles.SearchBox>
					<SearchBox />
				</Styles.SearchBox>
			)}

			<Styles.MenuBtn>
				<Hamburger
					size='25'
					rounded
					toggled={showMobileSidebar}
					toggle={() => setShowMobileSidebar(!showMobileSidebar)}
				/>
			</Styles.MenuBtn>
		</Styles.NavContainer>
	);
};

export default DesktopNav;
