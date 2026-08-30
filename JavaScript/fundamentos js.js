/*
 * app.js
 *
 * Arquivo de exemplo para estudo dos principais fundamentos de JavaScript.
 *
 * Conteúdos abordados:
 * - Variáveis
 * - Operadores
 * - Funções
 * - Entrada e saída de dados
 * - Manipulação de textos
 * - Estruturas condicionais
 * - Arrays e objetos
 * - Laços de repetição
 * - Conversão de tipos
 * - Tratamento de exceções
 *
 * Observação:
 * Este arquivo tem finalidade didática e não precisa ser executado diretamente.
 */


// ============================================================
// 1. SAÍDA DE DADOS
// ============================================================

// console.log() exibe informações no console.
console.log("=== Exemplo de fundamentos em JavaScript ===");


// ============================================================
// 2. VARIÁVEIS
// ============================================================

// let cria uma variável que pode ter seu valor alterado.
let idade = 30;
let altura = 1.70;
let programador = true;
let linguagem = "JavaScript";

// const cria uma constante.
const pais = "Brasil";

console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Programador:", programador);
console.log("Linguagem:", linguagem);
console.log("País:", pais);


// ============================================================
// 3. TIPOS DE DADOS
// ============================================================

let nome = "José";          // string
let quantidade = 10;        // number
let ativo = true;           // boolean
let valorNulo = null;       // null
let indefinido;             // undefined

console.log("\n=== Tipos ===");
console.log(typeof nome);
console.log(typeof quantidade);
console.log(typeof ativo);
console.log(indefinido);


// ============================================================
// 4. ENTRADA DE DADOS
// ============================================================

/*
 * Em navegadores, prompt() pode receber dados do usuário.
 *
 * Exemplo:
 *
 * const nomeUsuario = prompt("Digite seu nome:");
 * console.log("Olá,", nomeUsuario);
 *
 * No Node.js, normalmente utiliza-se readline.
 */


// ============================================================
// 5. OPERADORES ARITMÉTICOS
// ============================================================

let numero1 = 10;
let numero2 = 3;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;

console.log("\n=== Operadores aritméticos ===");
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potência:", potencia);


// ============================================================
// 6. OPERADORES DE COMPARAÇÃO
// ============================================================

console.log("\n=== Operadores de comparação ===");

console.log(numero1 === numero2); // Igualdade estrita
console.log(numero1 !== numero2); // Diferença estrita
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);

/*
 * Em JavaScript é recomendado utilizar === e !==
 * em vez de == e !=, pois eles também comparam o tipo.
 */


// ============================================================
// 7. OPERADORES LÓGICOS
// ============================================================

let idadeUsuario = 20;
let possuiCarteira = true;

let podeDirigir =
    idadeUsuario >= 18 && possuiCarteira;

let temAcesso =
    idadeUsuario >= 18 || possuiCarteira;

let naoPossuiCarteira =
    !possuiCarteira;

console.log("\nPode dirigir:", podeDirigir);
console.log("Tem acesso:", temAcesso);
console.log("Não possui carteira:", naoPossuiCarteira);


// ============================================================
// 8. ESTRUTURAS CONDICIONAIS
// ============================================================

let nota = 7.5;

if (nota >= 7) {
    console.log("\nAluno aprovado");
} else if (nota >= 5) {
    console.log("\nAluno em recuperação");
} else {
    console.log("\nAluno reprovado");
}


// ============================================================
// 9. FUNÇÕES
// ============================================================

// Função tradicional.
function calcularCubo(numero) {
    return numero * numero * numero;
}

function somar(a, b) {
    return a + b;
}

console.log("\n3 ao cubo é:", calcularCubo(3));
console.log("Soma:", somar(10, 5));


// ============================================================
// 10. ARROW FUNCTIONS
// ============================================================

// Arrow Function é uma forma moderna e curta de criar funções.
const multiplicar = (a, b) => {
    return a * b;
};

console.log("Multiplicação:", multiplicar(4, 5));


// ============================================================
// 11. MANIPULAÇÃO DE TEXTOS
// ============================================================

let texto = "  Aprendendo JavaScript  ";

console.log("\n=== Manipulação de textos ===");

// trim() remove espaços no início e no final.
let textoLimpo = texto.trim();

console.log("Sem espaços:", textoLimpo);

// toUpperCase() transforma o texto em maiúsculas.
console.log("Maiúsculas:", textoLimpo.toUpperCase());

// toLowerCase() transforma o texto em minúsculas.
console.log("Minúsculas:", textoLimpo.toLowerCase());

// replace() substitui parte de um texto.
console.log(
    "Texto alterado:",
    textoLimpo.replace(
        "JavaScript",
        "Programação"
    )
);

// length informa a quantidade de caracteres.
console.log(
    "Quantidade de caracteres:",
    textoLimpo.length
);

