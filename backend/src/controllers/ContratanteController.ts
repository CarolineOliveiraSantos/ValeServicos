// import knex from "../database/connection";
import { Request, Response } from "express";

const Contratantes = require("../models/Contratantes");
const Serv = require('../models/serv_prestado');

module.exports = {
    // criar contrato
    async store(req: Request, res: Response) {
        const contratante = await Contratantes.create(req.body);
        return res.json(contratante);
    },
    // detalhe contratante
    async detalhe(req: Request, res: Response) {
        const contratanteId = req.params.id;
        const dadosContratante = await Contratantes.findOne({ _id: contratanteId });
        return res.json(dadosContratante);
    },
    // apagar contratante
    async destroy(req: Request, res: Response) {
            await Contratantes.deleteOne({ _id: req.params.id });
            return res.json({ message: "Conta removida" });            
    },
    // attualizar dadso
    async update(req: Request, res: Response) {
        const contratante = await Contratantes.findByIdAndUpdate(req.params.id, req.body, {
            new: true
          });
      
          return res.json(contratante);
    }
};

