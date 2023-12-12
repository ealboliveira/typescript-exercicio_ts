function multiplicar(a: number, b:number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá" + nome;
}

const resultadoMultiplicacao = multiplicar(5, 2);
const mensagemSaudacao = saudacao("Eduardo");

console.log("Resultado da Multiplicação: ", resultadoMultiplicacao);
console.log("Oi ", mensagemSaudacao);
