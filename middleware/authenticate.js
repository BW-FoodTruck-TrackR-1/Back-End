const sessions = {};

function authenticate() {
  const authError = {
    message: "Invalid credentials",
  };

  return async (req, res, next) => {
    try {
      // double-check req.session.user exists
      if (!req.session || !req.session.user) {
        return res.status(401).json(authError);
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  sessions,
  authenticate,
};
