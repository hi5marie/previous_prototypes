$(document).ready(initializeApp);

function initializeApp(){
    console.log("Initializing App...");
    var dynamicCol = $('.container .col:nth-child(2)').append('<h1>Dynamic Content</h1>');
}

//var dynamicCol = $('.container .col:nth-child(2)');
//dynamicCol.append('<h1>Dynamic Content</h1>');

function createCard(suit, rank){
    var card = $('<div>', {
    class: 'card '+ suit + ' ' + rank
    });

}
