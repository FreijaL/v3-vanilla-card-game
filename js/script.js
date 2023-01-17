// let suite = ['Hjärter', 'Spader', 'Ruter', 'Klöver'];
// let cardDeck = [];
// for (i = 0; i < suite.length; i++){
//     for (j = 2; j <= 14; j++){
//         cardDeck.push(suite[i] + ' ' + j);
//     }
// };

// // funktionen ger ett random heltal
// function getRandomCard (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// };

// // omvandla index-nr till kort-nr
// // lista[i] = item på plats i
// //let card = cardDeck[getRandomCard(0, cardDeck.length)];
// //console.log(card);


// let card = '';
// let numberOfCards = 52;


// let mainElem = document.querySelector('main');
// let cardText = document.createElement('h1');

// function draw() {
//     card = cardDeck[getRandomCard(0, cardDeck.length)];
//     cardText.innerHTML = card;
//     mainElem.appendChild(cardText);
//     numberOfCards = numberOfCards - 1;
// };





let activeCard;
let score = 0;
let attempts = 3;
let deck = createDeck();
let drawnCard = drawCard();

setCard(drawnCard);

querySelector('#lower').addEventListener('click', lower);
querySelector('#equal').addEventListener('click', equal);
querySelector('#higher').addEventListener('click', higher);

function createDeck() {
    let deck = [];
    let suits = ['&spades;', '&hearts;', '&clubs;', '&diams;']
    // loopa över symbolerna
    for (let i = 0; i <suits.length; i++){
        // för varje symbol ska vi skapa 13 kort
        // det gör vi via ännu en loop
        for(let j = 2; j <= 14; j++){
            // skapar kort-objekt
            // där vi lägger in symbol och värde
            let card = {
                suit: suits[i],
                value: j,
                color: getColor(suits[i]),
                displayValue: getValue(j)
            };
            // för varje nytt kort bör vi pusha in det i vårt deck
            deck.push(card);
        }
    }
    // logik för färg på suite
    function getColor(suit) {
        if(suit == '&hearts;' || suit == '&diams;'){
            return 'red';
        } else {
            return 'black';
        }
    }
    //logik för valör på korte (A, J, D, M)
    function getValue(value){
        if (value < 11) {
            return value;
        } 
        if (value == 11){
            return 'J';
        }
        if (value == 12){
            return 'D';
        }
        if (value == 13){
            return 'K';
        }
        if (value == 14){
            return 'A';
        }
    }
    // returnerar hela decket när funktionen är färdig
    return deck;
};




// slumpa kort ur decket
function drawCard() {
    // få ett random nummer mellan 0 - 51 initialt
    let random = Math.floor(Math.random() * deck.length);

    let drawnCard = deck[random];
    activeCard = drawnCard;
    // ta bort slumpat kort ur vårt deck
    deck.splice(random, 1);
    updateCount();
    return drawnCard;
};



// uppdatera mängden kort som är kvar
function updateCount() {
    let deckCount = deck.length;
    document.querySelector('.left').innerHTML =
        `${deckCount} kort kvar`;
};



// sätter nytt kort från random kort från drawCard-funktionen
function setCard(card) {
    let el = document.createElement('article');
    el.classList.add('card');

    el.innerHTML = `
        <section class="front">
            <header>
                <span class="${card.color}">${card.suit}</span>
                <span class="${card.color}">${card.displayValue}</span>
            </header>
            <section class="${card.color}">${card.suit}</section>
            <footer>
                <span class="${card.color}">${card.suit}</span>
                <span class="${card.color}">${card.displayValue}</span>
            </footer>
        </section>
        <section class="back"></section>
    `;
    document.querySelector('.placeholder').appendChild(el);

};





function lower() {
    // logik för när anv gissar på att nästa kort är lägre
    // förberedelse för att byta kort
    let previousCard = activeCard;
    // slumpa nytt kort
    let newCard = drawCard();
    // uppdatera UI
    setCard(newCard);

    // jämföra tidigare kort med nuvarande
    if (activeCard.value < previousCard.value){
        updateScore();
    } else {
        updateAttempts();
    }
};
function equal () {
    // logik för när anv gissar på att nästa kort är equal
    // spara undan det aktiva kortet
    let previousCard = activeCard;
    // slumpa nytt kort
    let newCard = drawCard();
    // uppdatera UI
    setCard(newCard);

    // jämflra tidigare kort med nuvarande kort
    if (newCard.value == previousCard.value) {
        updateScore();
    } else {
        updateAttempts();
    }
};
function higher () {
    // logik för när anv gissar på att nästa kort är högre
    // spara undan det aktiva kortet
    let previousCard = activeCard;
    // slumpa nytt kort
    let newCard = drawCard();
    // uppdatera UI
    setCard(newCard);

    // jämför tidigare kort med nuvarande kort
    if (newCard.value > previousCard.value){
        updateScore();
    } else {
        updateAttempts();
    }
};


// funktionen för att öka poäng
function updateScore() {
    let newScore = score + 100;
    score = newScore;
    // alt score = score + 100;
    document.querySelector('.score').innerHTML = score;
};

// minska försök
function updateAttempts() {
    attempts = attempts - 1;
    document.querySelector('.attempts').innerHTML = attempts;

    if (attempts == 0) {
        alert('Slut på försök, Din totala poäng blev ' + score);
    }
};