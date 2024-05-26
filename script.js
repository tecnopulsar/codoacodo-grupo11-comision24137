document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (event) {
    // event.preventDefault();
    let form = event.target;
    let valid = true;
    ["nombre", "email", "telefono", "curso", "mensaje"].forEach(function (id) {
      let element = document.getElementById(id);
      if (!element.value.trim()) {
        valid = false;
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    });

    // Check radio buttons
    let preferenciaRadios = form.querySelectorAll('input[name="preferencia"]');
    let preferenciaChecked = false;
    preferenciaRadios.forEach(function (radio) {
      if (radio.checked) {
        preferenciaChecked = true;
      }
    });
    if (!preferenciaChecked) {
      valid = false;
      alert("Por favor, selecciona una preferencia de contacto.");
    }

    if (!valid) {
      event.preventDefault();
      alert("Por favor, completa todos los campos obligatorios.");
    }
  });
