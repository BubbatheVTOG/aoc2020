

function buildBoardingPasses(input:string):number[] {
	let boardingPasses:number[] = []

	input.split('\n').forEach(x => {
		boardingPasses.push(
			parseInt(
				x.replace(/F/g,'0')
				.replace(/B/g,'1')
				.replace(/R/g,'1')
				.replace(/L/g,'0')
			,2)
		)
	})

	return boardingPasses
}

export function getMyBoardingPass(input:string):string {
	let passes = buildBoardingPasses(input).sort((a, b) => a - b)

	let ptr=passes[1]
	for (let i=1; i < passes.length; i++) {
		if (passes[i] !=ptr) {
			break
		}
		ptr++
	}

return ''+ptr
}

export function getHighestBoardingPass(input:string):string {
	return ''+buildBoardingPasses(input).sort((a, b) => b - a).shift()
}
