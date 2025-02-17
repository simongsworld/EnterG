const questions = [
    { question: "���ӿ��� ����?", A: "���ο� ����� ���������� ��ȭ", B: "�ͼ��� ������ ������ ����", type: "EI" },
    { question: "������ �� �� ����?", A: "���������� ��ȹ", B: "���� ��ȹ ö����", type: "JP" },
    { question: "ģ���� ����� ���� �� ����?", A: "���� �ذ�å ����", B: "������ ���� ����", type: "TF" },
    { question: "���ο� ���� ��� �� ����?", A: "���� ������ �߿�", B: "����� ���� ���� ����", type: "SN" },
    { question: "���ڱ� ���� ����� ����?", A: "ħ���ϰ� �м� �� �ذ�", B: "�ֺ��� ���� �� ����", type: "TF" },
    { question: "ģ������� Ȱ����?", A: "��Ƽ���� Ȱ�� ��ȣ", B: "������ Ȱ�� ��ȣ", type: "EI" },
    { question: "������Ʈ ���� ��Ÿ����?", A: "�����ϰ� ����", B: "ö���� ��ȹ �� ����", type: "JP" },
    { question: "���ο� ����� ������ ����?", A: "������ ���迡 ����", B: "�̷��� �޿� ����", type: "SN" },
    { question: "��Ʈ���� ���� �� ����?", A: "�������� �ذ�", B: "������ ������ �ذ�", type: "TF" },
    { question: "�������� �ٰ����� ����?", A: "�̸� ������", B: "���������� ����", type: "JP" }
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
    document.getElementById("result").innerText = `����� MBTI ������ ${mbtiType}�Դϴ�!`;
}

function restartTest() {
    currentQuestionIndex = 0;
    mbtiScore = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";

    showQuestion();
}

window.onload = showQuestion;
