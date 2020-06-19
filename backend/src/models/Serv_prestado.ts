const { Schema, model } = require("mongoose");
const authConfig = require("../config/auth");
 
const ServPrestadoSchema = new Schema(
  {
    descricao: {
        type: String,
        required: true
    },
    servico_Id: {
        type: Schema.Types.ObjectId,
        ref: "Servicos"
      },   
      prestador_Id: {
        type: Schema.Types.ObjectId,
        ref: "Prestadores"
      },
  },
  {     
    timestamps: true
  }
);

module.exports = model("Serv_prestado", ServPrestadoSchema);
