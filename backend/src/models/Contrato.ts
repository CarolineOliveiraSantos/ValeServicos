const { Schema, model } = require("mongoose");

const ContratoSchema = new Schema(
  {
    data: {
        type: Date,
        required: true
      },
      status: {
          type: String,
          required: true,
      },
      avaliacao: {
        type: Number,
        required: true
      },
      contratante_Id: {
        type: Schema.Types.ObjectId,
        ref: "Contratantes"
      },   
      servico_Id: {
        type: Schema.Types.ObjectId,
        ref: "Serv_prestado"
      },   
      prestador_Id: {
        type: Schema.Types.ObjectId,
        ref: "Prestadores"
      },
      rua: {
        type: String,
        required: true
      }, 
      numero: {
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
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    }
  },
  {     
    timestamps: true
  }
);



module.exports = model("Contratos", ContratoSchema);