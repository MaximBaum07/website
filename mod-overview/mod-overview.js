var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (width <= 600) {
  particlesJS.load(
    "particles-js",
    "/assets/particle_js/particlesjs-mobile-config.json",
    function () {
      console.log("particles.js config loaded");
    }
  );
} else {
  particlesJS.load(
    "particles-js",
    "/assets/particle_js/particlesjs-config.json",
    function () {
      console.log("particles.js config loaded");
    }
  );
}

document.getElementById("asciiDiv").addEventListener("click", function () {
  window.location.href = "/";
});
