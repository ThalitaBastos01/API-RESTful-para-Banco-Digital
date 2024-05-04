const { banco, contas, saques, depositos, transferencias } = require('../bancodedados');

let gerarNumeroConta = 0;
//listando todas as contas bancarias
const contasBancaria = (req, res) => {

    const senhaBancoInformada = req.query.senha_banco;

    //verificando se a senha foi informada
    if (!senhaBancoInformada) {
        return res.status(400).json({ menssagem: "A senha do banco é obrigatoria!" });
    }

    //validando a senha
    if (senhaBancoInformada !== banco.senha) {
        return res.status(401).json({ mensagem: "Senha do banco invalida!" });
    }

    // Filtrar e retornar as contas bancárias
    const contasFiltradas = contas.filter((conta) => true);

    res.status(200).json(contasFiltradas);

};

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body; 

    //campos obrigaorios
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatorios!" });
    }

    // Validacao de CPF e email unico
    const verificacaoDeDados = contas.find((conta) => {
        return conta.usuario.email === email || conta.usuario.cpf === cpf;
    });

    if (verificacaoDeDados) {
        return res.status(400).json({ mensagem: "Já existe uma conta com o email informado!" });
    }

    //nova conta e definir com saldo inicial 0
    const novaConta = {
        numero: gerarNumeroConta++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };

    contas.push(novaConta);
    return res.status(201).send();

}

const atualizarContaBancaria = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const { numeroConta } = req.params;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatorios!" });
    }

    //Verificar se o numero da conta
    const numeroDaConta = contas.find((contaBancaria) => {
        return contaBancaria.numero === numeroConta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: "Numero da conta bancaria invalido!" });
    }

    //Se o CPF for informado
    if (cpf !== numeroDaConta.usuario.cpf) {
        const cpfExiste = contas.find((dado) => {
            return dado.usuario.cpf === cpf;
        });

        if (cpfExiste) {
            return res.status(400).json({ mensagem: 'O e-mail informado já existe no cadastro!' });
        }
    }

    //Se o email for informado
    if (email !== numeroDaConta.usuario.email) {
        const emailExiste = contas.find((dados) => {
            return dados.usuario.email === email;
        });

    // Se o email existe
        if (emailExiste) {
            return res.status(400).json({ mensagem: 'O e-mail informado já existe no cadastro!' });
        }
    }

    //Atualizar os dados do usuário
    numeroDaConta.usuario = {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha
    };

    return res.status(204).send();
}


const excluirContaBancaria = (req, res) => {
    const { numeroConta } = req.params;

    // Verificar se o numero da conta passado como parametro na URL é válido
    const numeroDaConta = contas.find((contaBancaria) => {
        return contaBancaria.numero === numeroConta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: 'Número da conta bancária inválido!' });
    }

    //Permitir excluir uma conta bancária apenas se o saldo for 0
    if (numeroDaConta.saldo > 0) {
        return res.status(403).json({ mensagem: "A conta so podera ser removida se o saldo for zero!" });
    }

    //Remover a conta
    let indiceDoUsuario = contas.indexOf(numeroDaConta);

    contas.splice(indiceDoUsuario, 1);

    return res.status(204).send();
}

const exibirSaldo = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta e a senha são obrigatórios!' });
    } //senha válida

    const numeroDaConta = contas.find((contaBancaria) => {
        return contaBancaria.numero === numero_conta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    } //verificação da conta

    if (numeroDaConta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida!' });
    }

    res.status(200).json({ saldo: numeroDaConta.saldo });
};

const exibirExtrato = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta e a senha são obrigatórios!' });
    }

    const numeroDaConta = contas.find((contaBancaria) => {
        return contaBancaria.numero === numero_conta;
    });

    if (!numeroDaConta) {
        return res.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    }

    if (numeroDaConta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida!' });
    }

    // Retornar a lista de transferências, depósitos e saques da conta em questão
    const extratoDepositos = depositos.filter((deposito) => {
        return Number(deposito.numero_conta) === Number(numero_conta);
    });

    const extratoSaques = saques.filter((saque) => {
        return Number(saque.numero_conta) === Number(numero_conta);
    });

    const transferenciasEnviadas = transferencias.filter((transferencia) => {
        return Number(transferencia.numero_conta_origem) === Number(numero_conta);
    });

    const transferenciasRecebidas = transferencias.filter((transferencia) => {
        return Number(transferencia.numero_conta_destino) === Number(numero_conta);
    });

    return res.status(200).json({
        depositos: extratoDepositos,
        saques: extratoSaques,
        transferenciasEnviadas,
        transferenciasRecebidas
    });
};

module.exports = {
    contasBancaria,
    criarConta,
    atualizarContaBancaria,
    excluirContaBancaria,
    exibirSaldo,
    exibirExtrato
}