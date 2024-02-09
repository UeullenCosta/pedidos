import express, {Request, Response} from 'express'
import { routes } from './rotas/routes';


const server = express();
server.use(express.json());
server.use(routes)


server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({mensagem: "ta que pariu doido"})
});




server.listen( 8080, () => {
    console.log('express on');
    
});

