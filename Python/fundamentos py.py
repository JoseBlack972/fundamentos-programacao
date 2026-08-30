"""
app.py
Arquivo de exemplo para estudo dos principais fundamentos da linguagem Python.

Conteúdos abordados:
- Operadores
- Funções
- Entrada e saída de dados
- Manipulação de dados textuais
- Laços de repetição
- Tratamento de exceções

Observação:
Este arquivo tem finalidade didática. Os exemplos estão organizados em seções
e comentados para facilitar a leitura e o estudo.
"""


# ============================================================
# 1. ENTRADA E SAÍDA DE DADOS
# ============================================================

# print() é utilizado para exibir informações na tela.
print("=== Exemplo de fundamentos em Python ===")

# input() recebe uma informação digitada pelo usuário.
# O valor retornado por input() é sempre do tipo texto (str).
nome = input("Digite seu nome: ")

# Exibe o conteúdo armazenado na variável.
print("Olá,", nome)


# ============================================================
# 2. VARIÁVEIS E TIPOS DE DADOS
# ============================================================

# Python identifica automaticamente o tipo da variável.
idade = 30              # int   -> número inteiro
altura = 1.70           # float -> número decimal
programador = True      # bool  -> verdadeiro ou falso
linguagem = "Python"    # str   -> texto

print("Idade:", idade)
print("Altura:", altura)
print("Programador:", programador)
print("Linguagem:", linguagem)


# ============================================================
# 3. OPERADORES ARITMÉTICOS
# ============================================================

numero1 = 10
numero2 = 3

# Operadores matemáticos básicos.
soma = numero1 + numero2
subtracao = numero1 - numero2
multiplicacao = numero1 * numero2
divisao = numero1 / numero2
divisao_inteira = numero1 // numero2
resto = numero1 % numero2
potencia = numero1 ** numero2

print("\n=== Operadores aritméticos ===")
print("Soma:", soma)
print("Subtração:", subtracao)
print("Multiplicação:", multiplicacao)
print("Divisão:", divisao)
print("Divisão inteira:", divisao_inteira)
print("Resto da divisão:", resto)
print("Potência:", potencia)


# ============================================================
# 4. OPERADORES DE COMPARAÇÃO
# ============================================================

# Operadores de comparação retornam True ou False.
print("\n=== Operadores de comparação ===")
print(numero1 == numero2)   # Igual
print(numero1 != numero2)   # Diferente
print(numero1 > numero2)    # Maior que
print(numero1 < numero2)    # Menor que
print(numero1 >= numero2)   # Maior ou igual
print(numero1 <= numero2)   # Menor ou igual


# ============================================================
# 5. OPERADORES LÓGICOS
# ============================================================

idade_usuario = 20
possui_carteira = True

# and: todas as condições devem ser verdadeiras.
pode_dirigir = idade_usuario >= 18 and possui_carteira

# or: pelo menos uma condição deve ser verdadeira.
tem_acesso = idade_usuario >= 18 or possui_carteira

# not: inverte um valor booleano.
nao_possui_carteira = not possui_carteira

print("\nPode dirigir:", pode_dirigir)
print("Tem acesso:", tem_acesso)
print("Não possui carteira:", nao_possui_carteira)


# ============================================================
# 6. ESTRUTURAS CONDICIONAIS
# ============================================================

# if, elif e else permitem tomar decisões no programa.
nota = 7.5

if nota >= 7:
    print("\nAluno aprovado")
elif nota >= 5:
    print("\nAluno em recuperação")
else:
    print("\nAluno reprovado")


# ============================================================
# 7. FUNÇÕES
# ============================================================

# Funções agrupam trechos de código que podem ser reutilizados.
def calcular_cubo(numero):
    """Retorna o número elevado ao cubo."""
    return numero * numero * numero


resultado_cubo = calcular_cubo(3)
print("\n3 ao cubo é:", resultado_cubo)


def somar(a, b):
    """Recebe dois valores e retorna a soma."""
    return a + b


print("Soma pela função:", somar(10, 5))


# ============================================================
# 8. MANIPULAÇÃO DE DADOS TEXTUAIS (STRINGS)
# ============================================================

texto = "  Aprendendo Python  "

print("\n=== Manipulação de textos ===")

# strip() remove espaços extras no início e no final.
texto_limpo = texto.strip()
print("Texto sem espaços extras:", texto_limpo)

# upper() converte o texto para letras maiúsculas.
print("Maiúsculas:", texto_limpo.upper())

# lower() converte o texto para letras minúsculas.
print("Minúsculas:", texto_limpo.lower())

# replace() substitui partes do texto.
print("Texto alterado:", texto_limpo.replace("Python", "Programação"))

# len() informa a quantidade de caracteres.
print("Quantidade de caracteres:", len(texto_limpo))

