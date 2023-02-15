let segundo = 0;
let minuto = 1;
let hora = 1;

let pausou;

let clicks = false

function start(){
	pausou = setInterval(counter,1000);
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
}

function zerar(){
	document.getElementById("segundos").innerText="00";
	document.getElementById("minutos").innerText="00";
	document.getElementById("horas").innerText ="00";
}


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
}