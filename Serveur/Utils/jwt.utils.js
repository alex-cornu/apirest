var jwt = require("jsonwebtoken");

const JWT_SIGN_SECRET = "ptH7BRygB5rSYFrDZOuzM3kU2nVzLG";
module.exports = {
  generateTokenForUsers: function (userData) {
    return jwt.sign(
      {
        usersId: userData.id,
        isAdmin: userData.isAdmin,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "1H",
      }
    );
  },
};
