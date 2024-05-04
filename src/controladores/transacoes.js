const { contas, saques, depositos, transferencias } = require('../bancodedados');
const { format } = require('date-fns');

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    //Verificar se o numero da conta e o valor do deposito foram informados no body e Verificar se a conta bancária informada existe
    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios!' });
    }

    const numeroDaConta = contas.find((contaBancaria) => {
        return contaBancaria.numero === numero_conta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: 'Conta não encontrada!' });
    }

    //não permitir depósitos com valores negativos ou zerados
    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Não é permitido depósitos com valores zerados!' });
    }

    //Somar o valor de depósito
    numeroDaConta.saldo += Number(valor);

    const registroDoDeposito = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numero_conta,
        valor
    };

    depositos.push(registroDoDeposito);
    res.status(201).send();
};

const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    //Verificar se o numero da conta, o valor do saque e a senha foram informados no body
    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ mensagem: "O preenchimento de todos os campos são obrigatorios!" });
    }

    const numeroDaConta = contas.find((conta) => {
        return conta.numero === numero_conta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: "Conta não encontrada" }); //verificação da existencia da conta
    }

    if (numeroDaConta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha invalida!" }); //verificando se senha é valida
    }

    if (numeroDaConta.saldo < valor) {
        return res.status(403).json({ mensagem: "Saldo insuficiente" }); // verificando se há saldo suficiente para saque
    }

    numeroDaConta.saldo -= Number(valor); //saque

    const registroDoSaque = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numero_conta,
        valor
    }

    saques.push(registroDoSaque);
    res.status(200).send();

}

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({ mensagem: 'O preenchimento de todos os campos são obrigatórios!' });
    }//verificando se esses dados foram informados no body

    const contaOrigem = contas.find((contaBancaria) => {
        return contaBancaria.numero === Number(numero_conta_origem);
    }); // verificando a existencia da conta de origem 

    if (!contaOrigem) {
        return res.status(404).json({ mensagem: 'Número da conta de origem inválido!' });
    }

    const contaDestino = contas.find((contaBancaria) => {
        return contaBancaria.numero === Number(numero_conta_destino);
    }); //verificando se a conta de destino existe 

    if (!contaDestino) {
        return res.status(404).json({ mensagem: 'Número da conta de destino inválido!' });
    }

    if (contaOrigem.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida!' });
    }// verificação da senha 

    if (contaOrigem.saldo < valor) {
        return res.status(403).json({ mensagem: 'Saldo insuficiente para concluir essa transferência!' });
    } //verificando saldo para transferencia

    //transferencia
    contaOrigem.saldo -= Number(valor);
    contaDestino.saldo += Number(valor);

    const registroDaTransferencia = {
        data: format(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        numero_conta_origem,
        numero_conta_destino,
        valor,
        senha
    };

    transferencias.push(registroDaTransferencia);
    res.status(201).send();
};

module.exports = {
    depositar,
    sacar,
    transferir
}