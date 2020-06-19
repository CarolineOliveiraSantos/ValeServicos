const Contratante = require("../models/Contratante");

module.exports = {
  async store(req, res) {
    const { cpf } = req.body;

    const user = await Contratante.findOne({ cpf })

    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }
    const { _id, nome } = user;

    return res.json({
      user: { _id, nome},
      token: Contratante.generateToken(user)
    });
  }
};