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
- Permite a criação de novas contas bancárias para clientes, atribuindo um número de conta único e definindo os dados do usuário (nome, CPF, data de nascimento, telefone, email e senha).

  2. **Listar Contas Bancárias:**
- Permite visualizar a lista de todas as contas bancárias existentes, incluindo informações básicas como número da conta, nome do titular e saldo.

  3. **Atualizar Dados do Usuário:**
- Permite a atualização dos dados cadastrais do usuário de uma conta bancária, como nome, CPF, data de nascimento, telefone, email e senha.

  4. **Excluir Contas Bancárias:**
- Permite a exclusão de uma conta bancária, desde que o saldo seja zero.

  5. **Realizar Depósitos:**
- Permite a realização de depósitos em dinheiro em uma conta bancária, incrementando o saldo da conta.

  6. **Sacar Dinheiro:**
- Permite a realização de saques em dinheiro de uma conta bancária, decrementando o saldo da conta, desde que o valor seja positivo e o saldo seja suficiente.

  7. **Consultar Saldo:**
- Permite a consulta do saldo atual de uma conta bancária.

  9. **Obter Extrato Bancário:**
- Permite a consulta do histórico de transações (depósitos, saques e transferências) de uma conta bancária em um determinado período.
#### 

### Observações:

Sinta-se à vontade para contribuir com este projeto! Envie suas sugestões, correções de bugs ou novas funcionalidades através de pull requests.

#### Agradecimentos:

Ao time da CUBOS pela oportunidade de desenvolver este projeto! </br>
Esperamos que este projeto seja útil para você!

