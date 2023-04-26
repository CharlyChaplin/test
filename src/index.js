import { genRnd } from './modules';
import { sum } from './utils';

setInterval(() => {
	document.getElementById('root').textContent = sum(genRnd().value + genRnd().value);
}, 1000);