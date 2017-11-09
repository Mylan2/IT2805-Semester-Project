/*
FILNAVN: formasjoner.js
LAGET AV: Mahamud Hussein
NÅR: Oktober 2017
MÅL: Endrer innholdet i formasjoner.html etter hvilken formasjon som er trykket.
*/



/*preloader bilder*/
(function () {
    var moves = [ "../img/formasjoner/343.png", "../img/formasjoner/451.png", "../img/formasjoner/352.png", "../img/formasjoner/433.png", "../img/formasjoner/523.png"];
    for (var i = 0; i < moves.length; i++) {
        var move = document.createElement("img");
        move.src = moves[i];
    }
}());

function show (form) {
	/*3-4-3*/
  if (form === "0") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/343.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">3-4-3 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>3-4-3</h3><p>Dette er den mest populære formasjonen. Dersom du går for denne formasjonen vil du få to forsvarsspillere og en midtbanespiller på benken. Disse fungerer som backup, og du vil mest sannsynlig måtte gjøre noen bytter om ikke lenge, så sørg for at disse spillere også kan gi deg poeng i de kommende kampene. Med denne formasjonen har du 7 offensive spillere, noe som tidligere har vist seg å gi mest poeng totalt gjennom sesongen.</p>';
  }
	/*3-5-2*/
  else if (form === "1") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/352.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">3-5-2 på banen.</p>';
		document.getElementById('formasjonInfo').innerHTML = '<h3>3-5-2</h3><p>Selv om spissene ofte gir flere mål enn midtbanespillerne er det ikke alltid det lønner seg å ha 3 spisser på banen. I sesongen 2016/17 var det midtbanespillerne som ga flest poeng, og det kan derfor lønne seg å ha flere midtbanespillere på banen. Da kan denne formasjonen være et godt alternativ til 3-4-3. Disse spillerne er også ofte billigere enn spissene, så se etter noen poenggivende midtbanespillere. Ofte er det lurt å velge noen som har offensive roller på banen.</p>';
  }

	/*4-5-1*/
  else if (form === "2") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/451.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">4-5-1 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>4-5-1</h3><p>Formasjoner som involverer flere enn 3 forsvarsspillere er ikke populære blant de beste FPL-spillerne, rett og slett fordi det betyr at du har flere defensive menn på banen som statisisk sett gir ferre poeng. Allikevel kan det være en god måte å spare penger på, da disse spillerne oftest er billigere enn midtbanespillere og spisser.</p>';
  }
	/*4-3-3*/
  else if (form === "3") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/433.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">4-3-3 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>4-3-3</h3><p>Dette er også en brukbar formasjon som kan lønne seg hvis du har investert mye penger i midtbanespillere og spisser, og trenger noen billige forsvarsspillere til å fylle opp laget med. Som alltid kan det være lurt å se på hvilke forsvarsspillere som vanligvis velges til å ta straffer, frispark og cornere, og det kan være lurt å velge spillere som ofte blir satt høyere opp på banen. Husk at forsvarsspillere får hele 6 poeng for målscoringer, så se etter spillere som kan score samtidig som de spiller på lag som ofte holder nullen.</p>';
  }
	/*5-2-3*/
  else if (form === "4") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/523.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">5-2-3 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>5-2-3</h3><p>Dette er en lite brukt formasjon, og kan generelt ikke anbefales. Hvis du har kommet i en situasjon der de fleste brukbare spillerne dine er forsvarsspillere så kan det være på tide å benytte seg av Wildcardet og velge et mer offensivt lag.</p>';
  }
}
