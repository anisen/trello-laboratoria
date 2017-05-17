document.getElementById("anadir-tarea").addEventListener("click",function (){
	//input que al apretarlo aparece el boton guardar
	var boton= "<button id=botonguardar>Guardar</button>"
	var guardar=document.getElementById("guardar-dato")
	/*boton.appendChild(nameBoton);*/
	guardar.innerHTML= boton;
    //imprime lo que pongo en el imput
	document.getElementById("botonguardar").addEventListener("click",function(){
		var nombreLista=document.getElementById("anadir-tarea").value;
		var lista=document.getElementById("nameList");
		lista.innerHTML=nombreLista;
		//tratando de que me deje el texto del input y me remueva el input y el boton pero no me sale nada :c
		/*document.getElementById("botonguardar").removeEventListener("click",function(){
			document.getElementById("anadir-tarea");
		})*/
      lista.addEventListener("mouseover",function(){
      	var input2= "<input type=text id=input2 placeholder='Añade elementos a tu lista'>";
      	var primeLista=document.getElementById("primera-lista");
      	var botondeLista="<button id=botonParaAgregarALaLista>Añadir tarjeta</button>"
      	primeLista.innerHTML=input2+botondeLista;

      })
      
	})

})

