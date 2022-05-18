function EnviarDatos() {
    var identificacion = document.getElementById("cedula").value;
    var apellido = document.getElementById("apellidos").value;
    var nombre = document.getElementById("nombres").value;
    var estado = document.getElementById("situacion");
    var sexualalidad = document.getElementById("sexo");
    var cuidad = document.getElementById("residencia").value;
    var celular = document.getElementById("telefono").value;
    var lugar = document.getElementById("direccion").value;
    var email = document.getElementById("correo").value;
    var entrar = false;
    if (identificacion.length < 9 || isNaN(identificacion)) {
        alert("Error al digitar su numero de cédula");
        entrar = true;
        document.getElementById("cedula").focus();
      }
    if (apellido == "") {
      alert("El apellido es obligatorio");
      entrar = true;
      document.getElementById("apellidos").focus();
    }
    if (nombre == "") {
      alert("El nombre es obligatorio");
      entrar = true;
      document.getElementById("nombres").focus();
    }
    if (!estado.checked) {
      alert("Seleccione un estado");
      entrar = true;
      document.getElementById("situacion").focus();
    }
    if (!sexualalidad.checked) {
      alert("Especifique su Sexo");
      entrar = true;
      document.getElementById("sexo").focus();
    }
    if (cuidad == "") {
      alert("Error al digitar su residencia");
      entrar = true;
      document.getElementById("residencia").focus();
    }
    if (celular.length < 10 || isNaN(celular)) {
        alert("Error al digitar su número telefónico");
        entrar = true;
        document.getElementById("telefono").focus();
      }
    if (lugar == "") {
      alert("La direccion es obligatorio");
      entrar = true;
      document.getElementById("direccion").focus();
    }
    if (email == "") {
        alert("Digite una Direccion de Correo");
        entrar = true;
        document.getElementById("correo").focus();
    }
    if (!entrar) {
      alert("Datos Enviados!!");
  }
}