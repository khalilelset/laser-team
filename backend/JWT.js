const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies && req.cookies["access-token"];
  if (!accessToken) {
    return res.status(400).json({ error: "User Not Authenticated!" });
  }
  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET_KEY);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

//GET TOKEN PAYLOAD
// const getTokenPayload = (token) => {
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     return payload;
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return null;
//   }
// };

// const extractIdAndEmailFromToken = (token) => {
//   const payload = getTokenPayload(token);
//   if (payload) {
//     const { id, email } = payload;
//     return { id, email };
//   } else {
//     return null;
//   }
// };

// const profile = (req, res) => {
//   const token = req.cookies && req.cookies["access-token"];
//   const userInfo = extractIdAndEmailFromToken(token);
//   if (userInfo) {
//     const { id, email } = userInfo;
//     console.log("_id:", id);
//     console.log("email:", email);
//     res.status(200).json({ id: id, email: email });
//   } else {
//     console.log("Invalid or expired token");
//     res.status(400).json({ error: "Something wrong" });
//   }
// };

module.exports = { createTokens, validateToken };
