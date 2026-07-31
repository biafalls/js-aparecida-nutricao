# JavaScript: Programando na Linguagem da Web

Este repositório foi criado para documentar meus estudos, anotações e códigos desenvolvidos durante o curso "JavaScript: programando na linguagem da web" da Alura.

# 📚 Conceitos estudados

## 📂 Organização do código

### Separação de arquivos JavaScript

Uma boa prática é dividir o código em diferentes arquivos, agrupando funcionalidades relacionadas. Isso torna o projeto mais organizado, facilita a manutenção e permite reutilizar funções.

**Exemplo:**

```text
js/
├── calcula-imc.js
├── form.js
├── remover-paciente.js
└── filtra.js
```

---

### Importação de scripts

Os arquivos JavaScript normalmente são importados ao final da tag `<body>`, garantindo que todo o HTML tenha sido carregado antes da execução do código.

```html
<body>

    ...

    <script src="js/calcula-imc.js"></script>
    <script src="js/form.js"></script>

</body>
```

---

# 🌐 Manipulação do DOM

O **DOM (Document Object Model)** representa toda a estrutura HTML como uma árvore de objetos, permitindo que o JavaScript modifique a página dinamicamente.

---

### document

O objeto `document` representa toda a página HTML.

```javascript
document.title = "Nutricionista";
```

---

### querySelector()

Seleciona o **primeiro elemento** que corresponde ao seletor informado.

```javascript
var titulo = document.querySelector("h1");
```

Também pode buscar por classes e ids.

```javascript
var paciente = document.querySelector(".paciente");
var tabela = document.querySelector("#tabela-pacientes");
```

---

### querySelectorAll()

Retorna todos os elementos encontrados.

```javascript
var pacientes = document.querySelectorAll(".paciente");
```

Como o retorno é uma **NodeList**, normalmente utilizamos `forEach()` para percorrer todos os elementos.

```javascript
pacientes.forEach(function(paciente){
    console.log(paciente);
});
```

---

### createElement()

Cria um novo elemento HTML utilizando JavaScript.

```javascript
var td = document.createElement("td");
```

Nesse momento o elemento ainda não aparece na página.

---

### appendChild()

Insere um elemento dentro de outro.

```javascript
tr.appendChild(td);
```

Resultado:

```html
<tr>
    <td>Maria</td>
</tr>
```

---

### classList

Permite manipular classes CSS.

Adicionar:

```javascript
elemento.classList.add("erro");
```

Remover:

```javascript
elemento.classList.remove("erro");
```

Alternar:

```javascript
elemento.classList.toggle("ativo");
```

---

# ⚡ Eventos

Eventos representam ações realizadas pelo usuário ou pelo navegador.

---

### addEventListener()

Permite "escutar" um evento.

```javascript
botao.addEventListener("click", function(){
    console.log("Botão clicado");
});
```

---

### click

Executado quando o usuário clica em um elemento.

```javascript
botao.addEventListener("click", adicionarPaciente);
```

---

### dblclick

Executado quando ocorre um clique duplo.

Foi utilizado para remover pacientes da tabela.

```javascript
linha.addEventListener("dblclick", function(){
    this.remove();
});
```

---

### input

Disparado sempre que o conteúdo de um campo é alterado.

Muito utilizado para filtros em tempo real.

```javascript
campo.addEventListener("input", function(){
    console.log(this.value);
});
```

---

### Delegação de eventos

Em vez de adicionar um evento para cada elemento, adicionamos apenas um evento no elemento pai.

Isso melhora o desempenho quando existem muitos elementos.

---

# 📝 Formulários

### value

Obtém o valor digitado em um campo.

```javascript
var nome = input.value;
```

---

### name

Permite acessar um campo através do atributo `name`.

```javascript
var peso = formulario.peso.value;
```

---

### reset()

Limpa todos os campos do formulário.

```javascript
formulario.reset();
```

---

### Validação

Antes de adicionar um paciente, verificamos se os dados são válidos.

```javascript
if (peso <= 0) {
    alert("Peso inválido");
}
```

---

# 📦 Arrays e Objetos

---

### push()

Adiciona um elemento ao final de um array.

```javascript
erros.push("Peso inválido");
```

