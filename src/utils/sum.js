const sum = (...args) => {
	if (!args.length) throw Error("Error");

	return args.reduce((acc, curr) => acc + curr, 0);
}

export default sum;