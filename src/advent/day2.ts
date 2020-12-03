
type PasswordPolicy = {
	min:number
	max:number,
	letter:string,
	encrypted_pw:string,
}

function PolicyGenerator(input:string[]):PasswordPolicy[] {
	let policies:PasswordPolicy[] = [];

	for (let raw_policy of input) {
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
			console.log(e)
		}
	}
	return policies
}

function PolicyValidator(input:PasswordPolicy[]):PasswordPolicy[] {
	let validPolicies:PasswordPolicy[] = []

	for (let policy of input) {
		let count = 0
		policy.encrypted_pw.split('')
			.forEach(c => c == policy.letter ? count++ : null)

		if (count >= policy.min && count <= policy.max) {
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
