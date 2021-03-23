function fizzbuzz(num) {
	const divisible = (divisor, num) => num % divisor === 0;

	if (num === 0) {
		return 0;
	}
	if (divisible(3, num) && divisible(5, num)) {
		return 'fizzbuzz';
	}
	if (divisible(3, num)) {
		return 'fizz';
	}
	if (divisible(5, num)) {
		return 'buzz';
	}

	return num;
}

function print(num) {
	for (let index = 0; index < num; index++) {
		console.log(`${index}: ${fizzbuzz(index)}`);
	}
}

print(16);

module.exports = fizzbuzz;
