document.addEventListener("DOMContentLoaded", () => {

    document.body.style.cursor = "none";

  const plane = document.querySelector(".plane");

  document.addEventListener("mousemove", (e) => {
    if (!plane) return;

    plane.style.left = e.clientX + "px";
    plane.style.top = e.clientY + "px";
  });

});

window.setInfo = function(type, btn){
const info = document.getElementById("info");
  if (!info) return;

  document.querySelectorAll(".tab").forEach(t =>
    t.classList.remove("active")
  );

  if(btn) btn.classList.add("active");

  if(type === "curiosidades"){
    info.innerHTML = `
    • La isla del lago tiene una iglesia del siglo XVII.<br><br>

    • Existe una tradición donde los novios suben 99 escalones juntos.<br><br>

    • El lago cambia de color dependiendo del clima y la luz.
    `;
  }

  if(type === "consejos"){
    info.innerHTML = `
    Lake Bled está en zona alpina, por lo que el clima cambia rápido.<br><br>

    • Ve temprano para evitar multitudes.<br><br>

    • Lleva chaqueta incluso en verano.<br><br>

    • El atardecer desde el castillo es el mejor momento para fotos.
    `;
  }

  if(type === "presupuesto"){
    info.innerHTML = `
    • Mochilero: 40–70 USD por día.<br><br>

    • Viaje cómodo: 100–180 USD por día.<br><br>

    • Viaje premium: 250+ USD por día.
    `;
  }

  if(type === "restaurantes"){
    info.innerHTML = `
    • Bled Castle Restaurant → comida tradicional con vista panorámica.<br><br>

    • Public Bar & Vegan Kitchen → ambiente moderno y juvenil.<br><br>

    • Vila Bled Restaurant → experiencia elegante junto al lago.
    `;
  }

}
  