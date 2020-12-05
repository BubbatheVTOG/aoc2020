import {
	INPUT_DAY1,
	INPUT_DAY2,
	INPUT_DAY3,
} from './input/input';
import ReadAssetFile from './util/ReadFile';
import { Advent } from './advent/advent';

const advent = new Advent();

console.log('Start: Day 1 ------------------------------------------------------------------')
console.log(advent.day1p0(INPUT_DAY1));
console.log(advent.day1p1(INPUT_DAY1));
console.log('End: Day 1 --------------------------------------------------------------------')

console.log('Start: Day 2 ------------------------------------------------------------------')
console.log(advent.day2p0(INPUT_DAY2));
console.log(advent.day2p1(INPUT_DAY2));
console.log('End: Day 2 --------------------------------------------------------------------')

console.log('Start: Day 3 ------------------------------------------------------------------')
console.log(advent.day3p0(INPUT_DAY3));
console.log(advent.day3p1(INPUT_DAY3));
console.log('End: Day 3 --------------------------------------------------------------------')

console.log('Start: Day 4 ------------------------------------------------------------------')
const INPUT_DAY4 = ReadAssetFile('input_day4.txt')
console.log(advent.day4p0(INPUT_DAY4));
console.log('End: Day 4 --------------------------------------------------------------------')

