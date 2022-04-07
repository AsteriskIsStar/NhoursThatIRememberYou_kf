/* 본문 관련 함수 */
function scenarioFunc() {
  if (document.getElementById('scenario-body').style.display === 'block') {
    // 펼치기 버튼 명 수정
    document.getElementById('scenario-body').style.display = 'none';
    document.getElementById('scenario-btn').textContent = '본문 펼치기';
  } else {
    // 접기 버튼 명 수정
    document.getElementById('scenario-body').style.display = 'block';
    document.getElementById('scenario-btn').textContent = '본문 접기';
  }
}

/* 진상 관련 함수 */
function truthFunc() {
  if (document.getElementById('truth-body').style.display === 'block') {
    // 펼치기 버튼 명 수정
    document.getElementById('truth-body').style.display = 'none';
    document.getElementById('truth-btn').textContent = '진상 펼치기';
  } else {
    // 접기 버튼 명 수정
    document.getElementById('truth-body').style.display = 'block';
    document.getElementById('truth-btn').textContent = '진상 접기';
  }
}
