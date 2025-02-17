const questions = [
    { question: "모임에서 나는?", A: "새로운 사람과 적극적으로 대화", B: "익숙한 사람들과 조용히 있음", type: "EI" },
    { question: "여행을 갈 때 나는?", A: "즉흥적으로 계획", B: "사전 계획 철저히", type: "JP" },
    { question: "친구가 고민을 말할 때 나는?", A: "논리적 해결책 제시", B: "공감과 위로 제공", type: "TF" },
    { question: "새로운 것을 배울 때 나는?", A: "직접 경험이 중요", B: "개념과 원리 먼저 이해", type: "SN" },
    { question: "갑자기 일이 생기면 나는?", A: "침착하게 분석 후 해결", B: "주변과 상의 후 결정", type: "TF" },
    { question: "친구들과의 활동은?", A: "액티브한 활동 선호", B: "조용한 활동 선호", type: "EI" },
    { question: "프로젝트 진행 스타일은?", A: "유연하게 진행", B: "철저한 계획 후 진행", type: "JP" },
    { question: "새로운 사람을 만나면 나는?", A: "현실적 경험에 관심", B: "미래와 꿈에 관심", type: "SN" },
    { question: "스트레스 받을 때 나는?", A: "논리적으로 해결", B: "감정을 나누며 해결", type: "TF" },
    { question: "마감일이 다가오면 나는?", A: "미리 끝내기", B: "마지막까지 몰입", type: "JP" }
];

let currentQuestionIndex = 0;
let mbtiScore = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById("question").innerText = questionData.question;
        document.querySelectorAll(".option")[0].innerText = "A. " + questionData.A;
        document.querySelectorAll(".option")[1].innerText = "B. " + questionData.B;
    } else {
        showResult();
    }
}

function answerQuestion(choice) {
    const questionData = questions[currentQuestionIndex];
    if (choice === "A") {
        mbtiScore[questionData.type[0]]++;
    } else {
        mbtiScore[questionData.type[1]]++;
    }

    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    let mbtiType = "";
    mbtiType += mbtiScore.E > mbtiScore.I ? "E" : "I";
    mbtiType += mbtiScore.S > mbtiScore.N ? "S" : "N";
    mbtiType += mbtiScore.T > mbtiScore.F ? "T" : "F";
    mbtiType += mbtiScore.J > mbtiScore.P ? "J" : "P";

    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = `당신의 MBTI 유형은 ${mbtiType}입니다!`;
}

function restartTest() {
    currentQuestionIndex = 0;
    mbtiScore = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";

    showQuestion();
}

window.onload = showQuestion;
