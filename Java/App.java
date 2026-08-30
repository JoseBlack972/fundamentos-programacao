/*
 * App.java
 *
 * Arquivo de exemplo para estudo dos principais fundamentos da linguagem Java.
 *
 * Conteúdos abordados:
 * - Operadores
 * - Métodos (funções em Java)
 * - Entrada e saída de dados
 * - Manipulação de textos
 * - Estruturas condicionais
 * - Arrays e ArrayList
 * - Laços de repetição
 * - Conversão de tipos
 * - Tratamento de exceções
 *
 * Observação:
 * Este arquivo tem finalidade didática. Os exemplos estão organizados
 * em seções e comentados para facilitar a leitura e o estudo.
 */

import java.util.Scanner;
import java.util.ArrayList;

public class App {

    // ============================================================
    // 1. MÉTODOS
    // ============================================================

    /*
     * Em Java, funções são normalmente chamadas de métodos.
     * Este método recebe um número e retorna seu cubo.
     */
    public static double calcularCubo(double numero) {
        return numero * numero * numero;
    }

    /*
     * Método que recebe dois números inteiros e retorna a soma.
     */
    public static int somar(int a, int b) {
        return a + b;
    }

    /*
     * Método que calcula a média dos valores de um array.
     */
    public static double calcularMedia(double[] notas) {
        if (notas.length == 0) {
            return 0;
        }

        double soma = 0;

        for (double nota : notas) {
            soma += nota;
        }

        return soma / notas.length;
    }

    /*
     * Método que demonstra tratamento de exceção.
     */
    public static double dividir(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Não é possível dividir por zero.");
        }

