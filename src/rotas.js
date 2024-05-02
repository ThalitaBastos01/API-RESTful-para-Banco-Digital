const express = require('express');
const rotas = express();
const { contasBancaria, criarConta, atualizarContaBancaria, excluirContaBancaria, exibirSaldo, exibirExtrato } = require('./controladores/contas');

const { depositar, sacar, transferir } = require('./controladores/transacoes');


// endpoints para contas
rotas.get('/contas', contasBancaria);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarContaBancaria);
rotas.delete('/contas/:numeroConta', excluirContaBancaria);
rotas.get('/contas/saldo', exibirSaldo);
rotas.get('/contas/extrato', exibirExtrato);

// endpoints para transações
rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
rotas.post('/transacoes/transferir', transferir)


module.exports = rotas;