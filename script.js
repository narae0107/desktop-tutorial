
let G = 0, H = 0, R = 0, S = 0;
let currentQuestion = 0;

const quizDiv = document.getElementById('quiz');

const questions = [
  {
    question: 'Q1) 새벽 아니면 해질녘?',
    options: ['새벽', '해질녘'],
    scores: [[1,0,1,0], [0,1,0,1]]
  },
  {
    question: 'Q2) 만약 죽는다면, 사람들이 어떻게 기억해주기를 원하나요?',
    options: ['선한 자', '위대한 자', '현명한 자', '용감한 자'],
    scores: [[0,2,0,0], [0,0,0,2], [0,0,2,0], [2,0,0,0]]
  },
  {
    question: 'Q3) 어떤 악기의 소리를 좋아하나요?',
    options: ['바이올린', '트럼펫', '피아노', '드럼'],
    scores: [[0,0,0,4], [0,4,0,0], [0,0,4,0], [4,0,0,0]]
  }
];

function startQuiz() {
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('bgm').play(); // 버튼 클릭 시 배경음악 재생
  G=H=R=S=0;
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  let html = `<h2>${q.question}</h2>`;
  q.options.forEach((opt, idx) => {
    html += `<button onclick="answer(${idx})">${opt}</button><br>`;
  });
  quizDiv.innerHTML = html;
}

function answer(idx) {
  const scores = questions[currentQuestion].scores[idx];
  G += scores[0];
  H += scores[1];
  R += scores[2];
  S += scores[3];
  currentQuestion++;
  showQuestion();
}

function showResult() {
  let result = '';
  if (G >= H && G >= R && G >= S) {
    result = `🦁 그리핀도르!<br>용기와 모험심, 정의를 중시하는 기숙사예요.<br>대표: 해리포터, 헤르미온느, 론`;
  } else if (R >= H && R >= S) {
    result = `🦅 래번클로!<br>지혜와 지식을 추구하는 이들의 기숙사랍니다.<br>대표: 루나 러브굿, 초 챙`;
  } else if (H >= S) {
    result = `🦡 후플푸프!<br>성실하고 인내심 강한 이들이 모이는 따뜻한 기숙사예요.<br>대표: 세드릭 디고리`;
  } else {
    result = `🐍 슬리데린!<br>야망과 리더십, 자기 목표에 집착하는 사람들이 모이는 곳이에요.<br>대표: 드레이코 말포이, 스네이프`;
  }
  quizDiv.innerHTML = `<h2>✨ 당신의 기숙사는...! ✨</h2><p>${result}</p>`;
}
