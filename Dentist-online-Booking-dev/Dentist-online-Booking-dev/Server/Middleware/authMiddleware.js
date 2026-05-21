const jwt = require("jsonwebtoken")

const protect = async (req, res, next) => {
  try {
    let token
     //Check that the token is present in the headers & starts wiz Bearer 
     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

     // Extract the token by splitting it from the Bearer
      token = req.headers.authorization.split(" ")[1] 
    }

   // Reject access if token is missing
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token provided" })
    }

    // Decode the token using the env secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

   // Store user data in req for the next controller
    req.user = {
      id: decoded.id,
      role: decoded.role
    }

    next() 
  } catch (error) {
   // Deny access if the token is invalid or expired
    return res.status(401).json({ message: "Not authorized, token failed" })
  }
}

module.exports = { protect }