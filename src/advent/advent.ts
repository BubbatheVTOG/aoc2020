import {
	PasswordPolicy,
	PolicyGenerator,
	PolicyValidator,
	PolicyValidator2,
} from './day2';
import {
	countCrashes,
	countCrashes2,
} from './day3';
import {
	PassportGenerator,
	Passport,
	PassportsValidator,
	PassportsValidator2,
} from './day4';

export class Advent {

	constructor(){}

	day1p0(input:number[]):number {
		for (let i=0; i<input.length; i++) {
			for (let j=0; j<input.length; j++) {
				if (input[i] + input[j] == 2020) {
					return input[i] * input[j];
				}
			}
		}
	}

	day1p1(input:number[]):number {
		for (let i=0; i<input.length; i++) {
			for (let j=0; j<input.length; j++) {
				for (let k=0; k<input.length; k++) {
					if (input[i] + input[j] + input[k] == 2020) {
						return input[i] * input[j] * input[k];
					}
				}
			}
		}
	}

	day2p0(input:string[]):string {
		let policies = PolicyGenerator(input)
		return ''+PolicyValidator(policies).length
	}

	day2p1(input:string[]):string {
		let policies = PolicyGenerator(input)
		return ''+PolicyValidator2(policies).length
	}

	day3p0(input:string[]):string {
		return ''+countCrashes(input);
	}

	day3p1(input:string[]):string {
		return ''+countCrashes2(input);
	}

	day4p0(input:string):string {
		let allPassports = PassportGenerator(input)
		return ''+PassportsValidator(allPassports).length
	}

	day4p1(input:string):string {
		let allPassports = PassportGenerator(input)
		return ''+PassportsValidator2(allPassports).length
	}
}

