import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './SidebarStyles';
import { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Overlay from '../Overlay';
import { FaCartPlus, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import SearchBox from '../SearchBox';

const HeaderSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState(null);

	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { users } = loginUser;
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logoutUser());
		navigate('/login');
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
		setClicked(null);
	};

	const subMenuDrawer = {
		enter: {
			height: 'auto',
			overflow: 'hidden',
		},
		exit: {
			height: 0,
			overflow: 'hidden',
		},
	};

	const closeSidebar = () => {
		setIsOpen(false);

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			{/* {isOpen && <Overlay onClick={() => setIsOpen(false)} />} */}
			<Styles.HeaderSidebarContainer>
				<Styles.HeaderSidebarMenuButton>
					<Hamburger
						size='18'
						// rounded
						toggled={isOpen}
						toggle={toggleSidebar}
					/>
				</Styles.HeaderSidebarMenuButton>
				<Styles.HeaderSidebarNavWrapper
					initial={{ x: '-150vw' }}
					animate={{
						x: isOpen ? '0%' : '-150vw',
					}}>
					<SearchBox closeSidebar={closeSidebar} />
					<Styles.HeaderDropdownWrapperMobile>
						<Link to='/cart' onClick={closeSidebar}>
							<>
								<i className='fas fa-shopping-cart'></i> Cart
							</>
						</Link>
						{users ? (
							<NavDropdown title={users?.name} id='username'>
								<Link to='/profile' onClick={closeSidebar}>
									<div>Profile</div>
								</Link>
								<NavDropdown.Item onClick={logoutHandler}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Link to='/login' onClick={closeSidebar}>
								<>
									<i className='fas fa-user'></i>Sign In
								</>
							</Link>
						)}

						<Link to='/contact' onClick={closeSidebar}>
							<>
								<i className='fas fa-phone'></i> Contact
							</>
						</Link>

						{users && users.isAdmin && (
							<NavDropdown title='Admin' id='adminmenu'>
								<Link to='/admin/userlist' onClick={closeSidebar}>
									<div>Users</div>
								</Link>
								<Link to='/admin/productlist' onClick={closeSidebar}>
									<div>Products</div>
								</Link>

								<Link to='/admin/orderlist' onClick={closeSidebar}>
									<div>Orders</div>
								</Link>
							</NavDropdown>
						)}
					</Styles.HeaderDropdownWrapperMobile>

					<Styles.InfoWrapper>
						<Styles.InfoList>
							<h4>📍 Head Office:</h4>
							<p>Lagos, Nigeria</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📞 Phone:</h4>
							<p>+2349055201988</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📧 Email:</h4>
							<p>adenugatemitope52@gmail.com</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>🕒 Office Hours:</h4>
							<p>Monday – Friday: 9:00 AM – 5:00 PM</p>
							<p>Saturday: 10:00 AM – 2:00 PM</p>
						</Styles.InfoList>
					</Styles.InfoWrapper>
					<Styles.InfoSocialLinksWrapper>
						<Styles.InfoSocialLink>
							<Link>
								<Facebook />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Twitter />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Instagram />
							</Link>
						</Styles.InfoSocialLink>
					</Styles.InfoSocialLinksWrapper>
				</Styles.HeaderSidebarNavWrapper>
			</Styles.HeaderSidebarContainer>
		</>
	);
};

export default HeaderSidebar;