---

### forEach()

Percorre todos os elementos de um array.

```javascript
erros.forEach(function(erro){
    console.log(erro);
});
```

---

## 📦 Objetos

### O que é um objeto?

Objetos são estruturas utilizadas para armazenar informações relacionadas em pares **chave: valor**. Eles permitem agrupar diferentes características de um mesmo elemento em uma única estrutura.

No projeto, cada paciente foi representado por um objeto contendo seus dados.

```javascript
var paciente = {
    nome: "Maria",
    peso: 65,
    altura: 1.70,
    gordura: 18
};
```

Dessa forma, todas as informações referentes ao paciente ficam organizadas em um único objeto.

Também é possível acessar suas propriedades utilizando a **notação por ponto**.

```javascript
console.log(paciente.nome);
console.log(paciente.peso);
```

---

### Criando objetos a partir de um formulário

Durante o cadastro de pacientes, os dados digitados pelo usuário foram transformados em um objeto antes de serem adicionados à tabela.

```javascript
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    };

    return paciente;
}
```

Essa abordagem facilita o transporte das informações entre diferentes funções da aplicação, além de tornar o código mais organizado e reutilizável.

---

## ⚡ Manipulação de Eventos

### `this`

Dentro de uma função utilizada como manipulador de eventos, `this` representa o elemento que disparou o evento.

```javascript
campoFiltro.addEventListener("input", function() {
    console.log(this.value);
});
```

Nesse exemplo, `this` representa o campo de texto onde o usuário está digitando.

Outro exemplo utilizado durante o curso:

```javascript
this.classList.add("fadeOut");
```

Nesse caso, `this` representa a linha da tabela que sofreu o evento.

> **Observação:** Em **Arrow Functions (`=>`)**, o comportamento do `this` é diferente, pois ele herda o contexto da função onde foi declarado.

---

### `event.target`

O objeto `event` contém diversas informações sobre o evento ocorrido.

A propriedade `target` representa o elemento que originou esse evento.

```javascript
console.log(event.target);
```

Se o usuário clicar em um botão, por exemplo, `event.target` será esse botão.

---

### `parentNode`

A propriedade `parentNode` retorna o elemento pai de um determinado nó da página.

Exemplo:

```html
<tr>
    <td>Maria</td>
</tr>
```

Se selecionarmos o elemento `<td>`:

```javascript
event.target.parentNode;
```

o resultado será o elemento `<tr>`, que é seu pai.

---

### `event.target.parentNode`

Durante o curso, essa técnica foi utilizada para remover uma linha inteira da tabela quando o usuário realizava um duplo clique.

```javascript
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
```

Funcionamento:

1. O usuário realiza um duplo clique em uma célula da tabela.
2. `event.target` identifica o elemento (`<td>`) clicado.
3. `parentNode` sobe para a linha (`<tr>`).
4. `remove()` exclui toda a linha da tabela.

Essa técnica é bastante utilizada juntamente com a **delegação de eventos**, permitindo manipular elementos criados dinamicamente.

---

## 🔁 Funções

### Funções nomeadas

São funções que possuem um nome e podem ser reutilizadas em diferentes partes do código.

```javascript
function calculaImc(peso, altura) {
    return peso / (altura * altura);
}
```

Além de facilitar a reutilização, funções nomeadas tornam o código mais legível e organizado.

---

### Funções anônimas

São funções que não possuem um nome e normalmente são utilizadas como **callbacks**, ou seja, funções executadas quando determinado evento acontece.

```javascript
botao.addEventListener("click", function() {
    console.log("Botão clicado");
});
```

Esse tipo de função foi amplamente utilizado durante o curso para tratar eventos do navegador.

---

### Responsabilidade única

Uma das principais boas práticas apresentadas durante o curso foi criar funções pequenas, onde cada uma possui apenas uma responsabilidade.

Em vez de concentrar toda a lógica em uma única função:

```text
Adicionar paciente
        ↓
Validar dados
        ↓
Calcular IMC
        ↓
Criar elementos HTML
        ↓
Adicionar paciente na tabela
```

O código foi dividido em funções menores e reutilizáveis:

