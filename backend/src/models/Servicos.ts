const { Schema, model } = require("mongoose");

const ServicoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    info: {
        type: String,
        required: true
    },
  },
  {     
    timestamps: true
  }
);

module.exports = model("Servicos", ServicoSchema);