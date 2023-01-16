// börja med att skapa ett deck
let deck = createDeck();

document.querySelector('#lower').addEventListener('click', lower);
document.querySelector('#equal').addEventListener('click', equal);
document.querySelector('#higher').addEventListener('click', higher);

function createDeck() {
    // 4 suits 13 valörer
    let deck = [];
    let suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];
    // loopa över symbolerna
    for (let i = 0; i < suits.length; i++) {
        // för varje symbol skall vi skapa 13 kort
        // det gör vi via ännu en loop
        for (let j = 2; j < 15; j++) {
            //skapar kort-objekt
            // där vi lägger in symbol och värde
            let card = {
                suite: suits[i],
                value: j,
                color: getColor(suits[i]),
                displayValue: 'A'
            };
            // för varje nytt kort bör vi pusha in det i vår lokala deck-array
            deck.push(card);
        }
    }
    // logik för färg på suite
    function getColor(suite) {
        if (suite == '&hearts;' || suite == '&diams;') {
            return 'red';
        } else {
            return 'black';
        }
    }

    function getValue(value) {
        // logik för valör på kort (A, J, D, M) 
    }

    // returnerar hela decket när funktionen är färdig
    return deck;
};

console.log(deck);

function lower() {
    // logik för när anv gissar på att nästa kort är lägre
}

function equal() {
    // logik för när anv gissar på att nästa kort är densamma
}

function higher() {
    // logik för när anv gissar på att nsäta kort är högre
}