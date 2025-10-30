import {
	BiCart,
	BiSearch,
	BiHome,
	BiUserCircle,
	BiInfoCircle,
	BiPhone,
	BiCategory,
} from 'react-icons/bi';

export const leftDesktopNavData = [
	{
		linkTitle: 'Home',
		linkIcon: BiHome,
		linkPath: '/',
	},
	{
		linkTitle: 'About Us',
		linkIcon: BiInfoCircle,
		linkPath: '/about-us',
	},
	{
		linkTitle: 'Products',
		linkIcon: BiCategory,
		linkPath: '/products',
	},
	{
		linkTitle: 'Contact',
		linkIcon: BiPhone,
		linkPath: '/contact',
	},
];

export const rightDesktopNavData = [
	{
		linkTitle: 'Search',
		linkIcon: BiSearch,
		linkPath: '#',
		linkSearch: true,
	},
	{
		linkTitle: 'Profile',
		linkIcon: BiUserCircle,
		linkPath: '/profile',
	},
	{
		linkTitle: 'Cart',
		linkIcon: BiCart,
		linkPath: '/cart',
		cartNum: 0,
	},
];
