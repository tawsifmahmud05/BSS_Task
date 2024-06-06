function showProgress() {
  var loadingContainer = document.getElementById("loadingContainer");
  var progressBar = document.getElementById("progressBar");

  loadingContainer.style.visibility = "visible";
  progressBar.style.animation = "progress 3s linear forwards";

  progressBar.addEventListener("animationend", function () {
    // progressBar.setAttribute("aria-valuenow", 100);
    // setTimeout(function () {
    hideProgress(loadingContainer, progressBar);
    // }, 5);
  });
}

function updateProgressBar(progress, progressBar) {
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
}

function hideProgress(loadingContainer, progressBar) {
  loadingContainer.style.visibility = "hidden";
  progressBar.style.width = "0%";
  progressBar.setAttribute("aria-valuenow", 0);
  document.getElementById("heading").classList.add("black-bg");
  document.getElementById("progressBar").style.animation = "";
}

document
  .getElementById("btnShowProgress")
  .addEventListener("click", showProgress);

document.getElementById("btnReset").addEventListener("click", function () {
  document.getElementById("heading").classList.remove("black-bg");
});
