import * as fs from 'fs';
import * as path from 'path';

export default function ReadAssetFile(fileName:string):string {
	return fs.readFileSync(path.join(__dirname,`../input/${fileName}`),'utf8')
}

