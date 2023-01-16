// börja med att skapa ett deck
let deck = createDeck();

document.querySelector('#lower').addEventListener('click', lower);
document.querySelector('#equal').addEventListener('click', equal);
document.querySelector('#higher').addEventListener('click', higher);

function createDeck() {
    // 4 suits 13 valörer
    let deck = [];
    let suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 2; j < 15; j++) {
            let card = {
                suite: suits[i],
                value: j
            };
            deck.push(card);
        }
    }
    return deck;
};

console.log(deck);

function lower() {
    // logik för när anv gissar på att nsäta kort är lägre
}

function equal() {
    // logik för när anv gissar på att nsäta kort är lägre
}

function higher() {
    // logik för när anv gissar på att nsäta kort är lägre
}