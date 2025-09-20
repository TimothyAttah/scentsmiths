import { Link, useNavigate } from 'react-router-dom';
import * as Styles from './HeaderStyles';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const Header = () => {
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { users } = loginUser;
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logoutUser());
		navigate('/login');
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Link to='/'>
						<Navbar.Brand>bytenii</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav  '>
						<Nav className='ml-auto'>
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
