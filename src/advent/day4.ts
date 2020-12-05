
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
	issues |= passport.ecl ? 0:1
	issues |= passport.pid ? 0:1
	issues |= passport.hcl ? 0:1
	issues |= passport.byr ? 0:1
	issues |= passport.iyr ? 0:1
	issues |= passport.eyr ? 0:1
	issues |= passport.hgt ? 0:1

	if (issues > 0) {
		console.log('Bad passport: ', passport)
	}

	return (issues > 0 ? false : true)
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
