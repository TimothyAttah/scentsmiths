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
			closeSidebar && closeSidebar()
		} else {
			navigate('/');
		}
	};
	return (
		<div>
			<Form
				onSubmit={submitHandler}
				className='flex flex-row'
				style={{ display: 'flex' }}>
				<Form.Control
					type='text'
					name='q'
					onChange={(e) => setKeyword(e.target.value)}
					placeholder='Serch Products...'
					className='mr-sm-2 ml-sm-5'></Form.Control>
				<Button type='submit' variant='outline-success' className='p-2 ' onClick={closeSidebar}>
					Search
				</Button>
			</Form>
		</div>
	);
};

export default SearchBox