        return a / b;
    }

    // ============================================================
    // MÉTODO PRINCIPAL
    // ============================================================

    public static void main(String[] args) {

        // Scanner é utilizado para receber dados digitados pelo usuário.
        Scanner scanner = new Scanner(System.in);


        // ============================================================
        // 2. ENTRADA E SAÍDA DE DADOS
        // ============================================================

        // System.out.println() exibe uma mensagem e pula uma linha.
        System.out.println("=== Exemplo de fundamentos em Java ===");

        // System.out.print() exibe uma mensagem sem pular linha.
        System.out.print("Digite seu nome: ");

        // nextLine() lê uma linha de texto digitada pelo usuário.
        String nome = scanner.nextLine();

        System.out.println("Olá, " + nome);


        // ============================================================
        // 3. VARIÁVEIS E TIPOS DE DADOS
        // ============================================================

        int idade = 30;                 // Número inteiro
        double altura = 1.70;           // Número decimal
        boolean programador = true;     // Verdadeiro ou falso
        char inicial = 'J';             // Um único caractere
        String linguagem = "Java";      // Texto

        System.out.println("\n=== Tipos de dados ===");
        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
        System.out.println("Programador: " + programador);
        System.out.println("Inicial: " + inicial);
        System.out.println("Linguagem: " + linguagem);


        // ============================================================
        // 4. OPERADORES ARITMÉTICOS
        // ============================================================

        int numero1 = 10;
        int numero2 = 3;

        int soma = numero1 + numero2;
        int subtracao = numero1 - numero2;
        int multiplicacao = numero1 * numero2;

        // Conversão para double evita divisão inteira.
        double divisao = (double) numero1 / numero2;

        int divisaoInteira = numero1 / numero2;
        int resto = numero1 % numero2;

        // Math.pow() calcula potência.
        double potencia = Math.pow(numero1, numero2);

        System.out.println("\n=== Operadores aritméticos ===");
        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);
        System.out.println("Divisão inteira: " + divisaoInteira);
        System.out.println("Resto: " + resto);
        System.out.println("Potência: " + potencia);


        // ============================================================
        // 5. OPERADORES DE COMPARAÇÃO
        // ============================================================

        /*
         * Operadores de comparação retornam true ou false.
         */

        System.out.println("\n=== Operadores de comparação ===");
        System.out.println(numero1 == numero2); // Igual
        System.out.println(numero1 != numero2); // Diferente
        System.out.println(numero1 > numero2);  // Maior que
        System.out.println(numero1 < numero2);  // Menor que
        System.out.println(numero1 >= numero2); // Maior ou igual
        System.out.println(numero1 <= numero2); // Menor ou igual


        // ============================================================
        // 6. OPERADORES LÓGICOS
        // ============================================================

        int idadeUsuario = 20;
        boolean possuiCarteira = true;

        // && representa o operador lógico E.
        boolean podeDirigir = idadeUsuario >= 18 && possuiCarteira;

        // || representa o operador lógico OU.
        boolean temAcesso = idadeUsuario >= 18 || possuiCarteira;

        // ! inverte um valor booleano.
        boolean naoPossuiCarteira = !possuiCarteira;

        System.out.println("\nPode dirigir: " + podeDirigir);
        System.out.println("Tem acesso: " + temAcesso);
        System.out.println("Não possui carteira: " + naoPossuiCarteira);


        // ============================================================
        // 7. ESTRUTURAS CONDICIONAIS
        // ============================================================

        double nota = 7.5;

        if (nota >= 7) {
            System.out.println("\nAluno aprovado");
        } else if (nota >= 5) {
            System.out.println("\nAluno em recuperação");
        } else {
            System.out.println("\nAluno reprovado");
        }


        // ============================================================
        // 8. CHAMADA DE MÉTODOS
        // ============================================================

        double resultadoCubo = calcularCubo(3);

        System.out.println("\n3 ao cubo é: " + resultadoCubo);
        System.out.println("Soma pelo método: " + somar(10, 5));


        // ============================================================
        // 9. MANIPULAÇÃO DE DADOS TEXTUAIS
        // ============================================================

        String texto = "  Aprendendo Java  ";

        System.out.println("\n=== Manipulação de textos ===");

        // trim() remove espaços no início e no final.
        String textoLimpo = texto.trim();

        System.out.println("Texto sem espaços extras: " + textoLimpo);

        // toUpperCase() converte para letras maiúsculas.
        System.out.println("Maiúsculas: " + textoLimpo.toUpperCase());

        // toLowerCase() converte para letras minúsculas.
        System.out.println("Minúsculas: " + textoLimpo.toLowerCase());

        // replace() substitui partes do texto.
        System.out.println(
            "Texto alterado: " +
            textoLimpo.replace("Java", "Programação")
        );

        // length() informa a quantidade de caracteres.
        System.out.println("Quantidade de caracteres: " + textoLimpo.length());

        // charAt() retorna um caractere pela posição.
        System.out.println("Primeiro caractere: " + textoLimpo.charAt(0));

        // contains() verifica se determinado texto está presente.
        System.out.println(
            "'Java' está no texto? " + textoLimpo.contains("Java")
        );


        // ============================================================
        // 10. FORMATAÇÃO DE TEXTO
        // ============================================================

        String nomeUsuario = "José";
        int idadePessoa = 30;

        // printf permite inserir valores formatados dentro do texto.
        System.out.printf(
            "\n%s possui %d anos.%n",
            nomeUsuario,
            idadePessoa
        );


        // ============================================================
        // 11. ARRAYS
        // ============================================================

        /*
         * Arrays armazenam vários valores do mesmo tipo.
         * O tamanho de um array é definido no momento da criação.
         */

        String[] linguagens = {
            "Java",
            "Python",
            "JavaScript",
            "SQL"
        };

        System.out.println("\n=== Array ===");
        System.out.println("Primeira linguagem: " + linguagens[0]);
        System.out.println("Quantidade de itens: " + linguagens.length);


        // ============================================================
        // 12. ARRAYLIST
        // ============================================================

        /*
         * ArrayList é uma lista dinâmica.
         * Diferentemente de arrays, seu tamanho pode aumentar ou diminuir.
         */

        ArrayList<String> tecnologias = new ArrayList<>();

        tecnologias.add("Java");
        tecnologias.add("Python");
        tecnologias.add("SQL");

        System.out.println("\n=== ArrayList ===");
        System.out.println(tecnologias);

        // get() acessa um elemento pela posição.
        System.out.println("Primeiro item: " + tecnologias.get(0));

        // remove() remove um elemento.
        tecnologias.remove("SQL");

        System.out.println("Após remover SQL: " + tecnologias);


        // ============================================================
        // 13. LAÇO DE REPETIÇÃO FOR
        // ============================================================

        System.out.println("\n=== Laço for ===");

        for (int i = 1; i <= 5; i++) {
            System.out.println("Número: " + i);
        }


        // ============================================================
        // 14. FOR-EACH
        // ============================================================

        /*
         * O for-each é utilizado para percorrer arrays ou coleções.
         */

        System.out.println("\n=== For-each ===");

        for (String item : linguagens) {
            System.out.println("Linguagem: " + item);
        }


        // ============================================================
        // 15. LAÇO WHILE
        // ============================================================

        System.out.println("\n=== Laço while ===");

        int contador = 1;

        while (contador <= 5) {
            System.out.println("Contador: " + contador);
            contador++;
        }


        // ============================================================
        // 16. LAÇO DO-WHILE
        // ============================================================

        /*
         * O do-while executa o bloco pelo menos uma vez,
         * antes de verificar a condição.
         */

        System.out.println("\n=== Laço do-while ===");

        int valor = 1;

        do {
            System.out.println("Valor: " + valor);
            valor++;
        } while (valor <= 3);


        // ============================================================
        // 17. BREAK E CONTINUE
        // ============================================================

        // break encerra o laço.
        System.out.println("\n=== Exemplo com break ===");

        for (int i = 1; i < 10; i++) {

            if (i == 5) {
                break;
            }

            System.out.println(i);
        }


        // continue pula a repetição atual.
        System.out.println("\n=== Exemplo com continue ===");

        for (int i = 1; i <= 5; i++) {

            if (i == 3) {
                continue;
            }

            System.out.println(i);
        }


        // ============================================================
        // 18. CONVERSÃO DE TIPOS
        // ============================================================

        String textoNumero = "100";

        // Integer.parseInt() converte String para int.
        int numeroConvertido = Integer.parseInt(textoNumero);

        // Double.parseDouble() converte String para double.
        double decimalConvertido = Double.parseDouble("10.5");

        // String.valueOf() converte valores para String.
        String numeroTexto = String.valueOf(123);

        System.out.println("\n=== Conversão de tipos ===");
        System.out.println("Número convertido: " + numeroConvertido);
        System.out.println("Decimal convertido: " + decimalConvertido);
        System.out.println("Número convertido para texto: " + numeroTexto);


        // ============================================================
        // 19. TRATAMENTO DE EXCEÇÕES
        // ============================================================

        /*
         * try contém o código que pode gerar erro.
         * catch trata uma exceção específica.
         * finally é executado ocorrendo erro ou não.
         */

        System.out.println("\n=== Tratamento de exceções ===");

        try {

            System.out.print("Digite um número inteiro: ");

            String entrada = scanner.nextLine();

            int numero = Integer.parseInt(entrada);

            int resultado = 100 / numero;

            System.out.println("Resultado: " + resultado);

        } catch (NumberFormatException erro) {

            // Ocorre quando o texto não pode ser convertido para número.
            System.out.println(
                "Erro: digite apenas números inteiros."
            );

        } catch (ArithmeticException erro) {

            // Ocorre em operações aritméticas inválidas,
            // como divisão inteira por zero.
            System.out.println(
                "Erro: não é possível dividir por zero."
            );

        } finally {

            System.out.println(
                "Fim da tentativa de cálculo."
            );
        }


        // ============================================================
        // 20. EXEMPLO DE EXCEÇÃO EM MÉTODO
        // ============================================================

        try {

            double resultadoDivisao = dividir(10, 2);

            System.out.println(
                "\nDivisão 10 / 2: " + resultadoDivisao
            );

            double resultadoErro = dividir(10, 0);

            System.out.println(resultadoErro);

        } catch (ArithmeticException erro) {

            System.out.println(
                "Erro capturado: " + erro.getMessage()
            );
        }


        // ============================================================
        // 21. EXEMPLO COMBINANDO VÁRIOS CONCEITOS
        // ============================================================

        double[] notasAluno = {
            7.5,
            8.0,
            6.5
        };

        double media = calcularMedia(notasAluno);

        System.out.println("\n=== Resultado final ===");

        // %.2f exibe o número com duas casas decimais.
        System.out.printf("Média: %.2f%n", media);

        if (media >= 7) {
            System.out.println("Situação: Aprovado");
        } else {
            System.out.println("Situação: Reprovado");
        }


        // ============================================================
        // 22. SWITCH
        // ============================================================

        /*
         * switch permite escolher uma ação com base em um valor.
         */

        int opcao = 2;

        System.out.println("\n=== Switch ===");

        switch (opcao) {

            case 1:
                System.out.println("Opção 1 selecionada");
                break;

            case 2:
                System.out.println("Opção 2 selecionada");
                break;

            case 3:
                System.out.println("Opção 3 selecionada");
                break;

            default:
                System.out.println("Opção inválida");
        }


        // ============================================================
        // 23. OPERADORES DE INCREMENTO E ATRIBUIÇÃO
        // ============================================================

        int x = 10;

        x++;       // Equivale a x = x + 1
        x--;       // Equivale a x = x - 1
        x += 5;    // Equivale a x = x + 5
        x -= 2;    // Equivale a x = x - 2
        x *= 2;    // Equivale a x = x * 2
        x /= 2;    // Equivale a x = x / 2

        System.out.println(
            "\nValor final de x: " + x
        );


        // ============================================================
        // 24. OPERADOR TERNÁRIO
        // ============================================================

        /*
         * Forma reduzida de um if/else simples.
         */

        int idadeTeste = 20;

        String classificacao =
            idadeTeste >= 18 ? "Maior de idade" : "Menor de idade";

        System.out.println(
            "\nClassificação: " + classificacao
        );


        // ============================================================
        // FIM DO ARQUIVO
        // ============================================================

        System.out.println("\nFim dos exemplos.");

        // Fecha o Scanner ao final do programa.
        scanner.close();
    }
}
