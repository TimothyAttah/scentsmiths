import * as Styles from './AboutUsStyles';
import aboutPix1 from '../../assets/about1.png';
import LazyImage from '../../components/LazyImage';
import { ReactLenis } from 'lenis/react';
import Copy from '../../components/copyText/CopyText';

const AboutUs = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.AboutUsHero>
					<LazyImage src={aboutPix1} />
					<Styles.BlendModeTitle>
						🌸 About Us | Scentsmith
					</Styles.BlendModeTitle>
				</Styles.AboutUsHero>
				<Styles.CultureInfo>
					<Copy delay={0.5}>
						<h4>The Art of Scent-Making. The Essence of Identity.</h4>
					</Copy>

					<Copy delay={0.5}>
						<p>
							At <b>Scentsmith</b>, we believe that fragrance is more than just
							a pleasant aroma — it’s a reflection of who you are.
						</p>
						<p>
							Our name comes from the idea of a craftsman, a “smith,” who forges
							something timeless and beautiful.
						</p>
						<p>
							Just as a goldsmith shapes beauty from metal, a <b>Scentsmith</b>{' '}
							shapes emotion through fragrance.
						</p>
					</Copy>
				</Styles.CultureInfo>

				<Styles.AboutUsContainer>
					<div>
						<h1>🌿 Our Story</h1>
						<p>
							Scentsmith was founded with one purpose —{' '}
							<b>
								{' '}
								to make the art of fine perfumery accessible to everyone who
								values elegance and authenticity.{' '}
							</b>
						</p>
						<p>
							Born from a passion for scent and craftsmanship, we set out to
							create a perfume brand that blends luxury,{' '}
							<b> creativity, and affordability </b>
							without compromise.
						</p>
						<p>
							Every fragrance we offer is carefully curated and crafted using
							<b>
								{' '}
								premium ingredients sourced from the world’s finest perfumers.{' '}
							</b>
						</p>
						<p>
							From soft florals to deep musks, each bottle embodies a story — of
							love, confidence, adventure, and individuality.
						</p>
					</div>

					<div>
						<h1>🌹 Our Philosophy</h1>
						<p>We see perfume as personal art.</p>
						<p>
							A scent should whisper your story long after you’ve left the room.
						</p>
						<p>
							That’s why we don’t just sell perfumes —{' '}
							<b> we craft experiences. </b>
						</p>
						<p>
							Every drop is designed to evoke emotion, build confidence, and
							leave an unforgettable mark.
						</p>

						<div>
							<p>At Scentsmith, we value:</p>
							<ul>
								<li>
									<span>Authenticity:</span> 100% genuine and original
									fragrances.
								</li>
								<li>
									<span>Quality:</span> Crafted to last, from the first spray to
									the final note.
								</li>
								<li>
									<span>Individuality:</span> Because no two people smell the
									same.
								</li>
								<li>
									<span>Sustainability:</span> We’re committed to ethical
									sourcing and environmentally mindful practices.
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h1>💫 Our Mission</h1>
						<p>
							To <b> redefine the perfume experience </b>— by offering a curated
							selection of luxurious, long-lasting scents that empower every
							individual to express themselves through fragrance.
						</p>

						<p>
							We believe everyone deserves to <b> smell remarkable </b> —
							without having to break the bank.
						</p>
					</div>

					<div>
						<h1>🌺 Our Vision</h1>
						<p>
							To become a global symbol of{' '}
							<b> artistry, elegance, and authenticity </b>in fragrance —
							inspiring millions to find their signature scent and embrace the
							confidence that comes with it.
						</p>
					</div>

					<div>
						<h1>🌼 The Scentsmith Promise</h1>
						<p>
							When you choose Scentsmith, you’re not just buying a perfume —{' '}
							<br /> you’re joining a community of scent lovers who value
							quality, creativity, and self-expression.
						</p>
						<p>
							Every fragrance is a promise of{' '}
							<b> purity, beauty, and identity. </b>
						</p>
					</div>
					<h4>
						<b>Scentsmith</b> — Where every scent tells your story. 🌹
					</h4>
				</Styles.AboutUsContainer>
			</ReactLenis>
		</>
	);
};

export default AboutUs;
