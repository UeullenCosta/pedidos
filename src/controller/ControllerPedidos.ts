import { Request, Response} from "express"
import { ClienteService } from "../services/ClienteService"



export class ClienteController{
    service: ClienteService
    constructor(sevice = new ClienteService()){
        this.service = sevice
    }
    //createPedido = (id: string, nome: string, status: string, end: string, telefone: string) => {
    createPedido = async(request:Request, response: Response) => {
        const pedido = request.body
        let status = true
        for(let i in pedido){
            if(!pedido[i]){
                console.log("todos os campus são obrigatórios");
                response.status(400).json({mensagem: "todos os campus obrigatorios"})
                status = false
            } 
        }
        if(status){
            this.service.setPedido(pedido.id, pedido.nome, pedido.status, pedido.end, pedido.telefone,);
            response.status(201).json({mensagem: 'pedido criado'})
            console.log("pedido enviado");
        }
    }
    retornaPedido = (request: Request, response: Response) => {
        this.service.getPedido()
        response.status(200).json({mensagem: 'printado'})
        
       
    }
}