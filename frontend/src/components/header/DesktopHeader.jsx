import React from 'react';
import * as Styles from './DesktopHeaderStyles';
import HeaderSidebar from '../sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import SearchBox from '../SearchBox';

// Fragrances for home with sticksFragrances refillAmbient
// 				SprayEssential OilFragrance Machine


const DesktopHeader = () => {
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { users } = loginUser;
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logoutUser());
		navigate('/login');
	};
	return (
		<Styles.HeaderContainer>
			<Styles.HeaderWrapper>
				<Styles.HeaderLogo>
					<Link to='/'>
						<h1>
							scentsmith <br />
							<span>byteniii</span>
						</h1>
					</Link>
				</Styles.HeaderLogo>
				<Styles.HeaderNavWrapper>
					{/* <Link to='/'>Home Fragrances</Link>
					<Link to='/'>Car Fragrances</Link>
					<Link to='/'>Perfume</Link> */}
					<SearchBox />
					<Link to='/contact'>Contact</Link>
				</Styles.HeaderNavWrapper>

				<Styles.HeaderDropdownWrapper>
					<Link to='/cart'>
						<>
							<i className='fas fa-shopping-cart'></i> Cart
						</>
					</Link>
					{users ? (
						<NavDropdown title={users?.name} id='username'>
							<Link to='/profile'>
								<div>Profile</div>
							</Link>
							<NavDropdown.Item onClick={logoutHandler}>
								Logout
							</NavDropdown.Item>
						</NavDropdown>
					) : (
						<Link to='/login'>
							<>
								<i className='fas fa-user'></i>Sign In
							</>
						</Link>
					)}
					{users && users.isAdmin && (
						<NavDropdown title='Admin' id='adminmenu'>
							<Link to='/admin/userlist'>
								<div>Users</div>
								{/* <NavDropdown.Item>User</NavDropdown.Item> */}
							</Link>
							<Link to='/admin/productlist'>
								<div>Products</div>
								{/* <NavDropdown.Item>Products</NavDropdown.Item> */}
							</Link>

							<Link to='/admin/orderlist'>
								<div>Orders</div>
								{/* <NavDropdown.Item>Orders</NavDropdown.Item> */}
							</Link>
						</NavDropdown>
					)}
				</Styles.HeaderDropdownWrapper>

				<Styles.HeaderSidebarContainer>
					<>
						<HeaderSidebar />
					</>
				</Styles.HeaderSidebarContainer>
			</Styles.HeaderWrapper>
		</Styles.HeaderContainer>
	);
};

export default DesktopHeader;
