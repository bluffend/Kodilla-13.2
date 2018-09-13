'use strict';

/* JAK MOŻNA WYCIĄGNĄĆ WSZYSTKIE ELEMENTY 'HREF' W FUNKCJI SHOW MODAL 
var x = document.querySelectorAll(".container a[href]"); 
  for (var i=0; i < x.length; i++) {
    console.log(x[i].getAttribute('href')); 
  }
  */

(function () {

    var showModal = function (event) {
        event.preventDefault();

        // Musiałem wstawić trzy osobne linie żeby usunąć modale bo przy 
        // poniższej komendzie pojawia się błąd:
        // M276 script.js:17 Uncaught TypeError: Cannot read property 'remove' of undefined at HTMLAnchorElement.showModal
        //document.querySelectorAll('.modal').classList.remove('show');

        document.querySelector('#modal-one').classList.remove('show');
        document.querySelector('#modal-two').classList.remove('show');
        document.querySelector('#modal-three').classList.remove('show');

        var hrefValue = this.getAttribute('href');
        document.querySelector("#modal-overlay").classList.add("show");
        document.querySelector(hrefValue).classList.add('show');

    };

    var modalLinks = document.querySelectorAll('.show-modal');
    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }

    var hideModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    var closeButtons = document.querySelectorAll('.modal .close');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    var modals = document.querySelectorAll('.modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }


})(); 