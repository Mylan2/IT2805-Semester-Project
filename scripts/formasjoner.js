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
    document.getElementById('formasjonInfo').innerHTML = '<h3>3-4-3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin laoreet enim vel fermentum. In non lacus velit. Praesent tincidunt, mi ac convallis accumsan, eros eros sollicitudin sapien, non hendrerit ipsum justo ac urna. Donec tempor quam lectus, eget fermentum ipsum feugiat id. Nulla commodo maximus ullamcorper. Ut a sagittis magna. Aliquam id urna ut tellus porta cursus. Curabitur consequat, augue eu ultricies vulputate, neque urna viverra nunc, quis pellentesque magna mi quis est. Donec porttitor quis neque a tristique.</p>';
  }
	/*3-5-2*/
  else if (form === "1") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/352.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">3-5-2 på banen.</p>';
		document.getElementById('formasjonInfo').innerHTML = '<h3>3-5-2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin laoreet enim vel fermentum. In non lacus velit. Praesent tincidunt, mi ac convallis accumsan, eros eros sollicitudin sapien, non hendrerit ipsum justo ac urna. Donec tempor quam lectus, eget fermentum ipsum feugiat id. Nulla commodo maximus ullamcorper. Ut a sagittis magna. Aliquam id urna ut tellus porta cursus. Curabitur consequat, augue eu ultricies vulputate, neque urna viverra nunc, quis pellentesque magna mi quis est. Donec porttitor quis neque a tristique.</p>';
  }

	/*4-5-1*/
  else if (form === "2") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/451.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">4-5-1 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>4-5-1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin laoreet enim vel fermentum. In non lacus velit. Praesent tincidunt, mi ac convallis accumsan, eros eros sollicitudin sapien, non hendrerit ipsum justo ac urna. Donec tempor quam lectus, eget fermentum ipsum feugiat id. Nulla commodo maximus ullamcorper. Ut a sagittis magna. Aliquam id urna ut tellus porta cursus. Curabitur consequat, augue eu ultricies vulputate, neque urna viverra nunc, quis pellentesque magna mi quis est. Donec porttitor quis neque a tristique.</p>';
  }
	/*4-3-3*/
  else if (form === "3") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/433.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">4-3-3 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>4-3-3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin laoreet enim vel fermentum. In non lacus velit. Praesent tincidunt, mi ac convallis accumsan, eros eros sollicitudin sapien, non hendrerit ipsum justo ac urna. Donec tempor quam lectus, eget fermentum ipsum feugiat id. Nulla commodo maximus ullamcorper. Ut a sagittis magna. Aliquam id urna ut tellus porta cursus. Curabitur consequat, augue eu ultricies vulputate, neque urna viverra nunc, quis pellentesque magna mi quis est. Donec porttitor quis neque a tristique.</p>';
  }
	/*5-2-3*/
  else if (form === "4") {
		document.getElementById('formasjonImg').innerHTML = '<img src="../img/formasjoner/523.png" alt="" title="bildet er hentet fra buildlineup.com"/><p class="text-muted">5-2-3 på banen.</p>';
    document.getElementById('formasjonInfo').innerHTML = '<h3>5-2-3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin laoreet enim vel fermentum. In non lacus velit. Praesent tincidunt, mi ac convallis accumsan, eros eros sollicitudin sapien, non hendrerit ipsum justo ac urna. Donec tempor quam lectus, eget fermentum ipsum feugiat id. Nulla commodo maximus ullamcorper. Ut a sagittis magna. Aliquam id urna ut tellus porta cursus. Curabitur consequat, augue eu ultricies vulputate, neque urna viverra nunc, quis pellentesque magna mi quis est. Donec porttitor quis neque a tristique.</p>';
  }
}
