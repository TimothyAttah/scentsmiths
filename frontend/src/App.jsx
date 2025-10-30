import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import ProductItem from './pages/products/ProductItem';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Shipping from './pages/shipping/Shipping';
import Payment from './pages/payment/Payment';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Order from './pages/order/Order';
import Contact from './pages/contact/Contact';
import UserList from './pages/userList/UserList';
import UserEdit from './pages/userEdit/UserEdit';
import ProductLists from './pages/productLists/ProductLists';
import ProductEdit from './pages/productEdit/ProductEdit';
import OrderList from './pages/orderList/OrderList';
import { useEffect } from 'react';
import axios from 'axios';
import Hero from './pages/hero/Hero';
import About from './pages/aboutUs/AboutUs';


const App = () => {
	useEffect(() => {
		getImage();
	}, []);
	const getImage = async () => {
		const result = await axios.get(
			'http://localhost:5000/api/upload/get-image',
		);
		console.log('get all images res>>>>>>', result);
	};
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Hero />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/products' element={<Home />} />

					<Route path='/search/:keyword' element={<Home />} />
					<Route path='/page/:pageNumber' element={<Home />} />
					<Route path='/search/:keyword/page/:pageNumber' element={<Home />} />
					<Route path='/product/:id' element={<ProductItem />} />
					<Route path='/admin/productlist/' element={<ProductLists />} />
					<Route
						path='/admin/productlist/:pageNumber'
						element={<ProductLists />}
					/>

					<Route path='/admin/product/:id/edit' element={<ProductEdit />} />
					<Route path='/admin/orderlist' element={<OrderList />} />
					<Route path='/cart/:id?' element={<Cart />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/admin/userlist' element={<UserList />} />
					<Route path='/admin/user/:id/edit' element={<UserEdit />} />

					<Route path='/shipping' element={<Shipping />} />
					<Route path='/register/shipping' element={<Shipping />} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/placeorder' element={<PlaceOrder />} />
					<Route path='/order/:id' element={<Order />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
