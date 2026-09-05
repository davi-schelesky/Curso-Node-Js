// O módulo externo CHALK é usado para melhor visualização do console

import chalk from 'chalk';
import createPrompt from 'prompt-sync';

const prompt = createPrompt();

const nota = prompt("Digite sua nota: ");

if (nota >= 7){
    console.log(chalk.green('Parabéns! Você está aprovado'));
} else {
    console.log(chalk.bgRed("Você está reprovado KKKKKKKKK"));
}