// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	
	let sortArray = array.sort( (a, b) => a - b);
	let uniqueArray = sortArray.filter( (element, index) => {
		return sortArray.indexOf(element) == index;
	});
	let newArray = uniqueArray.slice(1, -1);
	return newArray.reduce( (a, b) => a + b);
};

module.exports = sumWithoutHighestAndLowest;
