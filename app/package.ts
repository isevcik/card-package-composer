import { Card } from './card';
import { cardsDefinition } from './cards-definition';

export class Package {
	id: number;
	name: string;
	description: string;
	tags: string[];

	includedCards: Card[] = [];

	get excludedCards(): Card[] {
		var self = this;
		return cardsDefinition.filter(function (dcard: Card) {
			return self.includedCards.findIndex(function (icard: Card) { return icard.index === dcard.index }) == -1;
		});
	}
}
