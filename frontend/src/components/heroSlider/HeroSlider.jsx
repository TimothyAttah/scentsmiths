import { slides } from '../../utils/sliderData';
import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import Autoplay from 'embla-carousel-autoplay';
import * as Styles from './HeroSliderStyles';
import { Link } from 'react-router-dom';
import { FadeInSlider } from '../fadeIn/FadeInSlider';
import LazyImage from '../LazyImage';

import { AnimatePresence, motion } from 'framer-motion';

const HeroSlider = () => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 7000 }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const scrollTo = useCallback(
		(index) => embla && embla.scrollTo(index),
		[embla],
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	const showAnimation = {
		hidden: {
			opacity: 0,
			x: 1000,
			transition: {
				duration: 1.25,
				type: 'tween',
				delay: 1,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.25,
				type: 'tween',
				delay: 0.5,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
		exit: {
			opacity: 0,
			x: -1000,
			transition: {
				duration: 1.25,
				type: 'tween',
				delay: 0.2,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};

	return (
		<div className='embla' ref={viewportRef}>
			<div className='embla__container'>
				{slides.map((slide, i) => (
					<Styles.Slide className='embla__slide' key={i}>
						{slide.srcType === 'image' ? (
							// <motion.img src={ slide.vic } alt='' />
							<LazyImage src={slide.vic} />
						) : (
							<motion.video src={slide.vic} autoPlay muted loop playsInline />
						)}
						<Styles.SlideContent>
							<FadeInSlider
								delay={1}
								direction={
									slide.slidePosition === 'slide1'
										? 'right'
										: slide.slidePosition === 'slide3'
										? 'up'
										: 'left'
								}
								fullWidth='true'
							>
								<Styles.SlideContentWrapper>
									<h2>{slide.title}</h2>
									{slide.desc.map((text, i) => (
										<p key={i}>{text}</p>
									))}
									<Link to='/products'>{slide.buttonText}</Link>
								</Styles.SlideContentWrapper>
							</FadeInSlider>
						</Styles.SlideContent>
					</Styles.Slide>
				))}
			</div>
			<div className='embla__dots'>
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						selected={index === selectedIndex}
						onClick={() => scrollTo(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSlider;
