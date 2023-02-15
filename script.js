let segundo = 0;
<<<<<<< HEAD
let minuto = 0;
let hora = 0;
=======
let minuto = 1;
let hora = 1;
>>>>>>> 1dbbd1ae128131a19af4f1cce5f0660197203bb7

let pausou;

let clicks = false

<<<<<<< HEAD
if(localStorage.segundo){
	segundo = localStorage.segundo;
	minuto = localStorage.minuto;
	hora = localStorage.hora;	
	escreverHora();
}

function start(){
	pausou = setInterval(counter,10);
=======
function start(){
	pausou = setInterval(counter,1000);
>>>>>>> 1dbbd1ae128131a19af4f1cce5f0660197203bb7
}

function pause(){
	clearInterval(pausou);
}

function stop(){
	clearInterval(pausou);
	segundo = 0;
	minuto = 0;
	hora = 0;
	zerar();
<<<<<<< HEAD
	localStorage.clear();
=======
>>>>>>> 1dbbd1ae128131a19af4f1cce5f0660197203bb7
}

function zerar(){
	document.getElementById("segundos").innerText="00";
	document.getElementById("minutos").innerText="00";
	document.getElementById("horas").innerText ="00";
}

<<<<<<< HEAD
function escreverHora(){
	document.getElementById("segundos").innerText = segundo;
	if(minuto<10){
		document.getElementById("minutos").innerText = "0" + minuto;
	}else{
		document.getElementById("minutos").innerText = minuto;
	}
	document.getElementById("horas").innerText = "0" + hora;
}


function counter(){
	
	if(segundo<10){
		document.getElementById("segundos").innerText = "0" + segundo
		segundo++;
	}else if(segundo > 9 & segundo < 60){
		document.getElementById("segundos").innerText = segundo
		segundo++;
	}else{
		segundo = 0;
		minuto++;
		if(minuto < 10){
			document.getElementById("minutos").innerText = "0" + minuto
		}else if(minuto > 9 & minuto < 60){
			document.getElementById("minutos").innerText = minuto
		}else{
			segundo = 0;
			minuto = 0;
			document.getElementById("minutos").innerText = "0" + minuto
			document.getElementById("segundos").innerText = "0" + segundo

			hora++;
			document.getElementById("horas").innerText = "0" + hora
		}
	}

	localStorage.setItem('segundo', segundo);
	localStorage.setItem('minuto', minuto);
	localStorage.setItem('hora', hora);
=======

function counter(){
	if(segundo < 10){
		document.getElementById("segundos").innerText="0"+ segundo;
	}else{
		document.getElementById("segundos").innerText=segundo;
	}

	if(segundo > 59){
		segundo = 0;
		if(minuto < 10){
			document.getElementById("minutos").innerText= "0" + minuto;
		}else{
			document.getElementById("minutos").innerText= minuto;
		}
		if(minuto > 59){
			minuto = 0;

			document.getElementById("horas").innerText = "0" + hora;
			hora++;
		}
		minuto++;
	}
	segundo++;
>>>>>>> 1dbbd1ae128131a19af4f1cce5f0660197203bb7
}