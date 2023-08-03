const javaScript = [
  {
    question: "Qual dos seguintes é um método de array em JavaScript que retorna a quantidade de elementos do array?",
    choices: ["count()", "size()", "length()", "sizeOf()"],
    answer: "length()",
  },

  {
    question: "Qual dos seguintes métodos de string em JavaScript é usado para transformar uma string em letras minúsculas?",
    choices: ["toLowerCase()", "toLower()", "lowerCase()", "convertToLower()"],
    answer: "toLowerCase()",
  },

  {
    question: "Qual é a forma correta de criar uma variável em JavaScript?",
    choices: ["let myVar = 10;", "myVar = 10;", "int myVar = 10;", "variable myVar = 10;"],
    answer: "let myVar = 10;",
  },

  {
    question: "Qual dos seguintes é um operador de comparação em JavaScript que verifica igualdade de valor e tipo?",
    choices: ["===", "==", "=", "!=="],
    answer: "===",
  },

  {
    question: "Qual é a função utilizada para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
    choices: ["dialog()", "popup()", "alert()", "message()"],
    answer: "alert()",
  },

  {
    question: "Em JavaScript, qual estrutura de controle é utilizada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
    choices: ["if", "for", "while", "switch"],
    answer: "while",
  },

  {
    question: "O que a função `parseInt()` faz em JavaScript?",
    choices: ["Converte um valor para inteiro", "Verifica se um valor é do tipo inteiro", "Arredonda um valor para o inteiro mais próximo", "Converte um valor para número decimal"],
    answer: "Converte um valor para inteiro",
  },

  {
    question: "Qual método de array é usado para adicionar um ou mais elementos ao final do array em JavaScript?",
    choices: ["push()", "add()", "insert()", "append()"],
    answer: "push()",
  },

  {
    question: "Como se declara uma função em JavaScript?",
    choices: ["function minhaFuncao() {}", "minhaFuncao() {}", "funcao minhaFuncao() {}", "def minhaFuncao() {}"],
    answer: "function minhaFuncao() {}",
  },

  {
    question: "Qual é o resultado da expressão: 10 % 3?",
    choices: ["1", "3", "0", "2"],
    answer: "1",
  },
];

const java = [

  {
    question: "Qual dos seguintes não é um tipo primitivo em Java?",
    choices: ["int", "float", "string", "char"],
    answer: "string",
  },

  {
    question: "Em Java, qual palavra-chave é usada para criar uma instância de uma classe?",
    choices: ["new", "this", "instanceof", "class"],
    answer: "new",
  },
  {
    question: "Qual é o operador utilizado para comparar igualdade de valor em Java?",
    choices: ["==", "=", "!=", "==="],
    answer: "==",
  },
  {
    question: "Em Java, qual interface é usada para implementar a ordenação de uma lista?",
    choices: ["List", "Map", "Set", "Comparable"],
    answer: "Comparable",
  },
  {
    question: "Como se declara um método que não retorna nenhum valor em Java?",
    choices: ["void myMethod() {}", "int myMethod() {}", "String myMethod() {}", "none myMethod() {}"],
    answer: "void myMethod() {}",
  },
  
  {
    question: "Qual é a forma correta de iniciar um loop infinito em Java?",
    choices: ["for (true)", "for (int i = 0; i < 5; i++)", "while (true)", "loop {}"],
    answer: "while (true)",
  },

  {
    question: "O que o método equals() é usado para fazer em Java?",
    choices: ["Comparar valores primitivos", "Comparar a igualdade de referência de objetos", "Comparar a igualdade de valores de objetos", "Comparar a igualdade de caracteres"],
    answer: "Comparar a igualdade de valores de objetos",
  },
  
  {
    question: "Qual classe é usada para ler dados do usuário a partir do teclado em Java?",
    choices: ["BufferedReader", "Scanner", "FileReader", "InputStreamReader"],
    answer: "Scanner",
  },

  {
    question: "Como declaramos um array (vetor) unidimensional em Java?",
    choices: ["int[] numbers = {1, 2, 3, 4, 5};", "int numbers = {1, 2, 3, 4, 5};", "int numbers = new int[5];", "int numbers[] = (1, 2, 3, 4, 5);"],
    answer: "int[] numbers = {1, 2, 3, 4, 5};",
  },
  
  {
    question: "Qual é o resultado da expressão: (5 + 3) / 2 - 1 * 4?",
    choices: ["5,5", "4", "12", "0"],
    answer: "0",
  },

];


const questions = [];

document.getElementById("choicesQuestion1").addEventListener("click", function () {
  changeQuestionList(javaScript);
});

document.getElementById("choicesQuestion2").addEventListener("click", function () {
  changeQuestionList(java);
});

function changeQuestionList(newQuestions) {

  questions.length = 0;
  questions.push(...newQuestions);
  currentQuestion = 0;
  loadQuestion();
  restartQuiz();
}


const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;

  const choices = shuffleArray(currentQuestionData.choices);
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
  }
  answerChosen = false; 
}

function checkAnswer(e) {
  if (answerChosen) return; 
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    
    alert("Correto!");
    loadNextQuestion();
  } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
      "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    )
    loadNextQuestion();
    ;
  }
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0";
  loadQuestion();
}

function loadNextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(
      "Fim do Quiz! Você acertou " +
      score +
      " de " +
      questions.length +
      " perguntas."
    );
    restartQuiz();
  }
}


function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

loadQuestion();