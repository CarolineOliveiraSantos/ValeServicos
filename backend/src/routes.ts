import express from "express";
import { Router } from "express";

const routes = Router();
import multer from "multer";
import { Joi, celebrate } from "celebrate";
// import multerConfig from "../src/config/multer";

const PrestadorController = require("./controllers/PrestadorController");
const ServicosController = require("./controllers/ServicoController");
const ContratanteController = require("./controllers/ContratanteController");
const ContratosController = require("./controllers/ContratosController");


const authMiddleware = require("./middlewares/auth");

// const upload = multer(multerConfig);

//PRESTADOR

//cadastrar prestador de servico
routes.post(
  "/criarPrestador",
  // upload.single("img"),
  celebrate(
    {
      body: Joi.object().keys({
        cpf: Joi.string().required(),
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required(),
        telefone: Joi.string().required(),
        sobre: Joi.string().required(),
        referencia: Joi.string().required(),
        servicos: Joi.string().required(),
        img_url: Joi.string().required(),
        descricao: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  PrestadorController.create
);
//Editar prestador
routes.put(
  "/editarPrestador/:id",
  // upload.single("img"),
  celebrate(
    {
      body: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required(),
        telefone: Joi.string().required(),
        sobre: Joi.string().required(),
        referencia: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  PrestadorController.update
);
// mostrar dados do prestador
routes.get("/prestador/:id", PrestadorController.show);
//apagar prestador
routes.delete("/prestadorDeletar/:id", PrestadorController.delete);
//mostrar detalhes do prestador
routes.get("/prestadorDetalhe/:id", PrestadorController.detalhe);
//Listar Prestador por cidade
routes.get("/prestadorCity/", PrestadorController.index);
//Listar Todods os prestadores
routes.get("/prestadoresAll/", PrestadorController.indexx);

// SERVIÇOS

//listar serviços
// routes.get("/servicos", ServicosController.index);
//mostrar um serviço
// routes.get("/servicos/:id", ServicosController.show);
//Editar um serviço do prestador
routes.put("/servicosEditar/:id", ServicosController.update);

//contratantes
//cadastrar prestador de servico
routes.post(
  "/criarContratante",
  celebrate(
    {
      body: Joi.object().keys({
        cpf: Joi.string().required(),
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required(),
        telefone: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  ContratanteController.create
);
// ver detalhe do contratante
routes.get("/contratanteMostrar/:id", ContratanteController.detalhe);
// editar contratante
routes.put(
  "/editarContratante/:id",
  celebrate(
    {
      body: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required(),
        telefone: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  ContratanteController.update
);
//listar dados do contratante
routes.get("/contratanteDados/:id", ContratanteController.show);

//apagar contratante
routes.delete("/contratanteDeletar/:id", ContratanteController.delete);

// CONTRATOS
//efetuar contrato
routes.post(
  "/efetuarContrato",
  celebrate(
    {
      body: Joi.object().keys({
        data: Joi.string().required(),
        email: Joi.string().required().email(),

        contratante_id: Joi.number().required(),
        servico_id: Joi.number().required(),
        prestador_id: Joi.number().required(),
        rua: Joi.string().required(),
        numero: Joi.string().required(),
        longitude: Joi.number().required(),
        latitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  ContratosController.create
);
//editar contrato
//CONTRATANTE
routes.put(
  "/editarContratoContratante/:id",
  celebrate(
    {
      body: Joi.object().keys({
        data: Joi.string().required(),
        email: Joi.string().required().email(),
        avaliacao: Joi.string(),
        rua: Joi.string().required(),
        numero: Joi.string().required(),
        longitude: Joi.number().required(),
        latitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  ContratosController.updateC
);
//PRESTADOR
routes.put(
  "/editarContratoPrestador/:id",
  celebrate(
    {
      body: Joi.object().keys({
        data: Joi.string().required(),
        status: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  ContratosController.updateP
);
//Ver contrato por id do contratante
routes.get("/verContrato/:id", ContratosController.show);

export default routes;
