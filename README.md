# API RESTful para Banco Digital
Este projeto consiste em uma API RESTful completa para gerenciar contas bancárias em um banco digital fictício, implementado em Node.js e utilizando um banco de dados em memória. A API oferece diversas funcionalidades, como:

- Criar contas bancárias.
- Listar contas bancárias.
- Atualizar dados do usuário de uma conta.
- Excluir contas bancárias.
- Realizar depósitos.
- Sacar dinheiro.
- Transferir valores entre contas.
- Consultar saldo.
- Obter extrato bancário.

### Pré-requisitos

- Node.js instalado.
- Editor de código de sua preferência (Ex: Visual Studio Code).

### Instalação: 
1. Clone o repositório para o seu computador: </br>
`git clone`

2. Acesse a pasta do projeto: </br>
`cd 'nome da pasta da api'`

3. Instale as dependências do projeto: </br>
`npm install init -y` </br>
`npm install express`  # [documentação da biblioteca](https://www.npmjs.com/package/express). </br>
`npm install -D nodemon` # [iniciando como dependência de desenvolvimento - documentação](https://www.npmjs.com/package/nodemon?activeTab=readme). </br>
`npm install date-fns --save` #[documentação](https://www.npmjs.com/package/date-fns). </br>
`npm install dotenv --save` #[documentação](https://www.npmjs.com/package/dotenv#-install). </br>

### Para executar a API: </br> </br>

`npm start` ou  `npm run dev` </br>

1. A API estará disponível na porta 3000. Você pode testar as funcionalidades da API utilizando ferramentas como Postman ou Insomnia.

### Documentação da API:

A documentação detalhada da API, incluindo descrições de endpoints, métodos HTTP, parâmetros, status codes e exemplos de requisições e respostas. Para acessá-la:
`http://localhost:3000/contas` </br>

### Funcionalidades da API Banco Digital: </br>
  1. **Criar Contas Bancárias:**
- Permite a criação de novas contas bancárias para clientes, atribuindo um número de conta único e definindo os dados do usuário (nome, CPF, data de nascimento, telefone, email e senha). </br>

### quando ja existe uma conta ou com nome, CPF, data de nascimento, telefone, email e senha existente.
 ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/a62e59cc-508d-489f-9038-1ed8e756b6be) </br>
 ### quando a conta é criada.
 ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/d7c5458b-48a3-4439-8a9f-7a21474f79a9)

  2. **Listar Contas Bancárias:**
- Permite visualizar a lista de todas as contas bancárias existentes, incluindo informações básicas como número da conta, nome do titular e saldo. Informando na url a senha como parametro, a senha estando correta em seguida mostra a lista de contas bancarias. </br>
    ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/ba0d27cc-8849-429d-8656-5fb3b0424068) </br>
    
  3. **Atualizar Dados do Usuário:**
- Permite a atualização dos dados cadastrais do usuário de uma conta bancária, como nome, CPF, data de nascimento, telefone, email e senha.
- é necessario preencher todos os campos. 
- verifica se tem conta com o numero solicidado na requisição.
- conta atualizada. </br>
 ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/23849811-1b8e-4e5b-ac4d-e52026317bd3) </br>
 ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/06b57f1c-cd5a-486a-87ac-629866c51d77) </br>
 ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/ff48d418-3b6d-4be6-9694-1612c1591ada)


  4. **Excluir Contas Bancárias:**
- Permite a exclusão de uma conta bancária, desde que o saldo seja zero. </br>

![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/b6db3888-5f17-4816-a5d2-ff363534f227) </br>
![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/1bb437aa-6472-4b39-9ff7-08baf64a7824)

   5. **Realizar Depósitos:**
- Permite a realização de depósitos em dinheiro em uma conta bancária, incrementando o saldo da conta. </br>
  ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/641d9838-f56c-4c30-9d93-97cd286586cb)</br>


  6. **Sacar Dinheiro:**
- Permite a realização de saques em dinheiro de uma conta bancária, decrementando o saldo da conta, desde que o valor seja positivo e o saldo seja suficiente. </br>
![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/b7839dbf-2820-43bd-b3a6-182122f55c96) </br>
![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/14e0ea84-e0d3-4d64-a488-186472d28d76) </br>
![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/edf0c39a-9cef-4d0f-9e87-5a7d1072b399) </br>

  7. **Consultar Saldo:**
- Permite a consulta do saldo atual de uma conta bancária.
  ### numero da conta não encontrada. </br>
  ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/a99a2a81-4ae2-4e13-8baf-f15468131b58) </br>
  ![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/dda9a662-3adc-4079-98c0-c398760c92d0)


  9. **Obter Extrato Bancário:**
- Permite a consulta do histórico de transações (depósitos, saques e transferências) de uma conta bancária em um determinado período.
![image](https://github.com/ThalitaBastos01/API-RESTful-para-Banco-Digital/assets/142093242/523b7900-68ef-41a4-87d0-494e35fee259) </br>


### Observações:

Sinta-se à vontade para contribuir com este projeto! Envie suas sugestões, correções de bugs ou novas funcionalidades através de pull requests.

#### Agradecimentos:

Ao time da CUBOS pela oportunidade de desenvolver este projeto! </br>
Esperamos que este projeto seja útil para você!

