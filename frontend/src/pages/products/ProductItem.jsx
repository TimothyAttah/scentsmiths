import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../../components/rating/Rating';

import { useEffect, useState } from 'react';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Container,
	Form,
} from 'react-bootstrap';
import {
	listProductDetails,
	createProductsReview,
} from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { PRODUCT_TYPES } from '../../redux/types';
import { proBaseURL } from '../../redux/api';

const user = JSON.parse(localStorage.getItem('users'));

const ProductItem = () => {
	const { id } = useParams();
	// const product = products.find((prod) => prod._id === id);

	const [qty, setQty] = useState(1);
	const [name, setName] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;

	const loginUser = useSelector((state) => state.loginUser);
	const { userInfo } = loginUser;

	const productReviewCreate = useSelector((state) => state.productReviewCreate);
	const { success: successProductReview, error: errorProductReview } =
		productReviewCreate;

	useEffect(() =>
	{
		if (successProductReview)
		{
			alert('Review Submitted')
			setRating(0);
			setComment('');
			dispatch({type: PRODUCT_TYPES.PRODUCT_CREATE_REVIEW_RESET})
		}
		dispatch(listProductDetails(id));
	}, [dispatch, id]);

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};

	const submitReviewHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProductsReview(id, {
				rating,
				comment,
			}),
		);
	};

	return (
		<Container>
			<Link to='/' className='btn btn-light my-3'>
				Go back
			</Link>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						<Col md={6}>
							<Image
								src={`${proBaseURL}${product?.image}`}
								alt=''
								fluid
							/>
						</Col>
						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h3>{product?.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={product?.rating}
										text={`${product?.numReviews} reviews`}
										color='#f8e825'
									/>
								</ListGroup.Item>
								<ListGroup.Item>Price: ₦{product?.price}</ListGroup.Item>
								<ListGroup.Item>
									Description:{product?.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>₦{product?.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product?.countInStock > 0
													? 'In Stock'
													: 'Out of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									{product?.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col>
													<Form.Control
														as='select'
														value={qty}
														onChange={(e) => setQty(e.target.value)}
													>
														{[...Array(product?.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															),
														)}
													</Form.Control>
												</Col>
											</Row>
										</ListGroup.Item>
									)}
									<ListGroup.Item>
										<Button
											onClick={addToCartHandler}
											className='btn-block'
											type='button'
											disabled={product?.countInStock === 0}
										>
											Add To Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<h2>Reviews</h2>
							{product.reviews.length === 0 && <Message>No Reviews</Message>}
							<ListGroup variant='flush'>
								{product.reviews.map((review) => (
									<ListGroup.Item key={review?._id}>
										<strong>{review?.name}</strong>
										<Rating value={review?.rating} color='#f8e825' />
										<p>{review?.createdAt.substring(0, 10)}</p>
										<p>{review?.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									{errorProductReview && (
										<Message variant='danger'>{errorProductReview}</Message>
									)}
									<h2>Write a Customer Review</h2>
									{user ? (
										<Form onSubmit={submitReviewHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as='select'
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option value=''>Select...</option>
													<option value='1'>1 - Poor</option>
													<option value='2'>2 - Fair</option>
													<option value='3'>3 - Good</option>
													<option value='4'>4 - Very Good</option>
													<option value='5'>5 - Excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='3'
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												></Form.Control>
											</Form.Group>
											<Button type='submit' variant='primary'>
												Submit
											</Button>
										</Form>
									) : (
										<Message>
											Please <Link to='/login'>sign in</Link> to write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default ProductItem;
