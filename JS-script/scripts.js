var totalCount = getElement("total-count");
var interviewCount = getElement("interview-count");
var rejectCount = getElement("rejected-count");

function handleInterview(btn) {
  const card = btn.closest(".card-body");
  const interviewBox = document.getElementById("interview-count");
  const rejectBox = document.getElementById("rejected-count");

  if (card.querySelector(".yes-status").classList.contains("hidden")) {

    if (card.querySelector(".no-status").classList.contains("hidden") === false) {
      rejectBox.innerText = Number(rejectBox.innerText) - 1;
    }

    interviewBox.innerText = Number(interviewBox.innerText) + 1;
    showOnlyAlert(btn, "interview");
  }
}

function handleReject(btn) {
  const card = btn.closest(".card-body");
  const interviewBox = document.getElementById("interview-count");
  const rejectBox = document.getElementById("rejected-count");

  if (card.querySelector(".no-status").classList.contains("hidden")) {

    if (card.querySelector(".yes-status").classList.contains("hidden") === false) {
      interviewBox.innerText = Number(interviewBox.innerText) - 1;
    }

    rejectBox.innerText = Number(rejectBox.innerText) + 1;
    showOnlyAlert(btn, "reject");
  }
}
  

