import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cols' })
export class ColsPipe implements PipeTransform {
	transform(value: any[], cols: number) {
		var result: any[] = [];
		for (let i=0; i<value.length; i+=cols) {
			result.push(value.slice(i, i+cols));
		}
		return result;
	}
};
