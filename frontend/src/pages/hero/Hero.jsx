import HeroSlider from '../../components/heroSlider/HeroSlider';
import * as Styles from './HeroStyles';
import LazyImage from '../../components/LazyImage';
import collBest from '../../assets/collBest.png';
import collEdit from '../../assets/collEdit.png';
import collHim from '../../assets/collHim.png';
import collHer from '../../assets/collHer.png';
import collUni from '../../assets/collUni.png';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div>
			<HeroSlider />
			<div>
				<Styles.HeroIntroContainer>
					<Styles.HeroIntroInfoContainer>
						<h1>🌸 Welcome to Scentsmith — Where Every Scent Tells a Story</h1>
						<p>
							At <b>Scentsmith </b>, we believe that fragrance is more than just
							a pleasant aroma — it’s an identity, a memory, a feeling captured
							in time. We handcraft and curate the finest perfumes designed to
							match every mood, moment, and personality.
						</p>
						<p>
							Each bottle at Scentsmith is a masterpiece — a perfect balance of
							<b> luxury, longevity, and artistry. </b> Whether you love bold,
							woody tones or delicate floral whispers, our collection blends the
							world’s most exquisite notes to bring you scents that linger and
							leave an unforgettable impression.
						</p>
					</Styles.HeroIntroInfoContainer>

					<Styles.HeroIntroInfoContainer>
						<h1>✨ Our Promise:</h1>
						<ul>
							<li>
								<span>Authenticity:</span> 100% genuine and original fragrances.
							</li>
							<li>
								<span>Quality:</span> Crafted with premium ingredients sourced
								from top perfume houses
							</li>
							<li>
								<span>Variety:</span> A wide selection for men, women, and
								unisex lovers
							</li>
							<li>
								<span>Experience:</span> Fast delivery, secure packaging, and
								excellent customer care.
							</li>
						</ul>
						<p>Rediscover yourself through fragrance.</p>
						<p>
							Indulge in the art of scent-making with{' '}
							<b> Scentsmith — the master of fine fragrances. </b>
						</p>
					</Styles.HeroIntroInfoContainer>

					<Styles.HeroIntroInfoContainer>
						<h1>💫 Our Story</h1>
						<h4>Crafting Memories Through Fragrance</h4>

						<p>
							Founded on a deep love for the art of scent-making,{' '}
							<b> Scentsmith </b> was born from the belief that perfume is a
							form of self-expression. Just as a blacksmith shapes metal, a
							Scentsmith crafts emotion through fragrance — blending the rarest
							essences from around the world into timeless creations.
						</p>
						<p>Our mission is simple:</p>
						<p>
							To inspire <b> confidence, evoke emotion, and redefine luxury </b>{' '}
							— one scent at a time.
						</p>
						<p>
							From the heart of our fragrance lab to your hands, we ensure each
							bottle embodies <b>purity, passion, and perfection</b>.
						</p>
					</Styles.HeroIntroInfoContainer>
				</Styles.HeroIntroContainer>

				<Styles.HeroCollectionsWrapper>
					<h1>🌹 Shop Categories</h1>
					<Styles.HeroCollectionsContainer>
						<Styles.HeroCollectionsInfoContainer>
							<h4>Most Loved Scents</h4>
							<small>
								Discover the fragrances everyone’s falling in love with.
							</small>
							<p>
								From floral elegance to bold intensity, our bestselling perfumes
								capture hearts and turn heads.
							</p>
							<p>
								Experience the magic of scents that define sophistication —
								because the best always leaves a trace.
							</p>
							<Link to='/products'>Shop Bestsellers</Link>
						</Styles.HeroCollectionsInfoContainer>
						<Styles.HeroCollectionsImgContainer>
							<LazyImage src={collBest} />
						</Styles.HeroCollectionsImgContainer>
					</Styles.HeroCollectionsContainer>

					<Styles.HeroCollectionsContainer primary>
						<Styles.HeroCollectionsInfoContainer>
							<h4>Grace in Every Drop</h4>
							<small>
								Soft, sensual, and unforgettable — made for the woman who owns
								her presence.
							</small>
							<p>
								From delicate florals to rich oriental notes, Scentsmith for Her
								celebrates femininity, elegance, and timeless charm.
							</p>

							<Link to='/products'>Explore Women’s Collection</Link>
						</Styles.HeroCollectionsInfoContainer>
						<Styles.HeroCollectionsImgContainer>
							<LazyImage src={collHer} />
						</Styles.HeroCollectionsImgContainer>
					</Styles.HeroCollectionsContainer>

					<Styles.HeroCollectionsContainer>
						<Styles.HeroCollectionsInfoContainer>
							<h4>Strength in Every Note</h4>
							<small>
								Bold, confident, and magnetic — crafted for the man who commands
								attention.
							</small>
							<p>
								Whether it’s deep woody tones or fresh aromatic blends,
								Scentsmith for Him defines power and sophistication.
							</p>

							<Link to='/products'>Discover Men’s Collection</Link>
						</Styles.HeroCollectionsInfoContainer>
						<Styles.HeroCollectionsImgContainer>
							<LazyImage src={collHim} />
						</Styles.HeroCollectionsImgContainer>
					</Styles.HeroCollectionsContainer>

					<Styles.HeroCollectionsContainer primary>
						<Styles.HeroCollectionsInfoContainer>
							<h4>Fragrance Without Boundaries</h4>
							<small>Perfectly balanced scents for everyone.</small>
							<p>
								Our Unisex line blends masculine strength and feminine elegance
								— designed for those who believe scent has no gender.
							</p>

							<Link to='/products'>Shop Unisex Scents</Link>
						</Styles.HeroCollectionsInfoContainer>
						<Styles.HeroCollectionsImgContainer>
							<LazyImage src={collUni} />
						</Styles.HeroCollectionsImgContainer>
					</Styles.HeroCollectionsContainer>

					<Styles.HeroCollectionsContainer>
						<Styles.HeroCollectionsInfoContainer>
							<h4>Exclusive Creations</h4>
							<small>For the true connoisseur of fine fragrance.</small>
							<p>
								Immerse yourself in rare blends, collector’s editions, and
								signature oils crafted in limited batches. Each bottle tells a
								story of luxury and craftsmanship.
							</p>

							<Link to='/products'>View Exclusive Collection</Link>
						</Styles.HeroCollectionsInfoContainer>
						<Styles.HeroCollectionsImgContainer>
							<LazyImage src={collEdit} />
						</Styles.HeroCollectionsImgContainer>
					</Styles.HeroCollectionsContainer>
				</Styles.HeroCollectionsWrapper>

				<Styles.HeroReasonContainer>
					<div>
						<h1>🌟 Why Choose Scentsmith</h1>

						<ul>
							<li>
								<span>Authentic Fragrances:</span> 100% original perfumes from
								trusted global brands and our signature line
							</li>
							<li>
								<span>Long-lasting Quality:</span> Carefully formulated to
								linger beautifully throughout your day.
							</li>
							<li>
								<span>Affordable Luxury:</span> Premium scents without the
								premium price tag.
							</li>
							<li>
								<span>Exceptional Experience:</span> Fast delivery, elegant
								packaging, and dedicated customer care.
							</li>
							<li>
								<span>Scent Experts:</span> Our team of perfumers and fragrance
								curators ensure every bottle meets the
							</li>
							<li>
								<span>Scent Experts:</span> Our team of perfumers and fragrance
								curators ensure every bottle meets the Scentsmith standard.
							</li>
						</ul>
					</div>

					<div>
						<h1>🌺 Customer Promise</h1>

						<p>
							At Scentsmith, every customer is part of our fragrance family.
							We’re committed to giving you{' '}
							<b> an experience that feels as luxurious as our scents smell </b>{' '}
							— from browsing to unboxing.
						</p>
						<p>
							Because we don’t just sell perfume —{' '}
							<b> we craft emotions, confidence, and connection </b> in every
							drop.
						</p>
					</div>
				</Styles.HeroReasonContainer>
				<Styles.HeroNewsContainer>
					<h1>Join the Scentsmith Circle</h1>
					<small>
						Be the first to know about new arrivals, offers, and scent secrets.
					</small>
					<p>
						Subscribe to our fragrance family and enjoy exclusive rewards, sneak
						peeks, and personalized scent
					</p>
					<form>
						<input type='text' name='email' placeholder='Your email address' />
						<button>Subscribe</button>
					</form>
				</Styles.HeroNewsContainer>
			</div>
		</div>
	);
};

export default Hero;
