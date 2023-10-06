import { verify } from 'jsonwebtoken';
import { jwtKey } from '../constants';
function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract token from headers

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decodedToken = verify(token, jwtKey);
    req.user = decodedToken; // Attach the decoded token payload to the request object
    next(); // Proceed to the next middleware/route
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token',message: error });
  }
}

export default authenticateToken;
