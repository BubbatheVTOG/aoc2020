
export type PasswordPolicy = {
	min:number
	max:number,
	letter:string,
	encrypted_pw:string,
}

export function PolicyGenerator(input:string[]):PasswordPolicy[] {
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

export function PolicyValidator(input:PasswordPolicy[]):PasswordPolicy[] {
	let validPolicies:PasswordPolicy[] = []

	input.forEach(policy => {
		let count = 0
		policy.encrypted_pw.split('')
			.forEach(c => c == policy.letter ? count++ : null)

		if (count >= policy.min && count <= policy.max) {
			validPolicies.push(policy);
		}
	})
	return validPolicies
}

export function PolicyValidator2(input:PasswordPolicy[]):PasswordPolicy[] {
	let validPolicies:PasswordPolicy[] = []

	input.forEach(policy => {
		const pw = policy.encrypted_pw
		const pos1 = --policy.min
		const pos2 = --policy.max
		const c = policy.letter
		if ((pw.charAt(pos1) == c && pw.charAt(pos2) != c)  ||
			 ((pw.charAt(pos1) != c && pw.charAt(pos2) == c)) ){
			validPolicies.push(policy)
		}
	})
	return validPolicies
}
