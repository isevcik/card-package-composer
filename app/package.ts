import { Card } from './card';
import { cardsDefinition } from './cards-definition';

export class Package {
	id: number;
	name: string;
	description: string;
	tags: string[];

	includedCards: Card[] = [];

	constructor(data?: any) {
		if (data) {
			this.id = data.id;
			this.name = data.name;
			this.description = data.description;
			this.tags = data.tags;
			this.includedCards = data.includedCards;
		}
	}

	get excludedCards(): Card[] {
		var self = this;
		return cardsDefinition.filter(function (dcard: Card) {
			return self.includedCards.findIndex(function (icard: Card) { return icard.index === dcard.index }) == -1;
		});
	}

	get totalCards(): number {
		return this.includedCards.length;
	}

	get totalStrength(): number {
		return this.includedCards.map(c => c.strength).reduce((a, b) => a + b, 0);
	}
}
