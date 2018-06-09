// ==UserScript==
// @name         Keyboard scroll
// @namespace    https://github.com/just12
// @version      0.2
// @author       just12
// @include      *mangadex.org/chapter/*
// @include      http://kissmanga.com/Manga/*
// @include      https://twitter.com/*
// ==/UserScript==
onkeydown = function(e){
    var keyPressed = e.keyCode;
    //console.log(keyPressed);
    if(keyPressed === 87){scrollBy({top: -200,left: 0,behavior: 'smooth'});}
    if(keyPressed === 83){scrollBy({top: 200,left: 0,behavior: 'smooth'});}
    if(keyPressed === 81){scrollTo({top: 154,left: 0,behavior: 'smooth'});}

    var page = document.getElementById("current_page");
    if(keyPressed === 69){page.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});}

    var topbar = document.getElementById("top_nav");
    if(keyPressed === 90){topbar.style.display = "none";}
    if(keyPressed === 88){topbar.style.display = "block";}
};

window.onload = function() {
    scrollTo({top: 154,left: 0,behavior: 'smooth'});
};