
export function countCrashes(input:string[]):number {
	return recurseCrashes(input,0,0,3,1,0)
}

export function countCrashes2(input:string[]):number {
	let a = recurseCrashes(input,0,0,1,1,0)
	let b = recurseCrashes(input,0,0,3,1,0)
	let c = recurseCrashes(input,0,0,5,1,0)
	let d = recurseCrashes(input,0,0,7,1,0)
	let e = recurseCrashes(input,0,0,1,2,0)
	return a*b*c*d*e
}

function recurseCrashes(input:string[], fromTop:number, fromLeft:number, slope:number, speed:number, treecount:number):number {

	if (fromTop >= input.length) {
		return treecount
	}

	if (input[fromTop][fromLeft % input[fromTop].length] == '#') {
		treecount++
	}

	fromTop+=speed
	fromLeft+=slope
	return recurseCrashes(input, fromTop, fromLeft, slope, speed, treecount)
}
