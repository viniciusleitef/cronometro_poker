let segundo = 0;
let minuto = 0;
let hora = 0;
let pausou;
let audioTocado = false;
let audioTocadoI = false;

const audio = document.getElementById("alerta")

const form = document.getElementById("form")



if(localStorage.segundo){
	segundo = localStorage.segundo;
	minuto = localStorage.minuto;
	hora = localStorage.hora;	
	escreverHora();
}

form.addEventListener('submit', event =>{
	console.log("oi")
	event.preventDefault()

	hora = parseInt(document.getElementById("Phora").value)
	minuto = parseInt(document.getElementById("Pminuto").value)
	segundo = parseInt(document.getElementById("Psegundo").value)

	escreverHora();
	
})


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
	localStorage.clear();
}

function zerar(){
	document.getElementById("segundos").innerText="00";
	document.getElementById("minutos").innerText="00";
	document.getElementById("horas").innerText ="00";
}

function alertas(){
	if(minuto !== 0){
		if(minuto % 12 === 0 && !audioTocado){
			audio.play()
			audioTocado = true
		}

		if(minuto == 59 && segundo == 59){
			audio.play()
			audioTocado = true
		}

		if (minuto % 12 !== 0 && audioTocado) {
			audioTocado = false;
		}
	}
}

function escreverHora(){
	
	if(segundo < 10){
		document.getElementById("segundos").innerText = "0" + segundo;
	}else{
		document.getElementById("segundos").innerText = segundo;
	}
	if(minuto<10){
		document.getElementById("minutos").innerText = "0" + minuto;
	}else{
		document.getElementById("minutos").innerText = minuto;
	}
	document.getElementById("horas").innerText = "0" + hora;
}

function counter(){
	alertas();

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
}