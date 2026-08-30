/*
 * app.ts
 *
 * Arquivo de exemplo para estudo dos principais fundamentos de TypeScript.
 *
 * Conteúdos abordados:
 * - Variáveis e tipos
 * - Operadores
 * - Funções
 * - Entrada e saída de dados
 * - Manipulação de textos
 * - Estruturas condicionais
 * - Arrays e objetos
 * - Laços de repetição
 * - Conversão de tipos
 * - Tratamento de exceções
 * - Interfaces e tipos
 *
 * Observação:
 * Este arquivo tem finalidade didática e não precisa ser executado diretamente.
 */


// ============================================================
// 1. SAÍDA DE DADOS
// ============================================================

// console.log() exibe informações no terminal ou console.
console.log("=== Exemplo de fundamentos em TypeScript ===");


// ============================================================
// 2. VARIÁVEIS E TIPOS DE DADOS
// ============================================================

// TypeScript permite declarar explicitamente o tipo da variável.
let idade: number = 30;
let altura: number = 1.70;
let programador: boolean = true;
let linguagem: string = "TypeScript";

// const cria uma constante que não pode receber outro valor.
const pais: string = "Brasil";

console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Programador:", programador);
console.log("Linguagem:", linguagem);
console.log("País:", pais);


// ============================================================
// 3. ENTRADA DE DADOS
// ============================================================

/*
 * Em aplicações de navegador, prompt() pode ser utilizado
 * para receber uma entrada simples do usuário.
 *
 * prompt() retorna string ou null.
 */

// const nomeUsuario: string | null = prompt("Digite seu nome:");

// if (nomeUsuario !== null) {
//     console.log("Olá,", nomeUsuario);
// }


// ============================================================
// 4. OPERADORES ARITMÉTICOS
// ============================================================

let numero1: number = 10;
let numero2: number = 3;

let soma: number = numero1 + numero2;
let subtracao: number = numero1 - numero2;
let multiplicacao: number = numero1 * numero2;
let divisao: number = numero1 / numero2;
let resto: number = numero1 % numero2;
let potencia: number = numero1 ** numero2;

console.log("\n=== Operadores aritméticos ===");
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potência:", potencia);


// ============================================================
// 5. OPERADORES DE COMPARAÇÃO
// ============================================================

console.log("\n=== Operadores de comparação ===");

console.log(numero1 === numero2); // Igualdade estrita
console.log(numero1 !== numero2); // Diferença estrita
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);


// ============================================================
// 6. OPERADORES LÓGICOS
// ============================================================

let idadeUsuario: number = 20;
let possuiCarteira: boolean = true;

let podeDirigir: boolean =
    idadeUsuario >= 18 && possuiCarteira;

let temAcesso: boolean =
    idadeUsuario >= 18 || possuiCarteira;

let naoPossuiCarteira: boolean =
    !possuiCarteira;

console.log("\nPode dirigir:", podeDirigir);
console.log("Tem acesso:", temAcesso);
console.log("Não possui carteira:", naoPossuiCarteira);


// ============================================================
// 7. ESTRUTURAS CONDICIONAIS
// ============================================================

let nota: number = 7.5;

if (nota >= 7) {
    console.log("\nAluno aprovado");
} else if (nota >= 5) {
    console.log("\nAluno em recuperação");
} else {
    console.log("\nAluno reprovado");
}


// ============================================================
// 8. FUNÇÕES
// ============================================================

// Função com parâmetros e retorno tipados.
function calcularCubo(numero: number): number {
    return numero * numero * numero;
}

function somar(a: number, b: number): number {
    return a + b;
}

console.log("\n3 ao cubo é:", calcularCubo(3));
console.log("Soma:", somar(10, 5));


// ============================================================
// 9. FUNÇÃO ARROW
// ============================================================

// Arrow Function é uma forma curta de declarar funções.
const multiplicar = (a: number, b: number): number => {
    return a * b;
};

console.log("Multiplicação:", multiplicar(4, 5));


// ============================================================
// 10. MANIPULAÇÃO DE TEXTOS
// ============================================================

let texto: string = "  Aprendendo TypeScript  ";

console.log("\n=== Manipulação de textos ===");

let textoLimpo: string = texto.trim();

console.log("Sem espaços:", textoLimpo);
console.log("Maiúsculas:", textoLimpo.toUpperCase());
console.log("Minúsculas:", textoLimpo.toLowerCase());
console.log(
    "Texto alterado:",
    textoLimpo.replace("TypeScript", "Programação")
);

console.log("Quantidade de caracteres:", textoLimpo.length);
console.log("Primeiro caractere:", textoLimpo[0]);
console.log(
    "'TypeScript' está no texto?",
    textoLimpo.includes("TypeScript")
);


// ============================================================
// 11. TEMPLATE STRINGS
// ============================================================

let nome: string = "José";
let idadePessoa: number = 30;

