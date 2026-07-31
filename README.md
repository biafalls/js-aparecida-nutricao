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

### Organização por funcionalidades

Cada arquivo deve possuir apenas uma responsabilidade.

| Arquivo | Responsabilidade |
|---------|------------------|
| calcula-imc.js | Calcula o IMC dos pacientes |
| form.js | Adiciona novos pacientes |
| remover-paciente.js | Remove pacientes |
| filtra.js | Filtra pacientes |

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

### Objetos

Objetos agrupam informações relacionadas.

```javascript
var paciente = {
    nome: "Maria",
    peso: 65,
    altura: 1.70
};
```

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

## 💡 Boas práticas aprendidas

- Separar responsabilidades entre arquivos.
- Evitar alterar estilos diretamente pelo JavaScript.
- Utilizar classes CSS para modificar a interface.
- Criar funções pequenas e reutilizáveis.
- Organizar o código por funcionalidades.
- Validar dados antes de manipulá-los.
- Tratar possíveis erros durante requisições.
