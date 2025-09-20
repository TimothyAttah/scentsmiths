import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/generateToken.js';

export const authControllers = {
	registerUser: async (req, res) => {
		const userData = req.body;
		const { name, email, password } = userData;
		if (!name || !email || !password)
			return res.status(404).json({ msg: 'Please fill in all fields' });

		const user = await User.findOne({ email });

		if (user)
			return res
				.status(404)
				.json({ msg: 'User with that email already exists' });

		const hashedPassword = await bcrypt.hash(password, 12);

		try {
			const user = await new User({
				name,
				email,
				password: hashedPassword,
			});
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: '30d',
			});

			await user.save();
			user.password = undefined;
			res
				.status(200)
				.json({ msg: 'User successfully signed up.', data: user, token });
		} catch (err) {
			res.status(500).json({ err: err.message });
		}
	},

	loginUser: async (req, res) => {
		try {
			const { email, password } = req.body;
			if (!email || !password)
				return res.status(404).json({ msg: 'Please fill in all fields' });

			const user = await User.findOne({ email });

			if (!user)
				return res
					.status(400)
					.json({ msg: 'The user with this email does not exist.' });

			const confirmPassword = await bcrypt.compare(password, user.password);

			if (!confirmPassword)
				return res.status(400).json({ msg: 'Incorrect password' });

			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: '30d',
			});
			user.password = undefined;

			// const dataDetails = {
			// 	user,

			// }

			return res
				.status(200)
				.json({ msg: 'Login successfully!!!', data: user, token });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	getUserProfile: async (req, res) => {
		try {
			const user = await User.findById(req.user._id);

			user.password = undefined;

			if (user) {
				return res
					.status(200)
					.json({ msg: 'User profile successfull!!!', data: user });
			} else {
				return res.status(400).json({ msg: 'User not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Update user profile
	// @route PUT /api/auth/profile/id
	// @access Private
	updateUserProfile: async (req, res) => {
		try {
			const user = await User.findById({ _id: req.user._id });

			if (user) {
				user.name = req.body.name || user.name;
				user.email = req.body.email || user.email;
				if (req.body.password) {
					user.password = req.body.password;
				}

				const updatedUser = await user.save();

				const token = jwt.sign(
					{ _id: updatedUser._id },
					process.env.JWT_SECRET,
					{
						expiresIn: '30d',
					},
				);

				const newUpdatedUser = {
					_id: updatedUser._id,
					name: updatedUser.name,
					email: updatedUser.email,
					isAdmin: updatedUser.isAdmin,
					token,
				};

				return res
					.status(200)
					.json({ msg: 'User updated successfully!!!', data: newUpdatedUser });
			} else {
				return res.status(400).json({ msg: 'User not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Get all users
	// @route GET /api/auth/users
	// @access Private/Admin
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find({});

			return res
				.status(200)
				.json({ msg: 'User updated successfully!!!', data: users });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Delete user
	// @route DELETE /api/auth/users/:id/delete
	// @access Private/Admin
	deleteUser: async (req, res) => {
		try {
			const user = await User.findByIdAndDelete(req.params.id);

			if (user) {
				// await user.remove();
				return res
					.status(200)
					.json({ msg: 'User deleted successfully!!!', data: user });
			} else {
				return res.status(404).json({ msg: 'User not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
	// @desc Get user by id
	// @route GET /api/auth/users/:id
	// @access Private/Admin
	getUserById: async (req, res) => {
		try {
			const user = await User.findById(req.params.id).select('-password');

			if (user) {
				// await user.remove();
				return res
					.status(200)
					.json({ msg: 'A user gotten successfully!!!', data: user });
			} else {
				return res.status(404).json({ msg: 'User not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Update user
	// @route PUT /api/auth/users/:id
	// @access Private/Admin
	updateUser: async (req, res) => {
		try {
			const user = await User.findById(req.params.id);

			if (user) {
				user.name = req.body.name || user.name;
				user.email = req.body.email || user.email;
				user.isAdmin = req.body.isAdmin || user.isAdmin

				const updatedUser = await user.save();



				const newUpdatedUser = {
					_id: updatedUser._id,
					name: updatedUser.name,
					email: updatedUser.email,
					isAdmin: updatedUser.isAdmin,

				};

				return res
					.status(200)
					.json({ msg: 'User updated successfully!!!', data: newUpdatedUser });
			} else {
				return res.status(400).json({ msg: 'User not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};