# Acesso a caracteres pelo índice.
print("Primeiro caractere:", texto_limpo[0])

# Verifica se uma palavra existe no texto.
print("'Python' está no texto?", "Python" in texto_limpo)


# ============================================================
# 9. F-STRINGS
# ============================================================

# f-strings facilitam a inserção de variáveis dentro de textos.
nome_usuario = "José"
idade_usuario = 30

mensagem = f"{nome_usuario} possui {idade_usuario} anos."
print("\n", mensagem)


# ============================================================
# 10. LISTAS
# ============================================================

# Listas armazenam vários valores em uma única variável.
linguagens = ["Python", "Java", "JavaScript"]

# append() adiciona um item ao final da lista.
linguagens.append("SQL")

print("\nLista de linguagens:", linguagens)
print("Primeira linguagem:", linguagens[0])


# ============================================================
# 11. DICIONÁRIOS
# ============================================================

# Dicionários armazenam informações no formato chave: valor.
usuario = {
    "nome": "José",
    "idade": 30,
    "linguagem": "Python"
}

print("\nNome do usuário:", usuario["nome"])
print("Linguagem:", usuario["linguagem"])


# ============================================================
# 12. LAÇO DE REPETIÇÃO FOR
# ============================================================

# for é utilizado para percorrer sequências ou repetir operações.
print("\n=== Laço for ===")

for numero in range(1, 6):
    print("Número:", numero)


# Percorrendo uma lista.
for linguagem in linguagens:
    print("Linguagem:", linguagem)


# ============================================================
# 13. LAÇO DE REPETIÇÃO WHILE
# ============================================================

# while repete um bloco enquanto uma condição for verdadeira.
print("\n=== Laço while ===")

contador = 1

while contador <= 5:
    print("Contador:", contador)
    contador += 1


# ============================================================
# 14. BREAK E CONTINUE
# ============================================================

# break encerra o laço.
print("\n=== Exemplo com break ===")

for numero in range(1, 10):
    if numero == 5:
        break
    print(numero)


# continue pula a repetição atual e passa para a próxima.
print("\n=== Exemplo com continue ===")

for numero in range(1, 6):
    if numero == 3:
        continue
    print(numero)


# ============================================================
# 15. CONVERSÃO DE TIPOS
# ============================================================

# int() converte para inteiro.
texto_numero = "100"
numero_convertido = int(texto_numero)

# float() converte para número decimal.
valor_decimal = float("10.5")

# str() converte para texto.
numero_texto = str(123)

print("\nNúmero convertido:", numero_convertido)
print("Decimal convertido:", valor_decimal)
print("Número convertido para texto:", numero_texto)


# ============================================================
# 16. TRATAMENTO DE EXCEÇÕES
# ============================================================

# try é utilizado para executar um código que pode gerar erro.
# except trata o erro caso ele aconteça.

print("\n=== Tratamento de exceções ===")

try:
    numero = int(input("Digite um número inteiro: "))
    resultado = 100 / numero
    print("Resultado:", resultado)

except ValueError:
    # Ocorre quando o usuário digita algo que não pode virar inteiro.
    print("Erro: digite apenas números inteiros.")

except ZeroDivisionError:
    # Ocorre quando tentamos dividir um número por zero.
    print("Erro: não é possível dividir por zero.")

else:
    # Executado somente quando nenhum erro ocorre.
    print("Operação realizada com sucesso.")

finally:
    # Executado sempre, com ou sem erro.
    print("Fim da tentativa de cálculo.")


# ============================================================
# 17. EXEMPLO DE FUNÇÃO COM TRATAMENTO DE ERRO
# ============================================================

def dividir(a, b):
    """Divide dois números e trata divisão por zero."""
    try:
        return a / b
    except ZeroDivisionError:
        return "Não é possível dividir por zero."


print("\nDivisão 10 / 2:", dividir(10, 2))
print("Divisão 10 / 0:", dividir(10, 0))


# ============================================================
# 18. EXEMPLO COMBINANDO VÁRIOS CONCEITOS
# ============================================================

def calcular_media(notas):
    """
    Recebe uma lista de notas e retorna a média.
    Demonstra função, lista, soma e tratamento básico de dados.
    """
    if len(notas) == 0:
        return 0

    return sum(notas) / len(notas)


notas_aluno = [7.5, 8.0, 6.5]
media = calcular_media(notas_aluno)

print("\n=== Resultado final ===")
print(f"Notas: {notas_aluno}")
print(f"Média: {media:.2f}")

if media >= 7:
    print("Situação: Aprovado")
else:
    print("Situação: Reprovado")


# ============================================================
# FIM DO ARQUIVO
# ============================================================

print("\nFim dos exemplos.")
