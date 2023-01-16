// börja med att skapa ett deck och random kort
let activeCard;
let deck = createDeck();
let drawnCard = drawCard();

setCard(drawnCard);

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
                suit: suits[i],
                value: j,
                color: getColor(suits[i]),
                displayValue: getValue(j)
            };
            // för varje nytt kort bör vi pusha in det i vår lokala deck-array
            deck.push(card);
        }
    }
    // logik för färg på suite
    function getColor(suit) {
        if (suit == '&hearts;' || suit == '&diams;') {
            return 'red';
        } else {
            return 'black';
        }
    }

    function getValue(value) {
        // logik för valör på kort (A, J, D, M) 
        if (value < 11) {
            return value;
        }
        if (value == 11) {
            return 'J';
        }
        if (value == 12) {
            return 'D';
        }
        if (value == 13) {
            return 'K';
        }
        if (value == 14) {
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
}

// sätter nytt kort från random kort från drawCard-funktionen
function setCard(card) {
    let el = document.createElement('article');
    el.classList.add('card');

    el.innerHTML = `
        <section class="front">
            <header>
                <span class="${card.color}">${card.suit}</span>
                <span>${card.displayValue}</span>
            </header>
            <section class="${card.color}">${card.suit}</section>
            <footer>
                <span class="${card.color}">${card.suit}</span>
                <span>${card.displayValue}</span>
            </footer>
        </section>
        <section class="back"></section>
    `;
    document.querySelector('.placeholder').appendChild(el);

}

function lower() {
    // logik för när anv gissar på att nästa kort är lägre
    // förberedelse för att byta kort
    let previousCard = activeCard;
    // slumpa ett nytt kort
    let newCard = drawCard();
    // uppdatera UI
    setCard(newCard);

    // jämföra tidigare kort med nuvarande
    if (activeCard.value < previousCard.value) {
        alert('YAY');
        // öka på antal poäng - funktion för detta
    } else {
        alert('NAY');
        // minska antalet försök som är kvar
    }
}

function equal() {
    // logik för när anv gissar på att nästa kort är densamma
}

function higher() {
    // logik för när anv gissar på att nsäta kort är högre
}