$(document).ready(initializeApp);

function initializeApp(){
    console.log("Initializing App");
    section1();
    section2();
}

function section1(){
    $('.box:even').css('background-color', '#ce93d8');
    $('.box:odd').css('background-color', '#ab47bc');
    $('.box').css('border', '4px solid #8e24aa');
}

function section2(){
    $('#section2 .col-1').css('background-color', '#e3f2fd').click(shrinkCol);
    $('.col-2').css('background-color', '#bbdefb').click(shrinkCol);
    $('.col-3').css('background-color', '#90caf9').click(shrinkCol);
}

function shrinkCol(){
    console.log('This is: ', this);
    var col = $(this);
    //var col1 = $(this);
    //var col1 = $('.col-1');
    var colWidth = col.css('width');
    console.log('Col Width:', colWidth);

    var newWidth = parseInt(colWidth);
    console.log('New Width: ', newWidth);

    newWidth = newWidth - 40;
    col.css('width', newWidth);
}
