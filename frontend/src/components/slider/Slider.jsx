import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import * as Styles from './SliderStyles';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const Slider = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	const { products, error, loading } = useSelector(
		(state) => state.productLists,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<>
						{products?.map((product, i) => (
							<Styles.SliderContainer className='embla__slide' key={i}>
								<>
									<Styles.SliderItems>
										<Styles.SliderImg>
											<FadeInAlways delay={0.2} direction='up'>
												<Link to={`/product/${product._id}`}>
													<img src={product.image} alt='' />
												</Link>
											</FadeInAlways>
										</Styles.SliderImg>
										<Styles.SliderContent>
												<Link to={`/product/${product._id}`}>
											<FadeInAlways delay={0.2} direction='down'>
													<h3>{product.name}</h3>
													<p>{product.description}</p>
													<button to={`/product/${product._id}`}>Buy now</button>
											</FadeInAlways>
												</Link>
										</Styles.SliderContent>
									</Styles.SliderItems>
								</>
							</Styles.SliderContainer>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Slider;
