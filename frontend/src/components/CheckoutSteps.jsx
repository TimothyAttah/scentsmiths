import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<Nav className='justify-content-center mb-4'>
			{/* <Nav.Item>
				{step1 ? (
					<Link to='/login'>Sign In</Link>
				) : (
					<Link disabled>Sign In</Link>
				)}
			</Nav.Item> */}

			<Nav.Item>
				{step2 ? (
					<Link to='/shipping'>Shipping</Link>
				) : (
					<Link disabled>Shipping</Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step3 ? (
					<Link to='/payment'>Payment</Link>
				) : (
					<Link disabled>Payment</Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step4 ? (
					<Link to='/placeorder'>Place Order</Link>
				) : (
					<Link disabled>Place Order</Link>
				)}
			</Nav.Item>
		</Nav>
	);
};

export default CheckoutSteps;
