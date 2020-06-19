const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const ContratanteSchema = new Schema(
  {
    nome: {
        type: String,
        required: true
      },
      cpf: {
          type: String,
          required: true,
      },
      telefone: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true,
    },
     uf: {
        type: String,
        required: true,
    },
  },
  {     
    timestamps: true
  }
);
ContratanteSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};

module.exports = model("Contratantes", ContratanteSchema);