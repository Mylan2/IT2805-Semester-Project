/*
FILNAVN: menu.js
LAGET AV: Mahamud Hussen
NÅR: Oktober 2017
MÅL: Setter inn meny på hver side i navbar div-boksen
*/


/*Funksjonen limer inn menyen i navbar div-boksen*/
function menu () {
  document.getElementById('navbar').innerHTML = '<nav class="navbar navbar-inverse navbar-fixed-top shadow3"><div class="container"> <div id="navbar" class="navbar-collapse collapse navbar-ex1-collapse"> <ul class="nav navbar-nav"> <li><a href="/mahamudh/it2805p/hjem.html">Hjem</a></li> <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kamper <span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="/mahamudh/it2805p/kamper/fixtures.html">Program</a></li> <li><a href="/mahamudh/it2805p/kamper/valg.html">Kaptein valg</a></li> </ul> </li> <li><a href="/mahamudh/it2805p/Liga/liga.html">Liga</a></li> <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kunnskap <span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="/mahamudh/it2805p/kunnskap/formasjoner.html">Formasjoner</a></li> <li><a href="/mahamudh/it2805p/kunnskap/kaptein.html">Kaptein</a></li> <li><a href="/mahamudh/it2805p/kunnskap/overganger.html">Overganger</a></li><li><a href="/mahamudh/it2805p/kunnskap/vitemer.html">Nyttige kilder</a></li> </ul> </li> <li><a href="/mahamudh/it2805p/om/om.html">Om</a></li> </ul> </div><!--/.nav-collapse --></div></nav>'
}

menu();
