

var mensajePersonalizado= document.querySelector("span").alert;
  //validacion del formulario
function validateForm() {
  //validar nombre
  var nombre= document.getElementById("name");
  if(nombre.value == null || nombre.value.length==0 || /^\s+$/.test(nombre.value)){
     //alert ("Debe ingresar su nombre");
    var cajaMadre = document.getElementsByClassName ("name-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Debe ingresar su nombre");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false;
  }
   //solo letras
   else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
    // alert ("Nombre no valido, ingresar solo letras");
    var cajaMadre = document.getElementsByClassName ("name-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Nombre no valido, ingresar solo letras");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return true;
  }    
  //primera mayúscula
  else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
    //alert ("La primera letra debe ser mayúscula");
    var cajaMadre = document.getElementsByClassName ("name-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("La primera letra debe ser mayúscula");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false;
  }
  //validar input apellido
  var apellido= document.getElementById("lastname");
  if(apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value)){
    //alert("Debe ingresar Apellido");
    var cajaMadre = document.getElementsByClassName ("lastname-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Debe ingresar Apellido");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false;
  }
  else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
    //alert ("Debe ingresar solo letras");
    var cajaMadre = document.getElementsByClassName ("lastname-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Debe ingresar solo letras");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return true;
  }
  else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
    //alert ("La primera letra debe ser en mayúscula");
    var cajaMadre = document.getElementsByClassName ("lastname-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("La primera letra debe ser en mayúscula");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false;
  }

  //validar correo
  var correo= document.getElementById("input-email");
  if(correo.value === null || correo.value.length == 0 || /^\s+$/.test(correo.value)){
    //alert("Debe ingresar su correo");
    var cajaMadre = document.getElementsByClassName ("email-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Debe ingresar su correo");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false;
  }
  var simb= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!simb.test(correo.value)){
    //alert ("Ingresar correo electrónico valido");
    var cajaMadre = document.getElementsByClassName ("email-container")[0];
    var cajaTexto = document.createElement("span");
    var texto = document.createTextNode("Ingresar correo electrónico valido");
    cajaTexto.appendChild(texto);
    cajaMadre.appendChild(cajaTexto);
    return false; 
  }

  //contraseña 
  var contrasena = document.getElementById("input-password");
  function contrasenaValida(){
    if(contrasena.value.length ==0){
      //alert("Tiene que ingresar contraseña");
      var cajaMadre = document.getElementsByClassName("form-group")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("Tiene que ingresar contraseña");
      cajaTexto.appendChild(texto);
      cajaMadre.appendChild(cajaTexto);
      return false;
    }
    if (contrasena.value.length < 6){
      var cajaMadre = document.getElementsByClassName("form-group")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("La contraseña debe ser mínimo 6 dígitos ");
      cajaTexto.appendChild(texto);
      cajaMadre.appendChild(cajaTexto);
      return false;
    } else if (contrasena.value=="contrasena"){
      var cajaMadre = document.getElementsByClassName("form-group")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("Ingresar contraseña valida");
      cajaTexto.appendChild(texto);
      cajaMadre.appendChild(cajaTexto);
      return false; 
    } else if (contrasena.value =="123456"){
     var cajaMadre = document.getElementsByClassName("form-group")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("No deben ser números correlativos");
      cajaTexto.appendChild(texto);
      cajaMadre.appendChild(cajaTexto);
      return false;
    } else if (contrasena.value =="098754"){
      var cajaMadre = document.getElementsByClassName("form-group")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("Ingresar contraseña valida");
      cajaTexto.appendChild(texto);
      cajaMadre.appendChild(cajaTexto);
      return false;
    }else{
      return true;
    }
  }
  contrasenaValida();
  // validar lista

  function eleccion(){
    var form= document.querySelector("select").value;
    if(form == null || form == 0){
      var listapb = document.getElementsByClassName("form-group input-box")[1].classList.add("form");
      var cajaEleccion= document.getElementsByClassName("form")[0];
      var cajaTexto = document.createElement("span");
      var texto = document.createTextNode("Elija una bicicleta");
      cajaTexto.appendChild(texto);
      cajaEleccion.appendChild(cajaTexto);
      return false;
    }else{
      return true;
    }
  }
  eleccion();
}
 