import { Card } from './card';

// generated with http://www.json-generator.com
const cardsDefinition = [
  {
    "name": "Nolan",
    "health": 5,
    "strength": 6,
    "index": 0
  },
  {
    "name": "Maddox",
    "health": 10,
    "strength": 1,
    "index": 1
  },
  {
    "name": "Rose",
    "health": 6,
    "strength": 3,
    "index": 2
  },
  {
    "name": "Clemons",
    "health": 6,
    "strength": 7,
    "index": 3
  },
  {
    "name": "Perez",
    "health": 9,
    "strength": 2,
    "index": 4
  },
  {
    "name": "Calhoun",
    "health": 7,
    "strength": 4,
    "index": 5
  },
  {
    "name": "Love",
    "health": 8,
    "strength": 2,
    "index": 6
  },
  {
    "name": "Hodge",
    "health": 8,
    "strength": 7,
    "index": 7
  },
  {
    "name": "White",
    "health": 1,
    "strength": 4,
    "index": 8
  },
  {
    "name": "Vargas",
    "health": 1,
    "strength": 2,
    "index": 9
  },
  {
    "name": "Mayer",
    "health": 8,
    "strength": 1,
    "index": 10
  },
  {
    "name": "Bradshaw",
    "health": 3,
    "strength": 5,
    "index": 11
  },
  {
    "name": "Espinoza",
    "health": 3,
    "strength": 5,
    "index": 12
  },
  {
    "name": "Camacho",
    "health": 6,
    "strength": 8,
    "index": 13
  },
  {
    "name": "Burns",
    "health": 5,
    "strength": 9,
    "index": 14
  },
  {
    "name": "Mcmahon",
    "health": 5,
    "strength": 3,
    "index": 15
  },
  {
    "name": "Kane",
    "health": 2,
    "strength": 6,
    "index": 16
  },
  {
    "name": "Charles",
    "health": 9,
    "strength": 10,
    "index": 17
  },
  {
    "name": "Craig",
    "health": 7,
    "strength": 10,
    "index": 18
  },
  {
    "name": "Holcomb",
    "health": 1,
    "strength": 8,
    "index": 19
  }
];

var cards: Card[];

cardsDefinition.forEach(c => {
  cards.push(new Card(c.index, c.name, c.health, c.strength));
});

export { cards as cardsDefinition };
