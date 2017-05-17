document.getElementById("anadir-tarea").addEventListener("click",function (){
	
	var boton= "<button id=botonguardar>Guardar</button>"
	var guardar=document.getElementById("guardar-dato")
	/*boton.appendChild(nameBoton);*/
	guardar.innerHTML= boton;

	document.getElementById("botonguardar").addEventListener("click",function(){
		var nombreLista=document.getElementById("anadir-tarea");
		/*var guardarName=document.getElementById("nameList");
		guardarName.innerHTML=nombreLista;*/
		nombreLista.innerHTML=nombreLista.value;
	})
});