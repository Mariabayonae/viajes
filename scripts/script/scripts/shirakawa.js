function setInfo(type, btn){

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if(btn) btn.classList.add("active");

  const info = document.getElementById("info");

  if(type === "epoca"){
    info.innerHTML = `
    Invierno: el pueblo se cubre de nieve y parece un cuento.<br><br>
    Verano: verde, tranquilo y perfecto para caminar.<br><br>
    Otoño: colores naranjas increíbles para fotos.
    `;
  }

  if(type === "ropa"){
    info.innerHTML = `
    Invierno:<br>
    - Abrigo grueso<br>
    - Botas impermeables<br>
    - Guantes y gorro<br><br>

    Resto del año:<br>
    - Ropa cómoda<br>
    - Chaqueta ligera
    `;
  }

  if(type === "imperdibles"){
    info.innerHTML = `
    • Mirador Shiroyama<br>
    • Casas tradicionales gassho-zukuri<br>
    • Iluminaciones de invierno<br>
    • Caminatas por el pueblo
    `;
  }

  if(type === "precios"){
    info.innerHTML = `
    Transporte: 20–60 USD<br>
    Alojamiento: 80–250 USD<br>
    omida: 10–30 USD<br>
    Museos: 3–10 USD
    `;
  }
}