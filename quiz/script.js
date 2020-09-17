const quizData = [
  {
    question: "What is the collective noun for a group of unicorns?",
    a: "a venture",
    b: "a blessing",
    c: "a herd",
    d: "an army",
    answer: "b",
  },
  {
    question: "What is Scooby Doo’s full name?",
    a: "Scoobolt Drool",
    b: "Scoo Bartholomew Doo",
    c: "Scoobert Doo",
    d: "Scoobury Doo",
    answer: "c",
  },
  {
    question: "Who entered a contest to find his own look-alike and came 3rd?",
    a: "Charlie Chaplin",
    b: "Daniel Radcliffe",
    c: "John F Kennedy",
    d: "Bill Gates",
    answer: "a",
  },
  {
    question: "Which bird is nicknamed The Laughing Jackass?",
    a: "Arctic Tern",
    b: "Lyre Bird",
    c: "Kookaburra",
    d: "Pileated Woodpecker",
    answer: "c",
  },
  {
    question: "It's illegal in Texas to put what on your neighbour’s Cow?",
    a: "Flag of Texas",
    b: "Cow dung",
    c: "Your wife",
    d: "Graffiti",
    answer: "d",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

const getSelectedAnswer = () => {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

const deselectAnswer = () => {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const answer = getSelectedAnswer();

  if (answer) {
    if (answer === quizData[currentQuiz].answer) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2 class="summary">You answered ${score} questions correctly.</h2>
      <button onclick ="location.reload()">Reload</button>`;
    }
  }
});

loadQuiz();
