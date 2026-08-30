/*
	app.go

	Arquivo de exemplo para estudo dos principais fundamentos da linguagem Go.

	Conteúdos abordados:
	- Variáveis e tipos
	- Operadores
	- Funções
	- Entrada e saída de dados
	- Manipulação de textos
	- Estruturas condicionais
	- Arrays, slices e maps
	- Laços de repetição
	- Conversão de tipos
	- Structs
	- Tratamento de erros
	- Defer
	- Ponteiros básicos

	Observação:
	Este arquivo tem finalidade didática.
	Os exemplos estão organizados em seções e comentados de forma breve.
*/

package main

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)


// ============================================================
// 1. FUNÇÕES
// ============================================================

// Em Go, funções são declaradas com a palavra-chave func.

// Função que recebe um número e retorna seu cubo.
func calcularCubo(numero float64) float64 {
	return numero * numero * numero
}

// Função que recebe dois números inteiros e retorna a soma.
func somar(a int, b int) int {
	return a + b
}

// Quando os parâmetros possuem o mesmo tipo,
// podemos declarar o tipo apenas uma vez.
func multiplicar(a, b int) int {
	return a * b
}


// ============================================================
// 2. FUNÇÃO COM MÚLTIPLOS RETORNOS
// ============================================================

// Go permite que uma função retorne mais de um valor.
func dividir(a, b float64) (float64, error) {

	// Em Go, erros normalmente são retornados como valores.
	if b == 0 {
		return 0, errors.New("não é possível dividir por zero")
	}

	return a / b, nil
}


// ============================================================
// 3. STRUCT
// ============================================================

// Struct é uma estrutura utilizada para agrupar dados relacionados.
type Pessoa struct {
	Nome  string
	Idade int
	Ativo bool
}


// ============================================================
// 4. FUNÇÃO PARA CALCULAR MÉDIA
// ============================================================

func calcularMedia(notas []float64) float64 {

	if len(notas) == 0 {
		return 0
	}

	var soma float64 = 0

	for _, nota := range notas {
		soma += nota
	}

	return soma / float64(len(notas))
}


// ============================================================
// FUNÇÃO PRINCIPAL
// ============================================================

