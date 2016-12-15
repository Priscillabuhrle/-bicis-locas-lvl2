

/*var mensajePersonalizado= document.querySelector("span").alert;
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
}*/

/*ejercicio validación con jquery blanca*/

function validarCampoTexto(input){
  var mensaje = "";   
  if($(input).val() == ""){
    mensaje += "Campo Obligatorio"  
  }else{
    if($(input).val().length > 30){
      mensaje += "Debe tener menos de 30 caracteres "
    }
    if($(input).val().charAt(0).toUpperCase() != $(input).val().charAt(0)){
      mensaje += "Primera letra en mayúscula "
    }
    if( ($(input).val().match(/^[a-zA-Z]+$/))){
      mensaje += "solo debo tener letras"
    }
  }

  $(input).siblings().filter("span").remove();
  var span_nombre = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_nombre);
}
function validarCheck(input){
  var mensaje= "";
  if(!($(input).is(":checked"))){
    mensaje+="Debes dar check"
  
    $(input).siblings().filter("span").remove();
  var span_check = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_check);
  }
}

function validarCampoEmail(input){
  var mensaje = "";
  /*parte validar lista bicicletas
  if( $(".form-control option:selected").text() == 0){
    mensaje += "Debe elegir una bicicleta" 
  }*/
    
  if($(input).val() == ""){
    mensaje += "Campo Obligatorio"  
  }else{
    if(!($(input).val().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))){
      mensaje += "Formato Inválido"
    }
  }
  $(input).siblings().filter("span").remove();
  var span_nombre = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_nombre);
}

$(".form-signup").submit(function(e){
  e.preventDefault();
  $(".form-signup *").filter(":input").each(function(){
    console.log($(this).attr('type'));
    if($(this).attr('type') == 'text'){
      validarCampoTexto($(this));
    }else if($(this).attr('type') == 'email'){
      console.log("Hola");
      validarCampoEmail($(this));
    }else if($(this).attr("type")=='checkbox'){
      validarCheck($(this));
    }
  })
});

/*  validar contraseña*/
function validarCampoContrasena(input){
 var mensaje = "";
  if($(input).val() == ""){
    mensaje += "Campo Obligatorio"  
  }else{
    if($(input).val().length > 6){
      mensaje += "Debe tener maximo 6 caracteres "
    }
    if($(input).val()== 123456){
      mensaje += "No pueden ser números correlativos "
    }
    if($(input).val()== "password"){
      mensaje += "Formato inválido "
    }
  }
  
  $(input).siblings().filter("span").remove();
  var span_contrasena = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_contrasena);
} 
//validar lista bicicletas
function validarLista(input){
 var mensaje = "";
  if($(input).val() == null || (input).val() ==0){
    mensaje += "Campo Obligatorio" 

     $(input).siblings().filter("span").remove();
  var span_lista = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_lista);
  } 
}
$(".form-signup").submit(function(e){
  e.preventDefault();
 
  $(".form-signup *").filter(":input").each(function(){
    console.log($(this).attr('password'));
    if($(this).attr('type') == 'password'){
      validarCampoContrasena($(this));
    }
  
});
$(".form-signup *").filter("select").each(function(){
    console.log($(this).attr('select'));
      validarLista($(this));
  })
});
/*  validar lista
function validarLista(select){
   if($(select).val() == 0){
         mensaje += "Debe elegir una bicicleta"  
      }

$(input).siblings().filter("span").remove();
  var span_contrasena = $("<span>" + mensaje + "</span>");
  $(input).parent().append(span_contrasena);
} 
$(".form-signup").submit(function(e){
  e.preventDefault();
  $(".form-signup *").filter(":input").each(function(){
    console.log($(this).attr('password'));
    if($(this).attr('type') == 'password'){
      validarLista($(this));
    }
  })
});*/

/*validar checkbox
function validarcheck(input){
  if($("input.select:checked").length > 0){
    alert("hola");
  }
}*/

/*$(".checkbox").on("click",function(){
    if (($("input[name*='test']:checked").length)<=0) {
        alert("Se enviará la información al correo registrado");
    }
    return true;
});*/

/*jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( ".checkbox" ).validate({
  rules: {
    field: {
      required: true
    }
  }
});*/

/*function validarcheck(input){
   var mensaje = "";
  if($("input[type='checkbox'] ").is('checked')){
    alert("hola");
  }else{
    alert("Debe hacer check");
  }
}
validarcheck();

function validarCheck(){
  return $("input[type='checkbox']")
}*/

