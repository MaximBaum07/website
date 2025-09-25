particlesJS.load(
  "particles-js",
  "../assets/particle_js/particlesjs-config.json",
  function () {
    console.log("particles.js config loaded");
  }
);

document.getElementById("asciiDiv").addEventListener("click", function () {
  window.location.href = "/";
});

updateModPage();

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function updateModPage() {
  const modName = getQueryParam("mod");
  const modHeader = document.getElementById("modHeader");
  const modContent = document.getElementById("modContent");

  if (modName) {
    var cleanModName = modName.replace(/_/g, " ");
    document.title = cleanModName;
    modHeader.textContent = cleanModName;
    modContent.textContent = `Details about the ${cleanModName} mod will appear here.`;
  } else {
    modHeader.textContent = "Mod not specified";
    modContent.textContent = "No mod selected.";
  }
}
