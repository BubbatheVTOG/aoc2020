
export type Passport = {
	ecl:string,
	pid:string,
	hcl:string,
	byr:string,
	iyr:string,
	eyr:string,
	hgt:string,
	cid?:string,
}

/**
 * This retokenizes data by looking ahead to build groups
 * It was a pain in the ass to realize that it was needed.
 */
function ReTokenize(input:string):string[] {
	let dataByLine = input.split('\n')
	let dataByGroup:string[] = []

	for (let i=0;i<dataByLine.length; i++) {
		let group:string[] = []
		while (dataByLine[i].length != 0){
			group.push(dataByLine[i])
			i++
		}
			dataByGroup.push(group.join(' '))
	}

	return dataByGroup
}
export function PassportGenerator(input:string):Passport[] {
	let Passports:Passport[] = []
	let tokenizedData = ReTokenize(input)

	// each line is a passport in raw form with each primative being space delimited
	for (let line of tokenizedData) {
		// each primative is the elements of a passport
		let elms = line.split(' ')

		// Passport primatives
		let ecl:string
		let pid:string
		let hcl:string
		let byr:string
		let iyr:string
		let eyr:string
		let cid:string
		let hgt:string

		for (let elm of elms) {

			// each opt is the "opt code" of the passport
			// ie ecl, pid, ery, etc.
			let pair = elm.split(':')
			let opt = pair[0]
			let val = pair[1]
			switch (opt) {
				case 'ecl': {
					ecl=val
					break;
				}
				case 'pid': {
					pid=val
					break;
				}
				case 'hcl': {
					hcl=val
					break;
				}
				case 'byr': {
					byr=val
					break;
				}
				case 'iyr': {
					iyr=val
					break;
				}
				case 'eyr': {
					eyr=val
					break;
				}
				case 'cid': {
					cid=val
					break;
				}
				case 'hgt': {
					hgt=val
					break;
				}
				default:
					break;
			}
		}

		Passports.push({
			ecl,
			pid,
			hcl,
			byr,
			iyr,
			eyr,
			hgt,
			cid,
		})
	}

	return Passports
}

export function PassportsValidator(passports:Passport[]): Passport[] {
	let validPassports:Passport[] = []
	for (let passport of passports) {
		if (PassportValidator(passport)) {
			validPassports.push(passport)
		}
	}
	return validPassports
}

export function PassportValidator(passport:Passport): boolean {
	let issues:number = 0
	//issues |= isECLValid(passport.ecl) ? 0:1
	//issues |= isPIDValid(passport.pid) ? 0:1
	//issues |= isHCLValid(passport.hcl) ? 0:1
	//issues |= isBYRValid(passport.byr) ? 0:1
	issues |= isIYRValid(passport.iyr) ? 0:1
	//issues |= isERYValid(passport.eyr) ? 0:1
	//issues |= isHGTValid(passport.hgt) ? 0:1

	if (issues > 0) {
		console.log('Bad passport: ', passport.iyr)
	}

	return (issues > 0 ? false : true)
}

/**
	* ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
	* @returns boolean - True if valid.
	*/
function isECLValid(input:string):boolean {
	let validVals = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
	return validVals.includes(input)
}

/**
	* pid (Passport ID) - a nine-digit number, including leading zeroes.`
	* @returns boolean - True if valid.
	*/
function isPIDValid(input:string):boolean {
	if (!input) { return false }
	return (input.match(/[0-9]{9}/) ? true:false)
}

/**
	* hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
	* @returns boolean - True if valid.
	*/
function isHCLValid(input:string):boolean {
	if (!input) { return false }
	return (input.match(/#[a-fA-F0-9]{6}/) ? true:false)
}

/**
	* byr (Birth Year) - four digits; at least 1920 and at most 2002.
	* @returns boolean - True if valid.
	*/
function isBYRValid(input:string):boolean {
	if (!input) { return false }
	if (input.length != 4) { return false }
	let year = parseInt(input)
	return ((year >= 1920) && (year <= 2002))
}

/**
	* iyr (Issue Year) - four digits; at least 2010 and at most 2020.
	* @returns boolean - True if valid.
	*/
function isIYRValid(input:string):boolean {
	if (!input) { return false }
	if (input.length != 4) { return false }
	let year = parseInt(input)
	return ((year >= 2010) && (year <= 2020))
}

/**
	* eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
	* @returns boolean - True if valid.
	*/
function isERYValid(input:string):boolean {
	if (!input) { return false }
	if (input.length != 4) { return false }
	let year = parseInt(input)
	return ((year >= 2020) && (year <= 2030))
}

/**
	* hgt (Height) - a number followed by either cm or in:
  *   If cm, the number must be at least 150 and at most 193.
  *   If in, the number must be at least 59 and at most 76.
	* @returns boolean - True if valid.
	*/
function isHGTValid(input:string):boolean {
	if (!input) { return false }
	let units = input.slice(-2)

	let number = parseInt(input)
	if (units === 'cm') {
		return ((number > 150) && (number < 193))
	} else if (units === 'in') {
		return ((number > 59) && (number < 76))
	} else {
		return false
	}
}
