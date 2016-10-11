var $j = jQuery.noConflict();

function onLoad() {
    console.log("here we go...");
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {    
    var cardToggle;
    var card;
    var cards;
    
    console.log("device ready");
    try {drawCard; }
    catch(err) {console.log("card not drawn... =("); }
    
    $j("#qa").bind("tap", displayCard);


    function drawCard() {
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
        console.log("card chosen.");
        cardToggle = 0;
    }    
    
    function displayCard(event) {
        console.log('click');
        if ((cardToggle % 2) === 0) {
            $j(this).html(card.question);
            cardToggle += 1;
        }
        else {
            $j(this).html(card.answer);
            drawCard;
            cardToggle += 1;
        }
    }
    
    console.log("All done!");
}

