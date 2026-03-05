const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyPanel = document.getElementById("empty-panel");
const statusCount = document.getElementById("job-count");
let currentTab = "all";



function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);

    if ( tab === t ) {
      console.log (t + " tab is selected");
    }
    
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];

  for ( const p of pages) {
    p.classList.add("hidden");
  }
  
  emptyPanel.classList.add("hidden");

  if ( tab === "all") {
    allContainer.classList.remove("hidden");
    
    if (jobCardContainer.children.length < 1) {
      emptyPanel.classList.remove("hidden");
    }
  }
  else if ( tab === "interview") {
    interviewContainer.classList.remove("hidden");

    if ((interviewContainer.children.length - 1) < 1) {
      emptyPanel.classList.remove("hidden");
    }
  }
  else {
    rejectedContainer.classList.remove("hidden");

    if ((rejectedContainer.children.length - 1) < 1) {
      emptyPanel.classList.remove("hidden");
    }
  }


  totalStat();
}

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

document.
  addEventListener("click", function(event){
    const clickedElement = event.target;
    // console.log(clickedElement.parentNode.parentNode);
    const card = clickedElement.closest(".card");

    const yesAlert = card.querySelector(".yes-status");
    const noAlert = card.querySelector(".no-status");

    yesAlert.classList.add("hidden");
    noAlert.classList.add("hidden");

    console.log(card);

    if (clickedElement.classList.contains("interview")){
      console.log("interview btn clicked");

      yesAlert.classList.remove("hidden");
      noAlert.classList.add("hidden");

      interviewContainer.appendChild(card);
      totalStat();
    }
    if (clickedElement.classList.contains("rejected")){
      console.log("rejected btn clicked");

      noAlert.classList.remove("hidden");
      yesAlert.classList.add("hidden");

      rejectedContainer.appendChild(card);
      totalStat();
    }
    if (clickedElement.classList.contains("delete")){
      console.log("delete btn clicked");
      card.remove();
      totalStat();
    }
  });


  function totalStat() {
    const jobCardContainer = document.getElementById("job-card");

    // totalCount.innerText = jobCardContainer.children.length;

    // interviewCount.innerText = interviewContainer.children.length - 1;

    // rejectedCount.innerText = rejectedContainer.children.length - 1;


    const count = {
      all: jobCardContainer.children.length,
      interview: interviewContainer.children.length - 1,
      rejected: rejectedContainer.children.length - 1,
    }

    totalCount.innerText = count["all"];
    interviewCount.innerText = count["interview"];
    rejectedCount.innerText = count["rejected"];

    statusCount.innerText = count[currentTab];

    if (count[currentTab] < 1) {
      emptyPanel.classList.remove("hidden");
    }
    else {
      emptyPanel.classList.add("hidden");
    }

  }

  totalStat();