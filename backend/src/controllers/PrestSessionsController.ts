const User = require("../models/Prestador");

module.exports = {
  async store(req, res) {
    const { cpf } = req.body;

    const user = await User.findOne({ cpf })

    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }
    const { _id, nome } = user;

    return res.json({
      user: { _id, nome},
      token: User.generateToken(user)
    });
  }
};