import inquirer  from 'inquirer';
import chalk from 'chalk';



inquirer.prompt([
    {
        name: 'nome',
        message: 'Escreva o seu nome completo: ',
        type: 'input',
        validate: (input) => input ? true : 'Por favor, informe o seu nome.'
    },
    {
        name: 'numero',
        message: 'Seu CPF:',
        type: 'number'
    },
    {
        name: 'idade',
        message: 'Idade: ',
        type: 'number',
        validate: value => value ? true : 'Não é permitido uma idade vazia'
    },
    {
        name: 'sexo',
        message: 'Seu sexo:',
        type: 'checkbox',
        choices: ["Feminino", "Masculino"]
    },
    {
        name: 'telefone',
        message: 'Digite seu telefone:',
        type: 'number'
    },
    {
        name: 'profissao',
        message: 'Digite sua profissao:',
        type: 'input'
    },
    {
        name: 'confirmar',
        type: 'confirm',
        message: 'Está ciente das informações do nosso formulário?'
    }
    
])

.then((answer) => {
    console.log(chalk.bgBlackBright("Confira seus dados"))
    console.log(chalk.bgBlackBright(answer.nome));    
    console.log(chalk.bgBlackBright(answer.numero));
    console.log(chalk.bgBlackBright(answer.idade));
    console.log(chalk.bgBlackBright(answer.sexo));
    console.log(chalk.bgBlackBright(answer.telefone));
    console.log(chalk.bgBlackBright(answer.profissao));
    console.log(chalk.bgBlackBright(answer.confirmar));
})
.catch((error) => {
    if(error.isTryError){
        console.log(chalk.redBright('Houve um erro ao acessar o  console.')) 
    }else{
        console.log(chalk.redBright(error))
    }
})