document.addEventListener("DOMContentLoaded", () => {

  const plane = document.querySelector(".plane");

  document.addEventListener("mousemove", (e) => {
    if (!plane) return;
    plane.style.left = e.clientX + "px";
    plane.style.top = e.clientY + "px";
  });

});

function setInfo(type, btn){

  const info = document.getElementById("info");
  if (!info) return;

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if(type === "epoca"){
    info.innerHTML = "Entre mayo y septiembre...";
  }

  if(type === "ropa"){
    info.innerHTML = "Ropa por capas...";
  }

  if(type === "imperdibles"){
    info.innerHTML = "Isla, castillo...";
  }

  if(type === "precios"){
    info.innerHTML = "30–300 USD...";
  }
}