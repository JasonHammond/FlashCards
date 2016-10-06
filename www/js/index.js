$(document).on('pageinit', '#frontpage', function() {
    console.log('device ready');

    var cardToggle;
    var card;
    var cards;
    
    $('#frontpage').bind('pageload pageshow', function(event) {
        cardToggle = 0;
        cardDraw();
    });
    
    function cardDraw() {
        console.log('drawing card...');
        cards = [
            {question:"2+2=?", answer:"4"},
            {question:"3+9=?", answer:"12"},
            {question:"2+7=?", answer:"9"},
            {question:"1+4=?", answer:"5"},
            {question:"5+8=?", answer:"13"},
            {question:"6+1=?", answer:"7"},
            {question:"6+5=?", answer:"11"},
            {question:"4+8=?", answer:"12"},
            {question:"3+0=?", answer:"3"},
            {question:"0+0=?", answer:"0"},
            {question:"3-2=?", answer:"1"},
            {question:"5-2=?", answer:"3"},
            {question:"6-1=?", answer:"5"},
            {question:"8-6=?", answer:"2"},
            {question:"13-5=?", answer:"8"},
            {question:"8-1=?", answer:"7"},
            {question:"12-3=?", answer:"9"},
            {question:"17-5=?", answer:"12"},
            {question:"3-0=?", answer:"3"},
            {question:"0-0=?", answer:"0"} ];
    
        card = (cards[Math.floor(Math.random() * cards.length)]);
    };
//});    

$('#frontpage').ready(function() {
    $('#qa').bind('tap', function() {        
        console.log('tap bind OK'); 
        if ((cardToggle % 2) === 0) {
            $(this).html(card.question);
            cardToggle += 1;
        }
        else {
            $(this).html(card.answer);
            cardDraw();
            cardToggle += 1;
        }
    });
});
});
