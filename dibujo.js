var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
//console.log(lienzo);
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	lienzo.clearRect(0,0,d.width,d.height)
	var lineas = parseInt(texto.value);
	var l =0;
	var v1,v2,v3;
	var colorcito = "#000";
	var espacio = ancho/lineas;
	var v3=ancho;

	for(l=0;l<lineas;l++){
		colorcito = (l%2==0)? "red":"#000";
		v1=espacio*l;
		v2 = espacio * (l + 1);
		//console.log("Espacio : " + espacio + " | YI " + yi + " | XF " + xf);
		dibujarLinea(colorcito,0,v1,v2,ancho);
		dibujarLinea(colorcito,v1,0,ancho,v2);
		dibujarLinea(colorcito,v3,0,0,v2);
		dibujarLinea(colorcito,ancho,v1,v3,ancho);
		//console.log("Linea " + l);
		v3-=espacio;
	}
	var end = ancho-1;
	dibujarLinea(colorcito,1,1,1,end);
	dibujarLinea(colorcito,1,end,end,end);
	dibujarLinea(colorcito,1,1,end,1);
	dibujarLinea(colorcito,end,1,end,end);

}