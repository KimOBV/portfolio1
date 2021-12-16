function ETChangelog() {
  var ETBtn = document.getElementById("ETBtn");
  const logSN = document.getElementById(`logET`);

  if (logSN.style.display === "block") {
    logET.style.display = "none";
    ETBtn.innerHTML = "See Changelog";
  } else {
    logET.style.display = "block";
    ETBtn.innerHTML = "Hide Changelog";
  }
}
function RDChangelog() {
    var SNBtn = document.getElementById("RDBtn");
    const logRD = document.getElementById(`logRD`);
  
    if (logRD.style.display === "block") {
      logRD.style.display = "none";
      SNBtn.innerHTML = "See Changelog";
    } else {
      logRD.style.display = "block";
      RDBtn.innerHTML = "Hide Changelog";
    }
  }
  function SNChangelog() {
    var SNBtn = document.getElementById("SNBtn");
    const logSN = document.getElementById(`logSN`);
  
    if (logSN.style.display === "block") {
      logSN.style.display = "none";
      SNBtn.innerHTML = "See Changelog";
    } else {
      logSN.style.display = "block";
      SNBtn.innerHTML = "Hide Changelog";
    }
  }
  