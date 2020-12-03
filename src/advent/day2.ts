
interface PasswordPolicy {
	min:number
	max:number,
	letter:string,
	encrypted_pw:string,
}

function PolicyGenerator(input:string[]):PasswordPolicy[] {
	let policies:PasswordPolicy[];

	for (let raw_policy in input) {
		try {
			const [numbers, letter_raw, encrypted_pw] = raw_policy.split(' ');

			const min = parseInt(numbers.split('-').shift())
			const max = parseInt(numbers.split('-').pop())
			const letter = letter_raw.charAt(0)

			policies.push({
				min,
				max,
				letter,
				encrypted_pw,
			})

		} catch (e) {
			//srsly?
		}
	}
	return policies
}

function PolicyValidator(input:PasswordPolicy[]):PasswordPolicy[] {
	let validPolicies:PasswordPolicy[]

	for (let policy in input) {
		let count = 0
		policy.split('').forEach(x => x == policy ? count++ : null)

		if (count > policy.min && count < policy.max) {
			validPolicies.push(policy);
		}
	}
	return validPolicies
}

export {
	PasswordPolicy,
	PolicyGenerator,
	PolicyValidator
}
