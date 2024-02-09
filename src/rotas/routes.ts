import { Router } from "express";
import { ClienteController } from "../controller/ControllerPedidos";

export const routes = Router()

const cliente = new ClienteController()

routes.get('/pedido', cliente.retornaPedido)
routes.post('/pedido', cliente.createPedido)
routes.put('/mensgem')
routes.delete('/pedido')