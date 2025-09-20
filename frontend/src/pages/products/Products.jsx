import { Link } from 'react-router-dom';
import Rating from '../../components/rating/Rating';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonBuy = styled.button`
	width: 200px;
	height: 40px;
	border-radius: 10px;
	background-color: var(--teniColor);
	color:#fff;
	font-size: 20px;
	font-weight: bold;
`

export const CardWrapper = styled.div`
	box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
	border-radius: 5px;

`

const Products = ({ product }) => {
	return (
		<CardWrapper>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/product/${product?._id}`}>
					<Card.Img src={product?.image} variant='top' />
				</Link>

				<Card.Body>
					<Link to={`/product/${product?._id}`}>
						<Card.Title as='div'>
							<strong>{product?.name}</strong>
						</Card.Title>
					</Link>

					<Card.Text as='div'>
						<Rating
							value={product?.rating}
							text={`${product?.numReviews} reviews`}
							color='#f8e825'
						/>
					</Card.Text>
					<Card.Text as='h3'>₦{product.price}</Card.Text>
					<Link to={`/product/${product?._id}`}>
						<ButtonBuy>Buy Now</ButtonBuy>
					</Link>
				</Card.Body>
			</Card>
		</CardWrapper>
	);
};

export default Products;
