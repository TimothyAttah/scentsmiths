import * as Styles from './MobileNavStyles';
import { leftDesktopNavData } from '../../utils/navData';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../header/NewHeader';

const showAnimation = {
	hidden: {
		opacity: 0,
		x: 100,
		transition: {
			duration: 1.25,
			type: 'tween',
			delay: 0.2,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.25,
			type: 'tween',
			delay: 0.2,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
};

const MobileNav = ({ setShowMobileSidebar }) => {
	const closeSidebar = () => {
		setShowMobileSidebar(false);
		scrollToTop();
	};
	return (
		<Styles.MobileNavWrapper
			variants={showAnimation}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<Styles.ListItems>
				{leftDesktopNavData.map((item, i) => (
					<Link key={i} to={item.linkPath} onClick={closeSidebar}>
						<li>
							<span>{item.linkIcon}</span> <span>{item.linkTitle}</span>
						</li>
					</Link>
				))}
			</Styles.ListItems>
		</Styles.MobileNavWrapper>
	);
};

export default MobileNav;
