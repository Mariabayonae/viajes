function setInfo(type, btn){

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if(btn) btn.classList.add("active");

  const info = document.getElementById("info");

  if(type === "epoca"){
    info.innerHTML = `
    Entre mayo y septiembre es la mejor época para visitar Lake Bled.<br><br>

    Clima templado entre 15°C y 28°C, días largos y el lago en su color más turquesa.<br><br>

    En primavera y otoño hay menos turistas, ideal si quieres una experiencia más tranquila.
    `;
  }

  if(type === "ropa"){
    info.innerHTML = `
    Lake Bled está en zona alpina, por lo que el clima cambia rápido.<br><br>

    • Ropa por capas<br>
    • Chaqueta impermeable o cortavientos<br>
    • Suéter ligero para la tarde-noche<br>
    • Zapatos deportivos o de senderismo<br><br>

    Evita sandalias si planeas caminar alrededor del lago.
    `;
  }

  if(type === "imperdibles"){
    info.innerHTML = `
    Imperdibles en Lake Bled:<br><br>

    • Isla de Bled con su iglesia<br>
    • Castillo medieval con vista panorámica<br>
    • Caminata completa alrededor del lago (aprox. 6 km)<br>
    • Miradores al amanecer o atardecer<br><br>

    El atardecer es el mejor momento para fotos.
    `;
  }

  if(type === "precios"){
    info.innerHTML = `
    Precios aproximados:<br><br>

    • Alojamiento: 30–300 USD<br>
    • Paseo en bote: 15–25 USD<br>
    • Entrada al castillo: 10–15 USD<br>
    • Comida: 10–40 USD<br><br>

    En temporada alta (verano) los precios suben.
    `;
  }
}

/* ✈️ AVIÓN SIGUIENDO EL MOUSE */
document.addEventListener("mousemove", (e) => {
  const plane = document.querySelector(".plane");
  if (!plane) return;

  plane.style.left = e.clientX + "px";
  plane.style.top = e.clientY + "px";
});