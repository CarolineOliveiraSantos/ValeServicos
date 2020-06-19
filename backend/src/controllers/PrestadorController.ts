// import knex from "../database/connection";
import { Request, Response } from "express";

const Serv = require("../models/serv_prestado");
const Prestadores = require('../models/Prestadores');

module.exports = {
    // criar prestador
    async store(req: Request, res: Response) {
        const prestador = await Prestadores.create(req.body);
        const servico = await Serv.create(
            { _id: req.body.servico,
                info: req.body.servico },
            { $push: { servicos: prestador._id } }    
        );
        return res.json(prestador, servico);
    },

    // detalhe prestador
    async detalhe(req: Request, res: Response) {
        const prestadorId = req.params.id;
        const dadoPrestador = await Prestadores.findOne({ _id: prestadorId });
        return res.json(dadoPrestador);
    },
    // apagar prestador
    async destroy(req: Request, res: Response) {
            await Prestadores.deleteOne({ _id: req.params.id });
            return res.json({ message: "Conta removida" });            
    },
     // attualizar dadso
     async update(req: Request, res: Response) {
        const prestador = await Prestadores.findByIdAndUpdate(req.params.id, req.body, {
            new: true
          });
          const servico = await Serv.update(
            { _id: req.body.servico,
                info: req.body.servico },
            { $push: { servicos: prestador._id } }    
        );
      
          return res.json(prestador, servico);
    }

};

