import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer';
import { savePaymentMethod } from '../../redux/actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';

const Payment = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate('/placeorder');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>

					<Col>
						<Form.Check
							type='radio'
							label='Paystack'
							id='Paystack'
							name='paymentMethod'
							value='paystack'
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
						{/* <Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMethod'
							value='Stripe'
							onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check> */}
					</Col>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default Payment;
