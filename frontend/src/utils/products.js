import airpods from '../assets/airpods.jpg'
import alexa from '../assets/alexa.jpg';
import camera from '../assets/camera.jpg';
import mouse from '../assets/mouse.jpg';
import phone from '../assets/phone.jpg';
import playstation from '../assets/playstation.jpg'



const products = [
	{
		_id: '1',
		name: 'Lavender Veil',
		image: airpods,
		description:
			' Lavender Veil is a serene, elegant composition that envelopes your space in the calming essence of pure French lavender. Layered with the airy softness of white musk and the comforting warmth of tonka bean, this scent floats gently through the air — like a lavender-scented breeze at dusk',
		brand: 'Apple',
		category: 'Electronics',
		price: '28,000',
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '2',
		name: 'Golden Dusk',
		image: phone,
		description:
			'A radiant blend of bergamot and sweet orange opens the air with fresh optimism, gently descending into a heart of amber and vanilla. The base of sandalwood and white musk grounds the scent with smooth, lasting warmth',
		brand: 'Apple',
		category: 'Electronics',
		price: '28,000 ',
		countInStock: 7,
		rating: 4.0,
		numReviews: 8,
	},
	{
		_id: '3',
		name: 'Enchanted Rosewood ',
		image: camera,
		description:
			'A refined blend where delicate rose petals and a spark of pink pepper open into a heart of geranium and oud, creating an alluring floral-woody harmony. The fragrance deepens into a warm, sensual base of patchouli and amber, casting a golden glow that lingers with elegance.',
		brand: 'Cannon',
		category: 'Electronics',
		price: '28,000 ',
		countInStock: 5,
		rating: 3,
		numReviews: 12,
	},
	{
		_id: '4',
		name: 'Velvet drive ',
		image: playstation,
		description: [
			' Experience the art of refined travel with Velvet Drive, a luxury car diffuser crafted for those who appreciate sophistication in motion.',
			'The journey begins with the crisp brightness of bergamot and the subtle spice of pink pepper, leading into an aromatic heart of lavender and cedarwood. Finally, a deep, grounding base of patchouli and amber lingers, leaving a warm, elegant trail that transforms every drive into a statement.',
			'Ideal for: Drivers who want their car to feel as luxurious as their destination.',
		],

		brand: 'Sony',
		category: 'Electronics',
		price: '30,000 ',
		countInStock: 11,
		rating: 2.5,
		numReviews: 12,
	},
];

export default products;
