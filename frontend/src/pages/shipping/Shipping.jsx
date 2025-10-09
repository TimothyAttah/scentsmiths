import { useRef, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer';
import {
	saveShippingAddress,
	saveShippingPrice,
} from '../../redux/actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';
import { FaTimes, FaDotCircle } from 'react-icons/fa';
import Overlay from '../../components/Overlay';
import * as Styles from './ShippingStyles';
import { shippingOptions } from '../../utils/shipping';

const Shipping = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	// const location = useLocation();
	const [openShippingAddress, setOpenShippingAddress] = useState(false);
	const [openShippingMethod, setOpenShippingMethod] = useState(false);

	const cart = useSelector((state) => state.cart);
	// console.log('This is cart', cart);

	const { shippingAddress, shippingPrice } = cart;

	const [fullName, setFullName] = useState(shippingAddress?.address);
	const [phoneNumber, setPhoneNumber] = useState(shippingAddress?.address);
	const [email, setEmail] = useState(shippingAddress?.address);
	const [address, setAddress] = useState(shippingAddress?.address);
	const [country, setCountry] = useState(shippingAddress?.country);
	const [state, setState] = useState(shippingAddress?.address);
	const [city, setCity] = useState(shippingAddress?.city);
	const [shippingMethodPrice, setShippingMethodPrice] = useState({});
	const [shippingPriceValue, setShippingPriceValue] = useState(shippingPrice);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			saveShippingAddress({
				fullName,
				phoneNumber,
				email,
				address,
				country,
				state,
				city,
			}),
		);

		// dispatch(
		// 	saveShippingPrice({
		// 		price: setShippingPriceValue.price,
		// 	}),
		// );
		// setOpenShippingAddress(false);
		navigate('/payment');
	};

	const handleChange = (e) => {
		const agentData = JSON.parse(e.target.value);
		setShippingMethodPrice(agentData);
		setOpenShippingMethod(false);

		setShippingPriceValue(shippingMethodPrice.price);

		console.log(shippingPriceValue);

		dispatch(
			saveShippingPrice({
				price: shippingMethodPrice?.price,
			}),
		);
	};

	return (
		<>
			<FormContainer>
				<CheckoutSteps step1 step2 />

				<Form onSubmit={submitHandler}>
					<Form.Group controlId='fullName'>
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter your name'
							value={fullName}
							required
							onChange={(e) => setFullName(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='phoneNumber'>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter your phone number'
							value={phoneNumber}
							required
							onChange={(e) => setPhoneNumber(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter your email'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='address'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter address'
							value={address}
							required
							onChange={(e) => setAddress(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='country'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter country'
							value={country}
							required
							onChange={(e) => setCountry(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='state'>
						<Form.Label>State</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter state'
							value={state}
							required
							onChange={(e) => setState(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='city'>
						<Form.Label>City (Optional)</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter city'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Continue
					</Button>
				</Form>

				{/* <Styles.DeliveryDetailsFormContainer>
					<h4>Delivery Details</h4>
					<Button onClick={() => setOpenShippingAddress(true)}>
						Add Delivery Details
					</Button>
				</Styles.DeliveryDetailsFormContainer> */}

				{openShippingAddress && (
					<>
						<Overlay onClick={() => setOpenShippingAddress(false)} />
						<Styles.ShippingContainer>
							<Styles.ShippingCloseBox>
								<h4>Change Delivery Details</h4>
								<button onClick={() => setOpenShippingAddress(false)}>
									<FaTimes />
								</button>
							</Styles.ShippingCloseBox>
							<Form onSubmit={submitHandler}>
								<Form.Group controlId='fullName'>
									<Form.Label>Full Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter your name'
										value={fullName}
										required
										onChange={(e) => setFullName(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='phoneNumber'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter your phone number'
										value={phoneNumber}
										required
										onChange={(e) => setPhoneNumber(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter your email'
										value={email}
										required
										onChange={(e) => setEmail(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='address'>
									<Form.Label>Address</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter address'
										value={address}
										required
										onChange={(e) => setAddress(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='country'>
									<Form.Label>Country</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter country'
										value={country}
										required
										onChange={(e) => setCountry(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='state'>
									<Form.Label>State</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter state'
										value={state}
										required
										onChange={(e) => setState(e.target.value)}
									></Form.Control>
								</Form.Group>
								<Form.Group controlId='city'>
									<Form.Label>City (Optional)</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter city'
										value={city}
										onChange={(e) => setCity(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Button type='submit' variant='primary'>
									Continue
								</Button>
							</Form>
						</Styles.ShippingContainer>
					</>
				)}

				{/* <Styles.DeliveryDetailsShippingContainer>
					<h4>SHIPPING Location</h4>
					<Button onClick={() => setOpenShippingMethod(true)}>
						Add SHIPPING location
					</Button>
					<p>Location: {shippingMethodPrice?.title}</p>
					<p>Price: ₦{shippingMethodPrice?.price}</p>
				</Styles.DeliveryDetailsShippingContainer> */}

				{openShippingMethod && (
					<>
						<Overlay />
						<Styles.ShippingContainer>
							<Styles.ShippingCloseBox>
								<button>
									<FaTimes />
								</button>
							</Styles.ShippingCloseBox>

							{/* <select
								// id='price'
								// name='price'
								// value={price}
								onChange={handleChange}
							>
								{shippingOptions.map((item, i) => (
									<>
										<option key={i} value={JSON.stringify(item)}>
											{item.title}
										</option>

									</>
								))}
							</select> */}
							{shippingOptions.map((item, i) => (
								<Styles.DeliveryDetailsShippingList>
									<button
										key={i}
										value={JSON.stringify(item)}
										onClick={handleChange}
									>
										<div>
											<FaDotCircle />

											{item.title}
										</div>
										<span>₦{item.price}</span>
									</button>
								</Styles.DeliveryDetailsShippingList>
							))}
						</Styles.ShippingContainer>
					</>
				)}
			</FormContainer>
		</>
	);
};

export default Shipping;
