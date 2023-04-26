function* MathRnd() {
	yield Math.floor(Math.random() * 1001);
}


export const genRnd = () => MathRnd().next();