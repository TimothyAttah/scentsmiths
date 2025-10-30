import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ closeSidebar }) => {
	const [keyword, setKeyword] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			navigate(`/search/${keyword}`);
			closeSidebar && closeSidebar();
		} else {
			navigate('/');
		}
	};
	return (
		<>
			<form
				onSubmit={submitHandler}
				className='flex flex-row'
				style={{ display: 'flex' }}
			>
				<input
					type='text'
					name='q'
					onChange={(e) => setKeyword(e.target.value)}
					placeholder='Serch Products...'
				/>
				<button type='submit' onClick={closeSidebar}>
					Search
				</button>
			</form>
		</>
	);
};

export default SearchBox;
