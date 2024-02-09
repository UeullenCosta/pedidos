
import { banco } from "../database/databases"




const db =  banco

interface pedido {
    idPedido: string,
    nomeCl: string,
    status: string,
    endCl: string,
    telefone: string

}

export class ClienteService {
    db: pedido[]

    constructor(novoPedido = db){
        this.db = novoPedido
    }

    setPedido = (idPedido: string, nomeCl: string, status: string, endCl: string, telefone: string) => {
        const NewPedido = {
            idPedido,
            nomeCl,
            status,
            endCl,
            telefone
        }

        db.push(NewPedido)
    }
    getPedido = () => {
        console.log(db);
        
    
    }
}