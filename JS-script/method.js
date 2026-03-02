function getElement (id) {
  const value = document.getElementById(id);
  const numeric = value.innerText;
  console.log(numeric);
  return numeric;
}

function getbutton (id) {
  const value = document.getElementById(id);
  console.log(value);
  return value;
}

function showOnlyAlert(btn, type) {
  const card = btn.closest(".card-body");

  const yesBadge = card.querySelector(".yes-status");
  const noBadge = card.querySelector(".no-status");

  yesBadge.classList.add("hidden");
  noBadge.classList.add("hidden");

  if (type === "interview") {
    card.querySelector(".yes-status").classList.remove("hidden");
  } else {
    card.querySelector(".no-status").classList.remove("hidden");
  }
}

function showOnly(value) {
  const blankcard = document.getElementById("empty-panel");

  if (value === true) {
    blankcard.classList.remove("hidden"); 
  } else {
    blankcard.classList.add("hidden");
  }
}

function applyFilter(filterType) {

  const interviewCount = document.getElementById("interview-count").innerText;
  const rejectedCount = document.getElementById("rejected-count").innerText;

  if (filterType === "interview" && interviewCount === "0") {
    showOnly(true);
    return;
  }
  if (filterType === "reject" && rejectedCount === "0") {
    showOnly(true);
    return;
  }

  showOnly(false);

  for (let i = 1; i <= 8; i++) {
    const card = document.getElementById("card-" + i);

    if (filterType === "all") {
      card.classList.remove("hidden");
    } 
    else {
      let badge;
      if (filterType === "interview") {
        badge = card.querySelector(".yes-status");
      } else {
        badge = card.querySelector(".no-status");
      }

      if (badge.classList.contains("hidden") === false) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  }
}