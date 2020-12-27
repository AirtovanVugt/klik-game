
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var beschrijving = document.getElementById("description");
var muziek = document.getElementById("muziek");
var titel = document.getElementById("title");
var foto = document.getElementById("Inventory");
var achtergrond = document.getElementById("background");
var muziek = document.getElementById("music");

button1.innerText = "start";
foto.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
muziek.src = "muziek/verliefd.mp3"
titel.innerText = "Until Dawn";
button1.onclick = theStart;

var wendigo = document.createElement("img");
wendigo.setAttribute("src", "fotos/wendigo.png");
wendigo.setAttribute("width", "250");
wendigo.setAttribute("height", "400");
wendigo.style.position = "absolute";
wendigo.setAttribute("alt", "wendigo");
wendigo.style.top = 100 + "px";
wendigo.style.left = 500 + "px";
document.body.appendChild(wendigo);
wendigo.style.display = "none";

function theStart(){
	muziek.src = "";
	button1.style.top = "25%";
	titel.innerText = "Lees dit";
	beschrijving.style.display = "inline-block";
	beschrijving.innerText = "Het verhaal: Je gaat op vakantie ergens in Amerika. De auto zet je voor het bos neer want je moet te voet verder als je in het vakantiepark wilt komen. Je doet er ongeveer een uur over om naar het vakantiepark te lopen. Maar er gaan geruchten rond over dat hier wendigos in het bos leven. Dit zijn wezens die op bewegingen af komen en alleen 's nachts naar buiten komen. In je huisje zit een deur dat naar een oude mijn gaat. Bij de receptie krijg je een kaart mee, voor als je ooit deze mijn wilt bezoeken.";
	button1.onclick = WatTeDoen;
}

function WatTeDoen(){
	achtergrond.style.backgroundImage = "url('fotos/jeHuis.png')";
	button1.innerText = "Verder";
	setTimeout(function(){
		alert("Hmmmmmmm, wat zal ik vandaag eens doen.");
		alert("Ik weet het ik ga naar naar het bos hout halen voor een kampvuur, dat lijkt mij een leuk idee voor later in de avond.");
	}, 100);
	beschrijving.style.display = "none";
	titel.style.display = "none";
	button1.onclick = HetHout;
}

function HetHout(){
	achtergrond.style.backgroundImage = "url('fotos/hetBos.png')";
	button1.style.display = "none";
	setTimeout(function(){
		alert("Ik ben in het bos alleen nu nog zoeken.");
	}, 100);
	foto.src = "fotos/deStok.png";
	foto.style.display = "inline-block";
	foto.style.top = 405 + "px";
	foto.style.left = 500 + "px";
	foto.addEventListener("click", function(){
		if(foto.style.top == 405 + "px"){
			foto.style.top = 20 + "px";
			foto.style.left = 20 + "px";
			setTimeout(function(){
				alert("De stok is nu in je Inventory. (links boven)");
				alert("Je hoort iets.");
				button2.style.display = "inline-block";
				button2.innerText = "Kijken wat er gebeurd";
				button3.style.display = "inline-block";
				button3.innerText = "Rennen naar huisje";
			}, 100);
		}
		else{
			
		}
	});
		button2.onclick = jeKijkt;
		button3.onclick = jeRentWeg;
}

function jeRentWeg(){
	alert("Echt een poessie jij gewoon kijken.");
	button3.style.display = "none";
}

function jeKijkt(){
	wendigo.style.display = "inline-block";
  	button2.style.display = "none";
	button3.style.display = "none";
	setTimeout(function(){
		alert("Het is een Wendigo wat doe je.");
		button2.style.display = "inline-block";
		button2.innerText = "Je bevecht de Wendigo";
		button2.onclick = YouDeadBruh;
		button3.style.display = "inline-block";
		button3.innerText = "Rennen naar huisje";
		button3.onclick = jeRentNaarHuisje;
	}, 100);
}


function jeRentNaarHuisje(){
	wendigo.style.display = "none";
	achtergrond.style.backgroundImage = "url('fotos/jeHuis.png')";
	button2.style.display = "none";
	button3.style.display = "none";
	setTimeout(function(){
		alert("Je bent net optijd in je huisje maar de Wendigo staat nu voor je deur je moet je deur barikaderen zoek iets om dat te doen.");
	}, 100);		
			foto.addEventListener("click", function(){
				if(foto.style.top == 20 + "px"){
					alert("Je gebruikt het hout om te barikaderen.");
					foto.style.display = "none";
					setTimeout(function(){
						alert("Nu je gebarikadeerd heb wil je via de mijn ontsnappen maar je moet de kaart nog hebben zoek die.");
					foto.src = "fotos/deKaartKlein.png";
					foto.style.display = "inline-block";
					foto.style.top = 150 + "px";
					foto.style.left = 1280 + "px";
					}, 100);
				}
				else if(foto.style.top == 150 + "px"){
					alert("je hebt de Kaart gevonden.");
					foto.style.top = 21 + "px";
					foto.style.left = 20 + "px";
					button1.style.display = "inline-block";
					button1.innerText = "De mijn ingaan";
					button1.onclick = deMijn;
				}
			});
}

function deMijn(){
	button1.style.display = "none";
	achtergrond.style.backgroundImage = "url('fotos/deMijn.png')";
	setTimeout(function(){
		alert("Je bent aan het lopen en komt op een splitsing wat moet je doen.");
	}, 100);
	foto.addEventListener("click", function(){
		if(wendigo.style.display == "none"){
			achtergrond.style.backgroundImage = "url('fotos/deKaart.png')";
				setTimeout(function(){
					alert("Zo te zien moet je naar links.");
					achtergrond.style.backgroundImage = "url('fotos/uitgangMijn.png')";
					wendigo.style.display = "inline-block";
					setTimeout(function(){
						alert("Je ziet de uitgang maar er loopt een wendigo naar binnen wat doe je.");
						button2.innerText = "wegrennen";
						button2.style.display = "inline-block";
						button3.innerText = "stilstaan";
						button3.style.display = "inline-block";
						button3.onclick = hetGoeieEinde
					}, 100);
				}, 100);
		}
	});
}

function hetGoeieEinde(){
	wendigo.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
		setTimeout(function(){
			alert("De wendigo liep langs je want het kan alleen bewegingen waarnemen.");
				achtergrond.style.backgroundImage = "url('fotos/uitDeMijn.png')";
				foto.style.display = "none";
			setTimeout(function(){
				alert("Je bent uit de mijn en hebt alles overleeft je gaat naar je huisje pakt je spullen in en komt hier nooit meer terug, en je leefte nog lang en gelukkig.");
				titel.style.display = "inline-block";
				titel.innerText = "Einde";

			}, 100);
		}, 100);
}

function YouDeadBruh(){
	achtergrond.style.backgroundImage = "url('fotos/YourDeadBruh.png')";
	button1.style.display = "inline-block";
	button1.innerText = "Opnieuw";
	button1.addEventListener("click", function(){
		location.reload();
	});
	button2.style.display = "none";
	button3.style.display = "none";
	foto.style.display = "none";
	titel.style.display = "inline-block";
	titel.innerText = "Je bent dood";
	button1.style.left = -13 + "px";
	wendigo.style.display = "none";
}