
var postActual = 6;

var botonIzq;
var botonDer;

var imagenStage;

var vImagenes = new Array();

var imagenes = [
 ["img/joker_rojo.png", "Joker Rojo"],
 ["img/corazones_as.png", "As Corazones"],
 ["img/corazones_dos.png", "Dos Corazones"],
 ["img/corazones_tres.png", "Tres Corazones"],
 ["img/corazones_cuatro.png", "Cuatro Corazones"],
 ["img/corazones_cinco.png", "Cinco Corazones"],
 ["img/corazones_seis.png", "Seis Corazones"],
 ["img/corazones_siete.png", "Siete Corazones"],
 ["img/corazones_ocho.png", "Ocho Corazones"],
 ["img/corazones_nueve.png", "Nueve Corazones"],
 ["img/corazones_j.png", "J Corazones"],
 ["img/corazones_q.png", "Q Corazones"],
 ["img/corazones_k.png", "K Corazones"]
 ];


window.onload = function()
{
	//referencias elementos html
	botonIzq = document.getElementById("bIzq");
	botonDer = document.getElementById("bDer");

	imagenStage = document.getElementById("onStage");

	var vImgDoc = document.images;

	// solo tenemos las imagenes de la galeria
	for(var i = 2; i < vImgDoc.length; i++)
		vImagenes.push(vImgDoc[i]);

	//crear eventos a los botones
	botonIzq.addEventListener("mouseover",cambiarImgIzq,false);
	botonDer.addEventListener("mouseover",cambiarImgDer,false);
}

function cambiarImgIzq()
{
	if(postActual > 0)
	{
		postActual--;
		if(postActual>=2 && postActual<(imagenes.length - 3))// hacer cambios en vImagenes
		{
			
			for(var i = vImagenes.length -1 ; i>0; i--)
			{
				vImagenes[i].src = vImagenes[i-1].src;
				vImagenes[i].alt = vImagenes[i-1].alt;

			}

			vImagenes[0].src = imagenes[postActual-2][0]; // src
			vImagenes[0].alt = imagenes[postActual-2][1]; // alt

		}

		imagenStage.src = imagenes[postActual][0];
		imagenStage.alt = imagenes[postActual][1];
	}
}

function cambiarImgDer()
{

	if(postActual < (imagenes.length - 1))
	{
		postActual++;


		if(postActual>2 && postActual<=10)
		{
			//  hacer cambios en vImagenes

			for(var i = 0 ; i<vImagenes.length-1; i++)
			{
				vImagenes[i].src = vImagenes[i+1].src;
				vImagenes[i].alt = vImagenes[i+1].alt;

			}
			

			vImagenes[vImagenes.length-1].src = imagenes[postActual+2][0]; // src
			vImagenes[vImagenes.length-1].alt = imagenes[postActual+2][1]; // alt

		}

		imagenStage.src = imagenes[postActual][0];
		imagenStage.alt = imagenes[postActual][1];
	}
}
