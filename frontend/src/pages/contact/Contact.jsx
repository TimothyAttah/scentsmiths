import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import * as Styles from './ContactStyles';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { toast } from 'react-toastify';

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_9zpzp0h', 'template_hljrqhr', form.current, {
				publicKey: 'eR3lwt8AISzVJs0uc',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					toast.success('Message sent successfully');
					setName('');
					sendEmail('');
					setSubject('');
					setMessage('');
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error('Message sent successfully');
				},
			);
	};

	return (
		<Styles.ContactContainer>
			<Styles.ContactHero>
				<h1>Get In Touch With Us</h1>
				<p>
					At scentsmith, we believe that strong partnerships begin with open
					communication. Whether you are seeking expert consultation, requesting
					a service, or simply exploring how we can support your operations, our
					team is ready to assist you.
				</p>
				<p>
					We are committed to providing timely, reliable, and professional
					responses to every inquiry. Your goals are our priority, and we ensure
					that every conversation moves you closer to safe, efficient, and
					sustainable solutions.
				</p>
			</Styles.ContactHero>
			{/* <Styles.ContactSubLinks>
				<h2>How We Can Help You</h2>
				<ul>
					<li>
						Learn more about our
						<Link>Chemical Supply & Treatments</Link>
					</li>
					<li>
						Explore our
						<Link>Gas Compression Services</Link>
					</li>
					<li>
						Discuss
						<Link>Pipeline Construction & Maintenance</Link> projects
					</li>
					<li>
						Request guidance on
						<Link>Health, Safety, and Environmental Consultancy</Link>
					</li>
					<li>
						Or simply reach out for
						<Link> tailored energy solutions</Link>
					</li>
				</ul>
			</Styles.ContactSubLinks> */}
			<Styles.ContactWrapper>
				<Styles.ContactInfo>
					<h2>Get in Touch</h2>
					<Styles.ContactInfoList>
						<h4>📍 Head Office:</h4>
						<p>Lagos, Nigeria</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>📞 Phone:</h4>
						<p>+2349055201988</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>📧 Email:</h4>
						<p>adenugatemitope52@gmail.com</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>🕒 Office Hours:</h4>
						<p>Monday – Friday: 9:00 AM – 5:00 PM</p>
						<p>Saturday: 10:00 AM – 2:00 PM</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoLinks>
						<h2>Stay Connected</h2>
						<p>
							Follow us on our digital platforms to keep up with our latest
							projects, innovations, and industry insights.
						</p>
						<Styles.ContactInfoLinksWrapper>
							<Link>
								<FaFacebook />
							</Link>
							<Link>
								<FaInstagram />
							</Link>
							<Link>
								<FaTwitter />
							</Link>
						</Styles.ContactInfoLinksWrapper>
					</Styles.ContactInfoLinks>
				</Styles.ContactInfo>

				<Styles.ContactForm>
					<h2>Quick Contact Form</h2>
					<p>
						Have a question? Send us a message, and our team will get back to
						you shortly.
					</p>
					<form ref={form} onSubmit={sendEmail}>
						<div>
							<label htmlFor=''>Name</label>
							<input
								type='text'
								name='name'
								onChange={(e) => setName(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Email:</label>
							<input
								type='text'
								name='email'
								onChange={(e) => setEmail(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Subject:</label>
							<input
								type='text'
								name='subject'
								onChange={(e) => setSubject(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Message:</label>
							<textarea
								name='message'
								onChange={(e) => setMessage(e.target.name)}
								required
							/>
						</div>
						<button>Send Message</button>
					</form>
				</Styles.ContactForm>
			</Styles.ContactWrapper>
			<div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5709.180640965898!2d3.3524680766177375!3d6.660143021203511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b940e901f9283%3A0x98feb9694dbb3be0!2sUnited%20Estate%20%26%20Alagbole%20Rd%2C%20Ojodu%2C%20Ajuwon%2FAkute%20112107%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1755579832780!5m2!1sen!2sng'
					// width='800'
					height='600'
					style={{ border: '0', width: '100%' }}
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</Styles.ContactContainer>
	);
};

export default Contact;
