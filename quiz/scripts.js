const capitais = [
  {
    question: "Qual é a capital do México?",
    choices: ["Guadalajara", "Monterrey", "Cidade do México", "Puebla"],
    answer: "Cidade do México",
  },
  {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "Qual é a capital da Argentina?",
    choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
    answer: "Buenos Aires",
  },
  {
    question: "Qual é a capital da França?",
    choices: ["Roma", "Madri", "Paris", "Londres"],
    answer: "Paris",
  },
  {
    question: "Qual é a capital da Espanha?",
    choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
    answer: "Madri",
  },
  {
    question: "Qual é a capital da Itália?",
    choices: ["Veneza", "Milão", "Roma", "Nápoles"],
    answer: "Roma",
  },
  {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
  },
  {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
  },
  {
    question: "Qual é a capital do Japão",
    choices: ["Osaka", "Tóquio", "Kyoto", "Yokohama"],
    answer: "Tóquio",
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
  changeQuestionList(capitais);
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
  answerChosen = false; // reset flag when loading new question
}

function checkAnswer(e) {
  if (answerChosen) return; // prevent multiple answers
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
  } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
      "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
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

nextButton.addEventListener("click", () => {
  if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
  }

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
});

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