import { useEffect } from 'react';
import Products from '../products/Products';
import * as Styles from './HomeStyles';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Slider from '../../components/slider/Slider';
import { FadeInAlways } from '../../components/fadeIn/FadeInAlways';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../../components/pagination/Paginate';
import ProductCarousel from '../../components/ProductCarousel';

const Home = () => {
	const { keyword } = useParams();
	const { pageNumber } = useParams() || 1;

	console.log('page num', pageNumber);

	const { error, loading, products, page, pages } = useSelector(
		(state) => state.productLists,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);
	return (
		<>
			{/* <Slider /> */}
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<Container>
				<Styles.Title>Latest Products</Styles.Title>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<>
						<Row>
							{products?.map((product, i) => (
								<Col sm={12} md={6} xl={4} key={i}>
									<Products product={product} />
								</Col>
							))}
						</Row>
						<Paginate
							page={page}
							pages={pages}
							keyword={keyword ? keyword : ''}
						/>
					</>
				)}
			</Container>
		</>
	);
};

export default Home;