func main() {

	// A execução de um programa Go normalmente começa em main().

	fmt.Println("=== Exemplo de fundamentos em Go ===")


	// ============================================================
	// 5. SAÍDA DE DADOS
	// ============================================================

	// fmt.Println() exibe informações e pula uma linha.
	fmt.Println("Olá, Go!")

	// fmt.Print() exibe sem pular linha.
	fmt.Print("Exemplo com Print: ")

	// fmt.Printf() permite formatar a saída.
	fmt.Printf("Número: %d\n", 10)


	// ============================================================
	// 6. VARIÁVEIS E TIPOS
	// ============================================================

	// Declaração explícita.
	var idade int = 30
	var altura float64 = 1.70
	var programador bool = true
	var linguagem string = "Go"

	fmt.Println("\n=== Variáveis ===")

	fmt.Println("Idade:", idade)
	fmt.Println("Altura:", altura)
	fmt.Println("Programador:", programador)
	fmt.Println("Linguagem:", linguagem)


	// ============================================================
	// 7. DECLARAÇÃO CURTA DE VARIÁVEIS
	// ============================================================

	/*
		O operador := permite criar uma variável
		sem declarar explicitamente seu tipo.

		Go identifica o tipo automaticamente.
	*/

	nome := "José"
	quantidade := 10
	preco := 99.90

	fmt.Println("\nNome:", nome)
	fmt.Println("Quantidade:", quantidade)
	fmt.Println("Preço:", preco)


	// ============================================================
	// 8. CONSTANTES
	// ============================================================

	// const cria um valor que não pode ser alterado.
	const pais = "Brasil"

	fmt.Println("País:", pais)


	// ============================================================
	// 9. ENTRADA DE DADOS
	// ============================================================

	/*
		fmt.Scan() pode ser utilizado para receber
		dados digitados pelo usuário.

		Este trecho está comentado para que o arquivo
		continue servindo como material de referência.
	*/

	/*
		var nomeUsuario string

		fmt.Print("Digite seu nome: ")
		fmt.Scan(&nomeUsuario)

		fmt.Println("Olá,", nomeUsuario)
	*/


	// ============================================================
	// 10. OPERADORES ARITMÉTICOS
	// ============================================================

	numero1 := 10
	numero2 := 3

	soma := numero1 + numero2
	subtracao := numero1 - numero2
	multiplicacao := numero1 * numero2
	divisaoInteira := numero1 / numero2
	resto := numero1 % numero2

	// Para obter divisão decimal, usamos float64.
	divisao := float64(numero1) / float64(numero2)

	fmt.Println("\n=== Operadores aritméticos ===")

	fmt.Println("Soma:", soma)
	fmt.Println("Subtração:", subtracao)
	fmt.Println("Multiplicação:", multiplicacao)
	fmt.Println("Divisão inteira:", divisaoInteira)
	fmt.Println("Divisão decimal:", divisao)
	fmt.Println("Resto:", resto)


	// ============================================================
	// 11. OPERADORES DE COMPARAÇÃO
	// ============================================================

	fmt.Println("\n=== Operadores de comparação ===")

	fmt.Println(numero1 == numero2) // Igual
	fmt.Println(numero1 != numero2) // Diferente
	fmt.Println(numero1 > numero2)  // Maior
	fmt.Println(numero1 < numero2)  // Menor
	fmt.Println(numero1 >= numero2) // Maior ou igual
	fmt.Println(numero1 <= numero2) // Menor ou igual


	// ============================================================
	// 12. OPERADORES LÓGICOS
	// ============================================================

	idadeUsuario := 20
	possuiCarteira := true

	// && representa E.
	podeDirigir := idadeUsuario >= 18 && possuiCarteira

	// || representa OU.
	temAcesso := idadeUsuario >= 18 || possuiCarteira

	// ! representa NÃO.
	naoPossuiCarteira := !possuiCarteira

	fmt.Println("\nPode dirigir:", podeDirigir)
	fmt.Println("Tem acesso:", temAcesso)
	fmt.Println("Não possui carteira:", naoPossuiCarteira)


	// ============================================================
	// 13. ESTRUTURA CONDICIONAL IF
	// ============================================================

	nota := 7.5

	if nota >= 7 {

		fmt.Println("\nAluno aprovado")

	} else if nota >= 5 {

		fmt.Println("\nAluno em recuperação")

	} else {

		fmt.Println("\nAluno reprovado")
	}


	// ============================================================
	// 14. FUNÇÕES
	// ============================================================

	resultadoCubo := calcularCubo(3)

	fmt.Println("\n3 ao cubo é:", resultadoCubo)

	fmt.Println(
		"Soma pela função:",
		somar(10, 5),
	)

	fmt.Println(
		"Multiplicação:",
		multiplicar(4, 5),
	)


	// ============================================================
	// 15. MANIPULAÇÃO DE TEXTOS
	// ============================================================

	texto := "  Aprendendo Go  "

	fmt.Println("\n=== Manipulação de textos ===")

	// TrimSpace remove espaços no início e no final.
	textoLimpo := strings.TrimSpace(texto)

	fmt.Println(
		"Texto sem espaços:",
		textoLimpo,
	)

	// ToUpper converte para maiúsculas.
	fmt.Println(
		"Maiúsculas:",
		strings.ToUpper(textoLimpo),
	)

	// ToLower converte para minúsculas.
	fmt.Println(
		"Minúsculas:",
		strings.ToLower(textoLimpo),
	)

	// ReplaceAll substitui partes do texto.
	fmt.Println(
		"Texto alterado:",
		strings.ReplaceAll(
			textoLimpo,
			"Go",
			"Programação",
		),
	)

	// len() retorna o tamanho.
	fmt.Println(
		"Quantidade de bytes:",
		len(textoLimpo),
	)

	// Contains verifica se existe determinado texto.
	fmt.Println(
		"Contém Go?",
		strings.Contains(
			textoLimpo,
			"Go",
		),
	)


	// ============================================================
	// 16. FORMATAÇÃO DE TEXTO
	// ============================================================

	nomePessoa := "José"
	idadePessoa := 30

	// Sprintf cria uma string formatada.
	mensagem := fmt.Sprintf(
		"%s possui %d anos.",
		nomePessoa,
		idadePessoa,
	)

	fmt.Println("\n" + mensagem)


	// ============================================================
	// 17. ARRAYS
	// ============================================================

	/*
		Arrays possuem tamanho fixo.

		Neste exemplo, o array possui exatamente 4 posições.
	*/

	linguagens := [4]string{
		"Go",
		"Java",
		"Python",
		"JavaScript",
	}

	fmt.Println("\n=== Array ===")

	fmt.Println(linguagens)

	fmt.Println(
		"Primeira linguagem:",
		linguagens[0],
	)

	fmt.Println(
		"Quantidade:",
		len(linguagens),
	)


	// ============================================================
	// 18. SLICES
	// ============================================================

	/*
		Slices são semelhantes aos arrays,
		mas possuem tamanho dinâmico.

		São extremamente utilizados em Go.
	*/

	tecnologias := []string{
		"Go",
		"Java",
		"Python",
	}

	// append() adiciona elementos.
	tecnologias = append(
		tecnologias,
		"SQL",
	)

	fmt.Println("\n=== Slice ===")

	fmt.Println(tecnologias)

	fmt.Println(
		"Primeiro item:",
		tecnologias[0],
	)


	// ============================================================
	// 19. MAP
	// ============================================================

	/*
		Map armazena dados no formato chave e valor.

		Pode ser comparado ao Dictionary de outras linguagens.
	*/

	usuario := map[string]string{
		"nome":      "José",
		"linguagem": "Go",
		"cargo":     "Programador",
	}

	fmt.Println("\n=== Map ===")

	fmt.Println(
		"Nome:",
		usuario["nome"],
	)

	fmt.Println(
		"Linguagem:",
		usuario["linguagem"],
	)


	// ============================================================
	// 20. ADICIONANDO ITEM EM MAP
	// ============================================================

	usuario["cidade"] = "São Paulo"

	fmt.Println(
		"Cidade:",
		usuario["cidade"],
	)


	// ============================================================
	// 21. REMOVENDO ITEM DE MAP
	// ============================================================

	delete(
		usuario,
		"cargo",
	)

	fmt.Println(
		"Map após remoção:",
		usuario,
	)


	// ============================================================
	// 22. LAÇO FOR
	// ============================================================

	/*
		Go possui apenas uma estrutura principal de repetição:
		o for.

		Ele pode substituir for, while e outras estruturas.
	*/

	fmt.Println("\n=== Laço for ===")

	for i := 1; i <= 5; i++ {

		fmt.Println(
			"Número:",
			i,
		)
	}


	// ============================================================
	// 23. FOR FUNCIONANDO COMO WHILE
	// ============================================================

	fmt.Println("\n=== For como while ===")

	contador := 1

	for contador <= 5 {

		fmt.Println(
			"Contador:",
			contador,
		)

		contador++
	}


	// ============================================================
	// 24. RANGE
	// ============================================================

	/*
		range facilita percorrer arrays,
		slices, maps e strings.
	*/

	fmt.Println("\n=== Range ===")

	for indice, linguagem := range tecnologias {

		fmt.Println(
			"Índice:",
			indice,
			"Linguagem:",
			linguagem,
		)
	}


	// ============================================================
	// 25. IGNORANDO O ÍNDICE COM _
	// ============================================================

	/*
		O caractere _ é chamado de blank identifier.

		Ele permite ignorar valores que não serão utilizados.
	*/

	fmt.Println("\n=== Ignorando índice ===")

	for _, linguagem := range tecnologias {

		fmt.Println(
			"Linguagem:",
			linguagem,
		)
	}


	// ============================================================
	// 26. BREAK
	// ============================================================

	// break encerra o laço.

	fmt.Println("\n=== Break ===")

	for i := 1; i < 10; i++ {

		if i == 5 {
			break
		}

		fmt.Println(i)
	}


	// ============================================================
	// 27. CONTINUE
	// ============================================================

	// continue pula a repetição atual.

	fmt.Println("\n=== Continue ===")

	for i := 1; i <= 5; i++ {

		if i == 3 {
			continue
		}

		fmt.Println(i)
	}


	// ============================================================
	// 28. SWITCH
	// ============================================================

	opcao := 2

	fmt.Println("\n=== Switch ===")

	switch opcao {

	case 1:

		fmt.Println(
			"Opção 1 selecionada",
		)

	case 2:

		fmt.Println(
			"Opção 2 selecionada",
		)

	case 3:

		fmt.Println(
			"Opção 3 selecionada",
		)

	default:

		fmt.Println(
			"Opção inválida",
		)
	}


	// ============================================================
	// 29. SWITCH SEM EXPRESSÃO
	// ============================================================

	/*
		Em Go, switch também pode funcionar
		como uma sequência de condições.
	*/

	idadeTeste := 20

	switch {

	case idadeTeste < 18:

		fmt.Println(
			"\nMenor de idade",
		)

	case idadeTeste >= 18:

		fmt.Println(
			"\nMaior de idade",
		)
	}


	// ============================================================
	// 30. CONVERSÃO DE TIPOS NUMÉRICOS
	// ============================================================

	numeroInteiro := 10

	// Conversão de int para float64.
	numeroDecimal := float64(numeroInteiro)

	fmt.Println(
		"\nNúmero decimal:",
		numeroDecimal,
	)


	// ============================================================
	// 31. STRING PARA NÚMERO
	// ============================================================

	textoNumero := "100"

	/*
		Atoi converte uma string para int.

		Além do valor, retorna um possível erro.
	*/

	numeroConvertido, erro := strconv.Atoi(textoNumero)

	if erro != nil {

		fmt.Println(
			"Erro na conversão:",
			erro,
		)

	} else {

		fmt.Println(
			"Número convertido:",
			numeroConvertido,
		)
	}


	// ============================================================
	// 32. NÚMERO PARA STRING
	// ============================================================

	numeroTexto := strconv.Itoa(123)

	fmt.Println(
		"Número convertido para texto:",
		numeroTexto,
	)


	// ============================================================
	// 33. TRATAMENTO DE ERROS
	// ============================================================

	/*
		Go não utiliza try/catch como Java ou JavaScript.

		O padrão mais comum é a função retornar:
		valor + error.

		Depois verificamos se error é diferente de nil.
	*/

	resultadoDivisao, erroDivisao :=
		dividir(10, 2)

	if erroDivisao != nil {

		fmt.Println(
			"Erro:",
			erroDivisao,
		)

	} else {

		fmt.Println(
			"\nResultado da divisão:",
			resultadoDivisao,
		)
	}


	// ============================================================
	// 34. EXEMPLO DE ERRO
	// ============================================================

	resultadoErro, erroDivisaoZero :=
		dividir(10, 0)

	if erroDivisaoZero != nil {

		fmt.Println(
			"Erro capturado:",
			erroDivisaoZero,
		)

	} else {

		fmt.Println(
			resultadoErro,
		)
	}


	// ============================================================
	// 35. STRUCTS
	// ============================================================

	/*
		Structs agrupam vários dados
		em uma única estrutura.
	*/

	pessoa := Pessoa{
		Nome:  "José",
		Idade: 30,
		Ativo: true,
	}

	fmt.Println("\n=== Struct ===")

	fmt.Println(
		"Nome:",
		pessoa.Nome,
	)

	fmt.Println(
		"Idade:",
		pessoa.Idade,
	)

	fmt.Println(
		"Ativo:",
		pessoa.Ativo,
	)


	// ============================================================
	// 36. PONTEIROS
	// ============================================================

	/*
		& retorna o endereço de memória.

		* permite acessar o valor armazenado
		naquele endereço.
	*/

	numero := 10

	ponteiro := &numero

	fmt.Println("\n=== Ponteiros ===")

	fmt.Println(
		"Valor:",
		numero,
	)

	fmt.Println(
		"Endereço:",
		ponteiro,
	)

	fmt.Println(
		"Valor pelo ponteiro:",
		*ponteiro,
	)


	// ============================================================
	// 37. ALTERANDO VALOR PELO PONTEIRO
	// ============================================================

	*ponteiro = 20

	fmt.Println(
		"Novo valor:",
		numero,
	)


	// ============================================================
	// 38. DEFER
	// ============================================================

	/*
		defer adia a execução de uma função
		até o final da função atual.

		É muito utilizado para fechar arquivos,
		conexões ou liberar recursos.
	*/

	defer fmt.Println(
		"\nMensagem executada pelo defer.",
	)


	// ============================================================
	// 39. CALCULANDO MÉDIA
	// ============================================================

	notasAluno := []float64{
		7.5,
		8.0,
		6.5,
	}

	media := calcularMedia(
		notasAluno,
	)

	fmt.Println("\n=== Resultado final ===")

	fmt.Println(
		"Notas:",
		notasAluno,
	)

	fmt.Printf(
		"Média: %.2f\n",
		media,
	)

	if media >= 7 {

		fmt.Println(
			"Situação: Aprovado",
		)

	} else {

		fmt.Println(
			"Situação: Reprovado",
		)
	}


	// ============================================================
	// 40. VERIFICANDO ITEM EM MAP
	// ============================================================

	/*
		Ao acessar um map, podemos receber dois valores:

		valor
		existe

		O segundo é booleano.
	*/

	valorLinguagem, existe :=
		usuario["linguagem"]

	if existe {

		fmt.Println(
			"\nLinguagem encontrada:",
			valorLinguagem,
		)

	} else {

		fmt.Println(
			"Linguagem não encontrada.",
		)
	}


	// ============================================================
	// 41. CRIANDO SLICE COM MAKE
	// ============================================================

	/*
		make() pode criar slices, maps e channels.
	*/

	numeros := make(
		[]int,
		0,
	)

	numeros = append(
		numeros,
		10,
		20,
		30,
	)

	fmt.Println(
		"\nSlice criado com make:",
		numeros,
	)


	// ============================================================
	// 42. PERCORRENDO MAP
	// ============================================================

	fmt.Println("\n=== Percorrendo map ===")

	for chave, valor := range usuario {

		fmt.Println(
			chave,
			":",
			valor,
		)
	}


	// ============================================================
	// FIM DO PROGRAMA
	// ============================================================

	fmt.Println(
		"\nFim dos exemplos.",
	)
}