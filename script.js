let segundo = 0;
let minuto = 0;
let hora = 0;
let pausou;
let audioTocado = false;
let nivel_blind = 1

let sidebar_menu = document.getElementById("sidebar_menu")
let clicou = false

const audio = document.getElementById("alerta")
const form = document.getElementById("form")
const blinds = document.getElementById("blinds_values")
const nivel = document.getElementById("nivel")

if(localStorage.segundo){
	segundo = localStorage.segundo;
	minuto = localStorage.minuto;
	hora = localStorage.hora;	
	escreverHora();
}

form.addEventListener('submit', event =>{
	event.preventDefault()

	hora = parseInt(document.getElementById("Phora").value)
	minuto = parseInt(document.getElementById("Pminuto").value)
	segundo = parseInt(document.getElementById("Psegundo").value)

	escreverHora();
	
})


function mostrarMenu(){
    if(!clicou){
        sidebar_menu.style.display = "block"
        clicou = true
    }else{
        sidebar_menu.style.display = "none"
        clicou = false
    }
}

function start(){
	pausou = setInterval(counter,1);
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
		if(minuto % 20 === 0 && !audioTocado){
			audio.play()
			audioTocado = true
			alterarBlinds()
		}

		if(minuto == 59 && segundo == 59){
			audio.play()
			audioTocado = true
			alterarBlinds()
		}

		if (minuto % 20 !== 0 && audioTocado) {
			audioTocado = false;
		}
	}
}

function alterarBlinds(){
	nivel_blind++
	if(nivel_blind < 10){
		nivel.innerText = "0" + nivel_blind
	}else{
		nivel.innerText = nivel_blind
	}

	switch(nivel_blind){
		case 2:
			blinds.innerText = "5 / 15"
			break
		case 3:
			blinds.innerText = "10 / 25"
			break
		case 4:
			blinds.innerText = "25 / 50"
			break
		case 5:
			blinds.innerText = "25 / 75"
			break
		case 6:
			blinds.innerText = "50 / 100"
			break
		case 7:
			blinds.innerText = "50 / 150"
			break
		case 8:
			blinds.innerText = "75 / 175"
			break
		case 9:
			blinds.innerText = "100 / 200"
			break
		case 10:
			blinds.innerText = "150 / 300"
			break
		case 11:
			blinds.innerText = "200 / 400"
			break
		case 12:
			blinds.innerText = "300 / 600"
			break
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
		segundo++;
		document.getElementById("segundos").innerText = "0" + segundo
	}else if(segundo > 9 & segundo <= 59){
		segundo++;
		if(segundo > 59){
			document.getElementById("segundos").innerText = "00"
			segundo = 0
			minuto++
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
		}else
			document.getElementById("segundos").innerText = segundo
	}

	localStorage.setItem('segundo', segundo);
	localStorage.setItem('minuto', minuto);
	localStorage.setItem('hora', hora);
}