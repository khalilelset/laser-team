const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { id: user._id, email: user.email },
    "jwtsecretplschange"
  );
  return accessToken;
};

module.exports = { createTokens };
