particlesJS.load(
  "particles-js",
  "/assets/particle_js/particlesjs-config.json",
  function () {
    console.log("particles.js config loaded");
  }
);

document.getElementById("asciiDiv").addEventListener("click", function () {
  window.location.href = "/";
});