- `obtemPacienteDoFormulario()`
- `calculaImc()`
- `montaTr()`
- `montaTd()`
- `adicionaPacienteNaTabela()`
- `exibeMensagensDeErro()`

Essa organização torna o código mais legível, facilita a manutenção e reduz a duplicação de código.

---

# 🔍 Busca dinâmica

### RegExp

Expressões Regulares permitem pesquisar padrões em textos.

```javascript
var regex = new RegExp(campo.value, "i");
```

O parâmetro `"i"` torna a busca **case insensitive**, ignorando letras maiúsculas e minúsculas.

---

### Filtros em tempo real

A busca acontece enquanto o usuário digita.

```javascript
if(regex.test(nome)){
    paciente.classList.remove("invisivel");
}
```

---

# 🌎 Comunicação com APIs

### AJAX

AJAX permite enviar requisições ao servidor sem recarregar a página.

Isso torna a aplicação muito mais dinâmica.

---

### XMLHttpRequest

Objeto responsável por realizar a requisição.

```javascript
var xhr = new XMLHttpRequest();
```

Abrindo uma conexão:

```javascript
xhr.open("GET", "https://api.exemplo.com");
```

Enviando a requisição:

```javascript
xhr.send();
```

---

### JSON

JSON é um formato leve para troca de dados.

Exemplo:

```json
{
    "nome": "Maria",
    "peso": 65
}
```

---

### JSON.parse()

Converte uma String JSON em um objeto JavaScript.

```javascript
var pacientes = JSON.parse(xhr.responseText);
```

---

### Tratamento de erros

Sempre devemos verificar se a requisição foi concluída com sucesso.

```javascript
if(xhr.status == 200){
    console.log("Sucesso!");
}else{
    console.log("Erro ao carregar dados.");
}
```

---
## 🛠️ Métodos importantes utilizados

### preventDefault()

Por padrão, ao clicar em um botão do tipo **submit**, o navegador envia o formulário e recarrega a página. O método `preventDefault()` impede esse comportamento, permitindo que o JavaScript trate os dados antes do envio.

```javascript
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Formulário processado pelo JavaScript.");
});
```

No projeto, esse método foi utilizado para evitar o recarregamento da página ao adicionar um novo paciente, permitindo validar os dados e atualizar a tabela dinamicamente.

---

### textContent

A propriedade `textContent` permite ler ou alterar o conteúdo textual de um elemento HTML.

Lendo um valor:

```javascript
var nome = paciente.querySelector(".info-nome").textContent;
```

Alterando um valor:

```javascript
titulo.textContent = "Lista de Pacientes";
```

Durante o projeto, `textContent` foi utilizado para obter informações da tabela, preencher novas células e alterar textos exibidos na página.

---

### innerHTML

A propriedade `innerHTML` permite acessar ou modificar o conteúdo HTML de um elemento.

```javascript
listaErros.innerHTML = "";
```

No projeto, foi utilizada para limpar a lista de mensagens de erro antes de exibir novas validações, evitando que mensagens antigas permanecessem na tela.

---

### remove()

O método `remove()` exclui um elemento do DOM.

```javascript
event.target.parentNode.remove();
```

Durante o curso, foi utilizado para remover pacientes da tabela quando o usuário realizava um duplo clique sobre uma linha.

---

### setTimeout()

O método `setTimeout()` executa uma função após um intervalo de tempo especificado em milissegundos.

```javascript
setTimeout(function() {
    paciente.remove();
}, 500);
```

No projeto, ele foi utilizado para aguardar a animação de desaparecimento da linha antes de removê-la do DOM, proporcionando uma experiência mais agradável ao usuário.

```javascript
paciente.classList.add("fadeOut");

setTimeout(function() {
    paciente.remove();
}, 500);
```

Essa técnica permite combinar JavaScript com animações CSS, tornando a interface mais fluida.

---

## 💡 Boas práticas aprendidas

- Separar responsabilidades entre arquivos.
- Evitar alterar estilos diretamente pelo JavaScript.
- Utilizar classes CSS para modificar a interface.
- Criar funções pequenas e reutilizáveis.
- Organizar o código por funcionalidades.
- Validar dados antes de manipulá-los.
- Tratar possíveis erros durante requisições.
