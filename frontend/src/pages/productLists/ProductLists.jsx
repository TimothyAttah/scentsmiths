import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Table, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { listProducts, deleteProduct, createProduct } from '../../redux/actions/productAction';
import { PRODUCT_TYPES } from '../../redux/types'
import {FaTrash, FaEdit} from 'react-icons/fa'

const ProductLists = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const productLists = useSelector((state) => state.productLists);
	console.log(productLists);
	const { loading, error, products } = productLists;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = productDelete;

	const productCreate = useSelector((state) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct
	} = productCreate;

	console.log('productCreate', productCreate);


	const loginUser = useSelector((state) => state.loginUser);
	const { users: userLogin } = loginUser;

	/***** BEFORE THE CREATE PRODUCT FUNCTION ******/
	// useEffect(() => {
	// 	dispatch({type: PRODUCT_TYPES.PRODUCT_CREATE_RESET})
	// 	if (userLogin && userLogin.isAdmin) {
	// 		dispatch(listProducts());
	// 	} else {
	// 		navigate('/login');
	// 	}
	// }, [dispatch, navigate, userLogin, successDelete]);


	/***** AFTER THE CREATE PRODUCT FUNCTION ******/
	useEffect(() => {
		dispatch({ type: PRODUCT_TYPES.PRODUCT_CREATE_RESET });
		if (!userLogin.isAdmin) {
			navigate('/login');
		}

		if (successCreate) {
			navigate(`/admin/product/${createdProduct._id}/edit`)
		} else {
			dispatch(listProducts())
		}

	}, [dispatch, navigate, userLogin, successDelete, successCreate, createdProduct]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteProduct(id));
		}
	};

	const createProductHandler = () => {
		console.log('products');
		dispatch(createProduct())
	};
	return (
		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Products</h1>
				</Col>
				<Col className='text-right'>
					<Button className='my-3' onClick={createProductHandler}>
						<i className='fas fa-plus'></i> Create Product
					</Button>
				</Col>
			</Row>

			{loadingDelete && <Loader />}
			{errorDelete && <Message variant='danger'>{errorDelete}</Message>}

			{loadingCreate && <Loader />}
			{errorCreate && <Message variant='danger'>{errorCreate}</Message>}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>PRICE</th>
							<th>CATEGORY</th>
							<th>BRAND</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>N{product?.price}</td>
								<td>{product?.category}</td>
								<td>{product?.brand}</td>

								<td>
									<Link to={`/admin/product/${product._id}/edit`}>
										<Button variant='light' className='btn-sm'>
											{/* <i className='fas fa-edit'></i> */ }
											<FaEdit/>
										</Button>
									</Link>
									<Button
										variant='danger'
										className='btn-sm'
										onClick={() => deleteHandler(product._id)}>
										{/* <i className='fas fa-trash'></i> */ }
										<FaTrash/>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default ProductLists;