// Template strings utilizam crases e ${}.
let mensagem: string =
    `${nome} possui ${idadePessoa} anos.`;

console.log("\n" + mensagem);


// ============================================================
// 12. ARRAYS
// ============================================================

let linguagens: string[] = [
    "TypeScript",
    "JavaScript",
    "Java",
    "Python"
];

linguagens.push("SQL");

console.log("\n=== Arrays ===");
console.log(linguagens);
console.log("Primeiro item:", linguagens[0]);


// ============================================================
// 13. OBJETOS
// ============================================================

let usuario = {
    nome: "José",
    idade: 30,
    linguagem: "TypeScript"
};

console.log("\n=== Objeto ===");
console.log("Nome:", usuario.nome);
console.log("Linguagem:", usuario.linguagem);


// ============================================================
// 14. INTERFACES
// ============================================================

/*
 * Interface define a estrutura esperada para um objeto.
 * É um recurso importante do TypeScript.
 */
interface Pessoa {
    nome: string;
    idade: number;
    ativo: boolean;
}

const pessoa: Pessoa = {
    nome: "Maria",
    idade: 25,
    ativo: true
};

console.log("\nPessoa:", pessoa);


// ============================================================
// 15. TYPE ALIAS
// ============================================================

// type também pode definir estruturas e tipos personalizados.
type Status = "ativo" | "inativo";

let statusUsuario: Status = "ativo";

console.log("Status:", statusUsuario);


// ============================================================
// 16. LAÇO FOR
// ============================================================

console.log("\n=== Laço for ===");

for (let i: number = 1; i <= 5; i++) {
    console.log("Número:", i);
}


// ============================================================
// 17. FOR...OF
// ============================================================

// for...of percorre os valores de arrays.
console.log("\n=== For...of ===");

for (const item of linguagens) {
    console.log("Linguagem:", item);
}


// ============================================================
// 18. WHILE
// ============================================================

console.log("\n=== While ===");

let contador: number = 1;

while (contador <= 5) {
    console.log("Contador:", contador);
    contador++;
}


// ============================================================
// 19. DO...WHILE
// ============================================================

console.log("\n=== Do...while ===");

let valor: number = 1;

do {
    console.log("Valor:", valor);
    valor++;
} while (valor <= 3);


// ============================================================
// 20. BREAK E CONTINUE
// ============================================================

console.log("\n=== Break ===");

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

console.log("\n=== Continue ===");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}


// ============================================================
// 21. SWITCH
// ============================================================

let opcao: number = 2;

console.log("\n=== Switch ===");

switch (opcao) {
    case 1:
        console.log("Opção 1 selecionada");
        break;

    case 2:
        console.log("Opção 2 selecionada");
        break;

    case 3:
        console.log("Opção 3 selecionada");
        break;

    default:
        console.log("Opção inválida");
}


// ============================================================
// 22. CONVERSÃO DE TIPOS
// ============================================================

let textoNumero: string = "100";

let numeroConvertido: number =
    Number(textoNumero);

let inteiroConvertido: number =
    parseInt("50");

let decimalConvertido: number =
    parseFloat("10.5");

let numeroTexto: string =
    String(123);

console.log("\n=== Conversão de tipos ===");
console.log(numeroConvertido);
console.log(inteiroConvertido);
console.log(decimalConvertido);
console.log(numeroTexto);


// ============================================================
// 23. TRATAMENTO DE EXCEÇÕES
// ============================================================

console.log("\n=== Tratamento de exceções ===");

try {
    let divisor: number = 0;

    if (divisor === 0) {
        throw new Error(
            "Não é possível dividir por zero."
        );
    }

    let resultado: number = 100 / divisor;
    console.log(resultado);

} catch (erro) {

    // TypeScript recomenda validar o tipo do erro.
    if (erro instanceof Error) {
        console.log(
            "Erro capturado:",
            erro.message
        );
    }

} finally {
    console.log(
        "Fim da tentativa de cálculo."
    );
}


// ============================================================
// 24. FUNÇÃO COM ARRAY
// ============================================================

function calcularMedia(notas: number[]): number {

    if (notas.length === 0) {
        return 0;
    }

    let total: number = 0;

    for (const nota of notas) {
        total += nota;
    }

    return total / notas.length;
}

let notasAluno: number[] = [
    7.5,
    8.0,
    6.5
];

let media: number =
    calcularMedia(notasAluno);

console.log("\n=== Resultado final ===");
console.log("Notas:", notasAluno);
console.log("Média:", media.toFixed(2));

if (media >= 7) {
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Reprovado");
}


// ============================================================
// 25. OPERADOR TERNÁRIO
// ============================================================

let idadeTeste: number = 20;

let classificacao: string =
    idadeTeste >= 18
        ? "Maior de idade"
        : "Menor de idade";

console.log("\nClassificação:", classificacao);


// ============================================================
// FIM DO ARQUIVO
// ============================================================

console.log("\nFim dos exemplos.");
