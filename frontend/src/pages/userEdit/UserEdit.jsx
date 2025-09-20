import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { getUserByIdDetails } from '../../redux/actions/userActions';
import FormContainer from '../../components/FormContainer';

const UserEdit = () => {
  const { id } = useParams();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const dispatch = useDispatch();

  const userDetailsById = useSelector((state) => state.userDetailsById);
	const { loading, error, user } = userDetailsById;


  useEffect(() => {
    dispatch(getUserByIdDetails(id));
  },[id])

  useEffect(() => {
    if (!user?.name || user?._id !== id) {
      dispatch(getUserByIdDetails(id))
    } else {
      setName(user?.name)
      setEmail(user?.email);
      setIsAdmin(user?.isAdmin);

    }
  }, [user]);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Link to='/admin/userlist' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit User</h1>

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}></Form.Control>
						</Form.Group>

						<Form.Group controlId='email'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}></Form.Control>
						</Form.Group>

						<Form.Group controlId='isAdmin'>
							<Form.Check
                    type='checkbox'
                    label='Is Admin'
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
						</Form.Group>
						<Button type='submit' variant='primary'>
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default UserEdit;
