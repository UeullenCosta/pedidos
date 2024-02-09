# pedidos
##api de pedidos:
Projeto em Noje.js e Typescript
para iniciar o projeto é preciso ter instalado em sua maquina o Node.js e o Typescript.
instale a pasta node_modules com o comanddo // npm init

O projeto ultiliza as seguites bibliotecas:
*Express


#Sobre o projeto:
A api fará uma conexão simples entre o cliente e o banco de dados.
Teremos um usurário cliente e um usuário restaurante (admin)

## Usuário Cliente:
Não será nesseçário login
O clinte envia as informações via formulário // futuramente será implementado um cardapio e uma formulário para as informações de entrega
informações:
    *NOME
    *ENDEREÇO
    *PEDIDO
    *TELEFONE
*obs: no estado atual da aplicação o cliente ainda informa o id e status porém com a implementação do banco de dados estes campus serão gerados automaticamente.

##Usuário Restaurante:
O usuário restaurante recebe as informações do pedido e consegue alterar os status do pedido alteralo ou até deletalo.
Basicamente o usuário restaurante irá apenas modificar os status do pedido com isso o cliente pode acompanhar o status do seu pedido
ex:
Status_Pedido: "em produção"/ "pronto aguardando entregador" / "saiu para entrega"

