// ==UserScript==
// @name         Keyboard scroll
// @namespace    https://github.com/just12
// @version      0.1
// @author       just12
// @include      *mangadex.org/chapter/*
// @include      http://kissmanga.com/Manga/*
// ==/UserScript==
window.onkeydown = function(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed === 87){window.scrollBy(0,-200);}
    if(keyPressed === 83){window.scrollBy(0,200);}
    if(keyPressed === 69){window.scrollBy(0,200000);}
    if(keyPressed === 81){window.scrollBy(0,-200000);}
};