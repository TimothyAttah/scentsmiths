import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
	listProductDetails,
	updateProduct,
} from '../../redux/actions/productAction';
import FormContainer from '../../components/FormContainer';
import { PRODUCT_TYPES } from '../../redux/types';

const ProductEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState(null);
	const [url, setUrl] = useState('');

	const [brand, setBrand] = useState('');
	const [category, setCategory] = useState('');
	const [countInStock, setCountInStock] = useState(0);
	const [description, setDescription] = useState('');
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	console.log('product details >>>>>', productDetails);
	const { loading, error, product } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	console.log('product details >>>>>', productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
		product: updatedProduct,
	} = productUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PRODUCT_TYPES.PRODUCT_UPDATE_RESET });
			navigate('/admin/productlist');
		} else {
			if (!product.name || product._id !== id) {
				dispatch(listProductDetails(id));
			} else {
				setName(product.name);
				setPrice(product.price);
				setImage(product.image);
				setBrand(product.brand);
				setCategory(product.category);
				setCountInStock(product.countInStock);
				setDescription(product.description);
			}
		}
	}, [product, id, dispatch, navigate, successUpdate]);

	const uploadFileHandler = async (e) => {
		// const file = e.target.files[0];
		// setImage(e.target.files[0]);
		// const file = e.target.files[0];
		// const formData = new FormData();
		// formData.append('image', file);
		// setUploading(true);
		try
		{
			const file = e.target.files[0];
			// const formData = new FormData();
			// formData.append('image', file);

			const imageData = new FormData();
			imageData.append('file', file);
			imageData.append('upload_preset', 'scentsmithImages');
			imageData.append('cloud_name', 'timothycloud');

			setUploading(true);

			const { data } = await axios.post(
				'https://api.cloudinary.com/v1_1/timothycloud/image/upload',
				imageData,
			);

			console.log('Image data in cloud', data);
			setImage(data.secure_url);
			setUploading(false);
		} catch (err) {
			console.log(err);
		}

		//api.cloudinary.com/v1_1/{cloud_name}/image/upload

		// https: setUploading(true);

		// console.log(e.target.files[0]);

		// setImage(e.target.files[0]);
		// setSelectedImage(e.target.files[0]);

		// const formData = new FormData();
		// formData.append('image', selectedImage); // 'image' is the field name Multer will expect

		//  axios
		// 	.post('/api/upload', formData, {
		// 		headers: {
		// 			'Content-Type': 'multipart/form-data',
		// 		},
		// 	})
		// 	.then((response) => console.log(response.data))
		// 	.catch((error) => console.error(error));

		// try {
		// 	const config = {
		// 		headers: {
		// 			'Content-Type': 'multipart/form-data',
		// 		},
		// 	};

		// 	const { data } = await axios.post(
		// 		'http://localhost:5000/api/upload',
		// 		// 'https://scentsmiths-backend.vercel.app/',
		// 		formData,
		// 		config,
		// 	);
		// 	console.log(data);

		// 	setImage(data);
		// 	setUploading(false);
		// } catch (err) {
		// 	console.log(err);
		// 	setUploading(false);
		// }

		// console.log(image);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		// const formData = new FormData();
		// formData.append('_id', id);
		// formData.append('name', name);
		// formData.append('price', price);
		// formData.append('image', image);
		// formData.append('brand', brand);
		// formData.append('category', category);
		// formData.append('description', description);
		// formData.append('countInStock', countInStock);

		// const result = await axios.post(
		// 	'http://localhost:5000/api/upload',
		// 	formData,
		// 	{
		// 		headers: { 'Content-Type': 'multipart/form-data' },
		// 	},
		// );

		// console.log('result>>>>>>', result);

		// fetch(`/products/${ id }/update`);
		// const response = await fetch(`http://localhost:5000/single`, {
		// 	method: 'POST',
		// 	body: data,
		// });
		// .then(res =>
		// {
		// 	return res.json()
		// })
		// .then((data) => {
		// 	console.log('post data', data);
		// })
		// .catch((err) => {
		// 	console.log(err.message);
		// });

		// console.log(response);

		// try {
		// 	const imageData = new FormData();
		// 	imageData.append('image', image);
		// 	imageData.append('upload_preset', 'scentsmithImages');
		// 	imageData.append('cloud_name', 'timothycloud');

		// 	const { data } = await axios.post(
		// 		'https://api.cloudinary.com/v1_1/timothycloud/image/upload',
		// 		imageData,
		// 	);

		// 	console.log('Image data in cloud', data);
		// 	setUrl(data.secure_url);
		// 	setImage(data.secure_url);
		// } catch (err) {
		// 	console.log(err);
		// }

		dispatch(
			updateProduct({
				_id: id,
				name,
				price,
				image,
				brand,
				category,
				description,
				countInStock,
			}),
		);
	};

	// const getImage = async () => {
	// 	const result = await axios.get(
	// 		'http://localhost:5000/api/upload/get-image',
	// 	);
	// 	console.log('get all images res>>>>>>', result);
	// };

	return (
		<>
			<Link to='/admin/productlist' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit Product</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='price'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter Price'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='image'>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Image url'
								name='image'
								value={image}
								// onChange={(e) => setImage(e.target.value)}
								onChange={uploadFileHandler}
							></Form.Control>
							<Form.Control
								label='Choose File'
								custom
								type='file'
								name='image'
								onChange={uploadFileHandler}
							></Form.Control>
							{uploading && <Loader />}
						</Form.Group>
						{/* <Form.Group controlId='uploading'>
							<Form.Label>Choose File</Form.Label>
							<Form.Control
								type='file'
								// value={image}
								// name='image'
								// onChange={uploadFileHandler}
								onChange={(e) => setFiles(e.target.files[0])}
							/>
						</Form.Group> */}

						<Form.Group controlId='brand'>
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Brand'
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='category'>
							<Form.Label>Category</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Category'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='countInStock'>
							<Form.Label>Count In Stock</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter count In Stock'
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type='submit' variant='primary'>
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default ProductEdit;
