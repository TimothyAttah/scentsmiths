import { Container, Row, Col } from 'react-bootstrap';
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaMapPin,
	FaPhone,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styles from './FooterStyles'

const Footer = () => {
	return (
		<Styles.Footer>
			{/* <Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; Scentsmith byteniii 2025</Col>
				</Row>
			</Container> */}
			<Styles.Contact>
				<h4>Scentsmith bytenii</h4>
				<ul>
					<li>
						<FaMapPin /> <span>Lagos, Nigeria</span>
					</li>
					<li>
						<FaEnvelope /> <span>adenugatemitope52@gmail.com</span>
					</li>
					<li>
						<FaPhone /> <span>+2349055201988</span>
					</li>
				</ul>
			</Styles.Contact>

			<Styles.Collections>
				<h4>Scentsmith Collections</h4>
				<Link to='/products'>Our Bestsellers | Shop Bestsellers</Link>
				<Link to='/products'>Explore Women’s Collection | For Her</Link>
				<Link to='/products'>Discover Men’s Collection | For Him</Link>
				<Link to='/products'>Unisex Collection | Shop Unisex Scents</Link>
				<Link to='/products'>
					Limited Edition & Collections | View Exclusive Collection
				</Link>
			</Styles.Collections>

			<Styles.Follow>
				<h4>Follow Us:</h4>
				<p>The art of scent-making, the essence of identity.</p>
				<Link to='/'>
					<FaFacebook />
				</Link>
				<Link to='/'>
					<FaInstagram />
				</Link>
			</Styles.Follow>
		</Styles.Footer>
	);
};

export default Footer;
