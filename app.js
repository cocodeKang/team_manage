// Firebase 설정 (Firebase 콘솔에서 얻은 설정 객체를 사용)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 점수 테이블 참조
const scoreTableBody = document.querySelector("#scoreTable tbody");

// 실시간 데이터베이스에서 데이터 가져오기
database.ref('scores').on('value', (snapshot) => {
    const scores = snapshot.val();
    scoreTableBody.innerHTML = ''; // 테이블 초기화

    for (let team in scores) {
        const row = document.createElement('tr');
        const teamNameCell = document.createElement('td');
        const scoreCell = document.createElement('td');

        teamNameCell.textContent = team;
        scoreCell.textContent = scores[team];

        row.appendChild(teamNameCell);
        row.appendChild(scoreCell);
        scoreTableBody.appendChild(row);
    }
});
