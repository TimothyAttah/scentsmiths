import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './SidebarStyles';
import { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay';
import { FaCartPlus, FaUser } from 'react-icons/fa';

const HeaderSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState(null);

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
		setClicked(null);
	};

	const subMenuDrawer = {
		enter: {
			height: 'auto',
			overflow: 'hidden',
		},
		exit: {
			height: 0,
			overflow: 'hidden',
		},
	};
	return (
		<>
			{/* {isOpen && <Overlay onClick={() => setIsOpen(false)} />} */}
			<Styles.HeaderSidebarContainer>
				<Styles.HeaderSidebarMenuButton>
					<Hamburger
						size='18'
						// rounded
						toggled={isOpen}
						toggle={toggleSidebar}
					/>
				</Styles.HeaderSidebarMenuButton>
				<Styles.HeaderSidebarNavWrapper
					initial={{ x: '-150vw' }}
					animate={{
						x: isOpen ? '0%' : '-150vw',
					}}>
					{/* <Styles.HeaderLogo>
						<Link to='/'>
							<h1>
								scentsmith <br />
								<span>bytenii</span>
							</h1>
						</Link>
					</Styles.HeaderLogo> */}
					<Styles.HeaderDropdownWrapperMobile>
						<Link>
							<FaCartPlus />
						</Link>
						<Link>
							<FaUser />
						</Link>
					</Styles.HeaderDropdownWrapperMobile>

					<Styles.SidebarNav>
						<Link to='/'>Home Fragrances</Link>
						<Link to='/'>Car Fragrances</Link>
						<Link to='/'>Perfume</Link>
						<Link to='/contact'>Contact</Link>
					</Styles.SidebarNav>

					<Styles.InfoWrapper>
						<Styles.InfoList>
							<h4>📍 Head Office:</h4>
							<p>Lagos, Nigeria</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📞 Phone:</h4>
							<p>+2349055201988</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📧 Email:</h4>
							<p>adenugatemitope52@gmail.com</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>🕒 Office Hours:</h4>
							<p>Monday – Friday: 9:00 AM – 5:00 PM</p>
							<p>Saturday: 10:00 AM – 2:00 PM</p>
						</Styles.InfoList>
					</Styles.InfoWrapper>
					<Styles.InfoSocialLinksWrapper>
						<Styles.InfoSocialLink>
							<Link>
								<Facebook />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Twitter />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Instagram />
							</Link>
						</Styles.InfoSocialLink>
					</Styles.InfoSocialLinksWrapper>
				</Styles.HeaderSidebarNavWrapper>
			</Styles.HeaderSidebarContainer>
		</>
	);
};

export default HeaderSidebar;
