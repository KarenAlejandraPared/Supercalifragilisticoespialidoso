fetch('libros.json')
  .then(response => response.json())
  .then(libros => {
    const secciones = {
      "Derecho": document.getElementById("derecho"),
      "Educación": document.getElementById("educacion"),
      "Psicología": document.getElementById("psicologia"),
      "Literatura Juvenil": document.getElementById("literatura"),
      "Metodología": document.getElementById("metodologia")
      "Filosofía": document.getElementById("Filosofía")
    };

    libros.forEach(libro => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${libro.titulo}</strong> - ${libro.autor} (${libro.formato}) <a href="${libro.enlace}" target="_blank">📥 Descargar</a>`;
      secciones[libro.categoria]?.querySelector("ul")?.appendChild(item);
    });
  });
