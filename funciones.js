function encriptar (){
	var texto = document.querySelector("#txtpalabraTraducir").value;
	var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	document.querySelector(".txt-palabraTraducida").value= textoEncriptado;
	
	/*document.querySelector("#txtpalabraTraducir").value;*/
	
}

var  boton1 = document.querySelector("#btn-Encriptar");
boton1.onclick=encriptar;


function desencriptar (){
	var texto2= document.querySelector("#txtpalabraTraducir").value;
	var textoDesencriptado = texto2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.querySelector(".txt-palabraTraducida").value = textoDesencriptado;
	/*document.querySelector("#txtpalabraTraducir").value;*/
}

var boton2= document.querySelector("#btn-Desencriptar");
boton2.onclick=desencriptar;

function copiar (){
	var texto3 = document.getElementById("txtpalabraTraducida");
	texto3.select();
	texto3.setSelectionRange(0, 9999999);
	document.execCommand('copy');

}

var boton3= document.querySelector("#btn-Copiar");
boton3.onclick=copiar;