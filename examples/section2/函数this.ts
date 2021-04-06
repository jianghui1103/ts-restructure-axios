// let deck = {
//     suits: ['a','b','c','d'],
//     cards: Array(52),
//     createCard: function() {
//         return function(){
//             let pickedCard = Math.floor(Math.random() * 52)
//             let pickedSuit = Math.floor(pickedCard / 13)

//             return {
//                 suit: this.suits[pickedSuit],
//                 card: pickedCard % 13
//             }
//         }
//     }
// }

// let cardPick = deck.createCard()
// let pick = cardPick() 

// console.log('pick:' + pick)


// interface Card {
//     suit: string
//     card: number
// }

// interface Deck {
//     suits: string[]
//     cards: number[]

//     createCard(this: Deck): ()=> Card
// }

// let deck: Deck = {
//     suits: ['a','b','c','d'],
//     cards: Array(52),
//     createCard: function(this: Deck) {
//         return function(){
//             let pickedCard = Math.floor(Math.random() * 52)
//             let pickedSuit = Math.floor(pickedCard / 13)

//             return {
//                 suit: this.suits[pickedSuit],
//                 card: pickedCard % 13
//             }
//         }
//     }
// }

// let cardPick = deck.createCard()
// let pick = cardPick() 

// console.log('pick:' + pick)

interface element {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string
    
    onclickBad = (e:Event)=> {
        this.type = e.type;
    }
}

let h = new Handler;

let ele: element = {
    addClickListener() {

    }
}

ele.addClickListener(h.onclickBad)