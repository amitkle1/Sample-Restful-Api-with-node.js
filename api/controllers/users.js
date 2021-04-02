module.exports = {
  signUp: (req, res) => {
    res.status(200).json({
      message: "Signup",
    });
  },
  login: (req, res) => {
    res.status(200).json({
      message: "Now login",
    });
  },
};
