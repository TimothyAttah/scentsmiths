import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import CheckoutSteps from '../../components/CheckoutSteps';
import {
	getOrderDetails,
	payOrder,
	deliverOrder,
} from '../../redux/actions/orderActions';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ORDER_TYPES } from '../../redux/types';

import PaystackPop from '@paystack/inline-js';

//https://paystack.shop/pay/n0c1pwwa7x

const Order = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const [sdkReady, setSdkReady] = useState(false);

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	const orderPay = useSelector((state) => state.orderPay);
	const { loading: loadingPay, success: successPay } = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

	const loginUser = useSelector((state) => state.loginUser);
	const { users: userLogin } = loginUser;

	console.log(userLogin);

	console.log('Order Pay', orderDeliver);
	console.log('Order', order);

	const payWithPaystack = () => {
		// e.preventDefault();
		const paystack = new PaystackPop();

		paystack.newTransaction({
			key: 'pk_test_8815bde73135d01f5f82401a3b09e8f1386b5d1c',
			amount: order?.totalPrice * 100,
			name: 'jane',
			email: 'jane@gmail.com',

			onSuccess(transaction) {
				console.log('This is payment>>>>>', transaction);
				dispatch(payOrder(id, transaction));
				if (transaction.success) {
					dispatch({ type: ORDER_TYPES.ORDER_PAY_RESET });
					dispatch(getOrderDetails(id));
				}
			},
			onCancel() {
				console.log('You have canceled the transaction.');
			},
		});
	};

	useEffect(() => {
		if (!order || successPay || successDeliver) {
			dispatch({ type: ORDER_TYPES.ORDER_PAY_RESET });
			dispatch({ type: ORDER_TYPES.ORDER_DELIVER_RESET });

			dispatch(getOrderDetails(id));
		}
	}, [dispatch, order,id, successDeliver, successPay]);

	// useEffect(() => {
	// 	const addPayPalScript = async () => {
	// 		// const { data: clientId } = await axios.get(
	// 		// 	'http://localhost:5000/api/config/paypal',
	// 		// );
	// 		// const script = document.createElement('script');
	// 		// script.type = 'text/javascript';
	// 		// script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
	// 		// script.async = true;
	// 		// script.onload = () => {
	// 		// 	setSdkReady(true);
	// 		// };
	// 		// document.body.appendChild(script);
	// 		// findDOMNode(this);
	// 		// 'AYKnkgWTNN4oDoM9EmxGkMHGwbY6pep1PtThod8f7C6-ZDQh2PCY6HKYm2lMoct7bHBRj9Y8qHuE08ha';
	// 	};

	// 	// if (!order || successPay) {
	// 	// 	dispatch({ type: ORDER_TYPES.ORDER_PAY_RESET });
	// 	// 	dispatch(getOrderDetails(id));
	// 	// } else if (!order.isPaid) {
	// 	// 	if (!window.paypal) {
	// 	// 		// addPayPalScript();
	// 	// 		window.paypal();
	// 	// 	} else {
	// 	// 		setSdkReady(true);
	// 	// 	}
	// 	// }
	// }, [dispatch, id, order, successPay]);

	const paypal = useRef();

	// useEffect(() => {
	// 	window.paypal
	// 		.Buttons({
	// 			createOrder: (data, actions, err) => {
	// 				return actions.order.create({
	// 					intent: 'CAPTURE',
	// 					purchase_units: dispatch(payOrder(id, actions)),
	// 				});
	// 			},
	// 			onApprove: async (data, actions) => {
	// 				const order = await actions.order.capture();
	// 				console.log('this is payments>>>', order);
	// 			},
	// 			onError: (err) => {
	// 				console.log(err);
	// 			},
	// 		})
	// 		.render(paypal.current);
	// }, []);

	const successPaymentHandler = (paymentResult) => {
		console.log(paymentResult);
		payWithPaystack(paymentResult);

		// dispatch(payOrder(id, paymentResult));
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<>
			<h1>Order {order?._id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							{/* <p>
								<strong>Name: </strong> {order.user.name}
							</p>
							<p>
								<strong>Email: </strong>
								<a href={`mailto:${order.user.email}`}>{order.user.email}</a>
							</p> */}
							<p>
								<strong>Address:</strong>
								{order?.shippingAddress?.address},{' '}
								{order?.shippingAddress?.city}{' '}
								{order?.shippingAddress?.postalCode},{' '}
								{order?.shippingAddress?.country}
							</p>
							{order.isDelivered ? (
								<Message variant='success'>
									Delivered On {order.deliveredAt}
								</Message>
							) : (
								<Message variant='danger'>Not Delivered</Message>
							)}
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method:</strong>
								{order?.paymentMethod}
							</p>
							{order.isPaid ? (
								<Message variant='success'>Paid On {order.paidAt}</Message>
							) : (
								<Message variant='danger'>Not Paid</Message>
							)}
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Order Items</h2>
							{order?.orderItems?.length === 0 ? (
								<Message>Your order is empty </Message>
							) : (
								<ListGroup variant='flush'>
									{order?.orderItems?.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item?.image}
														alt={item?.name}
														fluid
														rounded
														loading='lazy'
													/>
												</Col>
												<Col>
													<Link to={`/product/${item?.product}`}>
														{item?.name}
													</Link>
												</Col>
												<Col md={4}>
													{item?.qty} x ${item?.price} = $
													{item?.qty * item?.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${order?.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${order?.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${order?.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${order?.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							{/* <Link to='https://paystack.shop/pay/n0c1pwwa7x'>Pay</Link> */}

							<br />

							{order.isPaid ? null : (
								<button
									onClick={() => payWithPaystack()}
									style={{
										background: 'green',
										padding: '10px',
										borderRadius: '10px',
										color: '#fff',
									}}>
									Proceed with payment
								</button>
									) }

									{loadingDeliver && <Loader/>}

							{userLogin && userLogin.isAdmin && order.isPaid && !order.isDelivered && (
								<ListGroup.Item>
									<Button
										type='button'
										className='btn btn-block'
										onClick={deliverHandler}>
										Mark As Delived
									</Button>
								</ListGroup.Item>
							)}

							{/* <div ref={paypal}>Payment</div> */}
							{/* {!order.isPaid && (
								<ListGroup.Item>
									{loadingPay && <Loader />}
									{!sdkReady ? (
										<Loader />
									) : (
										// <PayPalButton
										// 	amount={order.totalPrice}
										// 	onSuccess={successPaymentHandler}
										// />
										<button onClick={() => payWithPaystack()}>Pay</button>
									)}
								</ListGroup.Item>
							)} */}
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Order;
