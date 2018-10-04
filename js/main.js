// JavaScript Document
(function() {
	"use strict";
	console.log("SEAF fired");

//variables
var cartermin1 = document.querySelector("#carterimage1");
var cartermin2 = document.querySelector("#carterimage2");
var cartermin3 = document.querySelector("#carterimage3");
var cartermin4 = document.querySelector("#carterimage4");
var nandomin1 = document.querySelector("#nandoimage1");
var nandomin2 = document.querySelector("#nandoimage2");
var nandomin3 = document.querySelector("#nandoimage3");
var nandomin4 = document.querySelector("#nandoimage4");
var lightbox_bg = document.querySelector("#lightbox");
var lightbox_carterimage1 = document.querySelector("#lb_carterimage1");
var lightbox_carterimage2 = document.querySelector("#lb_carterimage2");
var lightbox_carterimage3 = document.querySelector("#lb_carterimage3");
var lightbox_carterimage4 = document.querySelector("#lb_carterimage4");
var lightbox_nandoimage1 = document.querySelector("#lb_nandoimage1");
var lightbox_nandoimage2 = document.querySelector("#lb_nandoimage2");
var lightbox_nandoimage3 = document.querySelector("#lb_nandoimage3");
var lightbox_nandoimage4 = document.querySelector("#lb_nandoimage4");
var close_button = document.querySelector("#close_lb");
    
//functions
function openlightbox()
    {
        console.log("Fired from openlightbox");
        lightbox_bg.style.display = 'block';
    }
    
function closelightbox ()
    {
        console.log("fired from closelightbox");
        lightbox_bg.style.display = 'none';
        lightbox_carterimage1.style.display = 'none';
        lightbox_carterimage2.style.display = 'none';
        lightbox_carterimage3.style.display = 'none';
        lightbox_carterimage4.style.display = 'none';
		lightbox_nandoimage1.style.display = 'none';
		lightbox_nandoimage2.style.display = 'none';
		lightbox_nandoimage3.style.display = 'none';
		lightbox_nandoimage4.style.display = 'none';
    }
    
function opencarterimage1()
    {
        console.log("fired from openimage");
        lightbox_carterimage1.style.display = 'block';
    }
    
function opencarterimage2()
    {
        console.log("fired from openimage");
        lightbox_carterimage2.style.display = 'block';
    }
    
function opencarterimage3()
    {
        console.log("fired from openimage");
        lightbox_carterimage3.style.display = 'block';
    }

function opencarterimage4()
    {
        console.log("fired from openimage");
        lightbox_carterimage4.style.display = 'block';
    }
	
function opennandoimage1()
    {
        console.log("fired from openimage");
        lightbox_nandoimage1.style.display = 'block';
    }
	
function opennandoimage2()
    {
        console.log("fired from openimage");
        lightbox_nandoimage2.style.display = 'block';
    }
	
function opennandoimage3()
    {
        console.log("fired from openimage");
        lightbox_nandoimage3.style.display = 'block';
    }
	
function opennandoimage4()
    {
        console.log("fired from openimage");
        lightbox_nandoimage4.style.display = 'block';
    }


    
//listeners 
cartermin1.addEventListener('click', openlightbox, false);
cartermin2.addEventListener('click', openlightbox, false);
cartermin3.addEventListener('click', openlightbox, false);
cartermin4.addEventListener('click', openlightbox, false);

nandomin1.addEventListener('click', openlightbox, false);
nandomin2.addEventListener('click', openlightbox, false);
nandomin3.addEventListener('click', openlightbox, false);
nandomin4.addEventListener('click', openlightbox, false);


cartermin1.addEventListener('click', opencarterimage1, false);
cartermin2.addEventListener('click', opencarterimage2, false);
cartermin3.addEventListener('click', opencarterimage3, false);
cartermin4.addEventListener('click', opencarterimage4, false);
	
nandomin1.addEventListener('click', opennandoimage1, false);
nandomin2.addEventListener('click', opennandoimage2, false);
nandomin3.addEventListener('click', opennandoimage3, false);
nandomin4.addEventListener('click', opennandoimage4, false);


close_button.addEventListener('click', closelightbox, false);

	
})();
