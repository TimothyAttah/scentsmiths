import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = (req, res, next) => {

  const { authorization } = req.headers;
  if (!authorization)
    return res.status(403).json({ msg: 'Unauthorized User. Permission Denied.' })

  const token = authorization.replace('Bearer ', '')
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
		if (err)
			return res.status(403).json({ msg: 'Unathorized User. Request Denied' });

		const { _id } = payload;

		const userData = await User.findById(_id);
		req.user = userData;
		next();
	});
};

export const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next()
	} else {
		return res.status(401).json({ msg: 'Not authorized as an admin' });
	}
}