// Acessa um caractere pela posição.
console.log(
    "Primeiro caractere:",
    textoLimpo[0]
);

// includes() verifica se determinado texto existe.
console.log(
    "'JavaScript' está no texto?",
    textoLimpo.includes("JavaScript")
);


// ============================================================
// 12. TEMPLATE STRINGS
// ============================================================

let nomeUsuario = "José";
let idadePessoa = 30;

/*
 * Template Strings utilizam crase ``
 * e permitem inserir variáveis com ${}.
 */
let mensagem =
    `${nomeUsuario} possui ${idadePessoa} anos.`;

console.log("\n" + mensagem);


// ============================================================
// 13. ARRAYS
// ============================================================

/*
 * Arrays armazenam vários valores.
 */
let linguagens = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python"
];

// push() adiciona um item no final.
linguagens.push("SQL");

console.log("\n=== Arrays ===");
console.log(linguagens);
console.log("Primeiro item:", linguagens[0]);


// ============================================================
// 14. MÉTODOS DE ARRAY
// ============================================================

// Adiciona um elemento.
linguagens.push("C#");

// pop() remove o último elemento.
linguagens.pop();

// includes() verifica se o item existe.
console.log(
    "Possui Java?",
    linguagens.includes("Java")
);

// length retorna a quantidade de elementos.
console.log(
    "Quantidade:",
    linguagens.length
);


// ============================================================
// 15. OBJETOS
// ============================================================

/*
 * Objetos armazenam informações no formato:
 * propriedade: valor
 */
let usuario = {
    nome: "José",
    idade: 30,
    linguagem: "JavaScript"
};

console.log("\n=== Objeto ===");
console.log("Nome:", usuario.nome);
console.log("Idade:", usuario.idade);
console.log("Linguagem:", usuario.linguagem);


// ============================================================
// 16. LAÇO FOR
// ============================================================

/*
 * O for é utilizado quando sabemos aproximadamente
 * quantas vezes queremos repetir uma operação.
 */
console.log("\n=== Laço for ===");

for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}


// ============================================================
// 17. FOR...OF
// ============================================================

/*
 * for...of percorre os valores de arrays.
 */
console.log("\n=== For...of ===");

for (const item of linguagens) {
    console.log("Linguagem:", item);
}


// ============================================================
// 18. FOREACH
// ============================================================

/*
 * forEach() executa uma função para cada elemento do array.
 */
console.log("\n=== forEach ===");

linguagens.forEach((item) => {
    console.log(item);
});


// ============================================================
// 19. WHILE
// ============================================================

/*
 * while executa o bloco enquanto a condição for verdadeira.
 */
console.log("\n=== While ===");

let contador = 1;

while (contador <= 5) {
    console.log("Contador:", contador);

    contador++;
}


// ============================================================
// 20. DO...WHILE
// ============================================================

/*
 * do...while executa o bloco pelo menos uma vez
 * antes de verificar a condição.
 */
console.log("\n=== Do...while ===");

let valor = 1;

do {
    console.log("Valor:", valor);

    valor++;
} while (valor <= 3);


// ============================================================
// 21. BREAK E CONTINUE
// ============================================================

// break interrompe completamente o laço.
console.log("\n=== Break ===");

