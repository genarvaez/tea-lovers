//arreglo de objetos que guardará a los clientes
var cliente = [];
//constructor para crear mis clientes
function Clientes (nombre, email, direccion){
	this.nombre = nombre;
	this.email = email;
	this.direccion = direccion;
}
//Traigo mis valores y elementos del formulario
var button = document.getElementById("button");
button.addEventListener("click", function(){
	;
	var nombre = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("direccion").value;
	var indice = document.getElementById("selected").selectedIndex;
	//condiciono que no haya espacios en blanco.
	if(nombre== "" || email=="" || direccion==""){
			alert("No puede haber campos vacíos");
			return
	}
	else if(indice == null || indice == 0 ){
		alert("Debe seleccionar una opción válida")
		return
	}
	else if(!document.getElementById("check").checked){
		alert('Debe subscribirse a nuestro newsletter para continuar');
		return
	}
	//agrego al usuario a mi arreglo como un objeto
	cliente.push(new Clientes(nombre,email,direccion));
	alert("GRACIAS POR SUSCRIBIRTE")
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("direccion").value = ""
})
