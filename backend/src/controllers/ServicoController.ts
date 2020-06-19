// import knex from "../database/connection";
import { Request, Response } from "express";

// import Servicos from "../models/servico";
const Servicos = require('../models/Servicos');

module.exports = {
    async store(req: Request, res: Response) {
        const servico = await Servicos.create(req.body); 
        return res.json(servico);
   
    },
    async list(req: Request, res: Response) {
        const servicos = await Servicos.findAll()
        return res.json(servicos);
      },
    async detalhe(req: Request, res: Response) {
        const servicoId = req.params.id;

        const dadoServico = await Servicos.findOne({ _id: servicoId });
        return res.json(dadoServico);

    }

};