for (let i = 1; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// continue pula apenas a repetição atual.
console.log("\n=== Continue ===");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


// ============================================================
// 22. SWITCH
// ============================================================

/*
 * switch permite executar diferentes blocos
 * dependendo do valor de uma variável.
 */
let opcao = 2;

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
// 23. CONVERSÃO DE TIPOS
// ============================================================

let textoNumero = "100";

// Number() converte para number.
let numeroConvertido =
    Number(textoNumero);

// parseInt() converte para número inteiro.
let inteiroConvertido =
    parseInt("50");

// parseFloat() converte para número decimal.
let decimalConvertido =
    parseFloat("10.5");

// String() converte para texto.
let numeroTexto =
    String(123);

console.log("\n=== Conversão de tipos ===");
console.log(numeroConvertido);
console.log(inteiroConvertido);
console.log(decimalConvertido);
console.log(numeroTexto);


// ============================================================
// 24. OPERADORES DE ATRIBUIÇÃO
// ============================================================

let x = 10;

// Soma e atribui.
x += 5;

// Subtrai e atribui.
x -= 2;

// Multiplica e atribui.
x *= 2;

// Divide e atribui.
x /= 2;

console.log(
    "\nValor final de x:",
    x
);


// ============================================================
// 25. INCREMENTO E DECREMENTO
// ============================================================

let contadorExemplo = 10;

// Incrementa 1.
contadorExemplo++;

// Decrementa 1.
contadorExemplo--;

console.log(
    "\nContador:",
    contadorExemplo
);


// ============================================================
// 26. TRATAMENTO DE EXCEÇÕES
// ============================================================

/*
 * try contém o código que pode gerar um erro.
 *
 * catch captura e trata o erro.
 *
 * finally é executado sempre.
 */
console.log("\n=== Tratamento de exceções ===");

try {

    let divisor = 0;

    if (divisor === 0) {
        throw new Error(
            "Não é possível dividir por zero."
        );
    }

    let resultado =
        100 / divisor;

    console.log(resultado);

} catch (erro) {

    console.log(
        "Erro capturado:",
        erro.message
    );

} finally {

    console.log(
        "Fim da tentativa de cálculo."
    );
}


// ============================================================
// 27. FUNÇÃO COM TRATAMENTO DE ERRO
// ============================================================

function dividir(a, b) {

    if (b === 0) {
        throw new Error(
            "Divisão por zero não permitida."
        );
    }

    return a / b;
}

try {

    let resultadoDivisao =
        dividir(10, 2);

    console.log(
        "\nDivisão:",
        resultadoDivisao
    );

} catch (erro) {

    console.log(
        "Erro:",
        erro.message
    );
}


// ============================================================
// 28. FUNÇÃO COM ARRAY
// ============================================================

function calcularMedia(notas) {

    // Verifica se o array está vazio.
    if (notas.length === 0) {
        return 0;
    }

    let total = 0;

    for (const nota of notas) {
        total += nota;
    }

    return total / notas.length;
}


// Array contendo as notas.
let notasAluno = [
    7.5,
    8.0,
    6.5
];

let media =
    calcularMedia(notasAluno);

console.log("\n=== Resultado final ===");

console.log(
    "Notas:",
    notasAluno
);

// toFixed(2) mostra duas casas decimais.
console.log(
    "Média:",
    media.toFixed(2)
);

if (media >= 7) {

    console.log(
        "Situação: Aprovado"
    );

} else {

    console.log(
        "Situação: Reprovado"
    );
}


// ============================================================
// 29. OPERADOR TERNÁRIO
// ============================================================

/*
 * O operador ternário é uma forma curta
 * de escrever uma condição simples.
 */

let idadeTeste = 20;

let classificacao =
    idadeTeste >= 18
        ? "Maior de idade"
        : "Menor de idade";

console.log(
    "\nClassificação:",
    classificacao
);


// ============================================================
// 30. MAP
// ============================================================

/*
 * map() cria um novo array aplicando uma operação
 * em cada elemento.
 */

let numeros = [1, 2, 3, 4, 5];

let numerosAoQuadrado =
    numeros.map((numero) => {
        return numero * numero;
    });

console.log(
    "\nNúmeros ao quadrado:",
    numerosAoQuadrado
);


// ============================================================
// 31. FILTER
// ============================================================

/*
 * filter() cria um novo array somente com os elementos
 * que atendem determinada condição.
 */

let numerosPares =
    numeros.filter((numero) => {
        return numero % 2 === 0;
    });

console.log(
    "Números pares:",
    numerosPares
);


// ============================================================
// 32. REDUCE
// ============================================================

/*
 * reduce() pode reduzir vários elementos
 * a um único valor.
 */

let somaNumeros =
    numeros.reduce(
        (acumulador, numero) => {
            return acumulador + numero;
        },
        0
    );

console.log(
    "Soma dos números:",
    somaNumeros
);


// ============================================================
// 33. DESESTRUTURAÇÃO
// ============================================================

/*
 * Desestruturação permite retirar valores
 * de objetos ou arrays de forma simplificada.
 */

let funcionario = {
    nomeFuncionario: "Carlos",
    cargo: "Técnico",
    salario: 3000
};

let {
    nomeFuncionario,
    cargo
} = funcionario;

console.log(
    "\nFuncionário:",
    nomeFuncionario
);

console.log(
    "Cargo:",
    cargo
);


// ============================================================
// 34. SPREAD OPERATOR
// ============================================================

/*
 * O operador ... permite copiar ou combinar
 * arrays e objetos.
 */

let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

let todosNumeros = [
    ...numeros1,
    ...numeros2
];

console.log(
    "\nTodos os números:",
    todosNumeros
);


// ============================================================
// 35. FUNÇÃO COM PARÂMETRO PADRÃO
// ============================================================

function saudacao(
    nome = "Usuário"
) {

    console.log(
        `Olá, ${nome}`
    );
}

saudacao("José");
saudacao();


// ============================================================
// 36. FUNÇÃO COM REST PARAMETERS
// ============================================================

/*
 * ...numeros permite receber uma quantidade
 * variável de argumentos.
 */

function somarVarios(...numeros) {

    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(
    "\nSoma de vários números:",
    somarVarios(10, 20, 30, 40)
);


// ============================================================
// FIM DO ARQUIVO
// ============================================================

console.log(
    "\nFim dos exemplos."
);