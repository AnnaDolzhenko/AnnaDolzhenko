const randomNumber = getRandomNumber();
17,5,35,76,38,33,22,73,42,22,83,1,50,67,65,60,79,3,62,49,54,27,37,89,21,12,50,23,52,90,37,52,34,21,54,87,57,96,25,14,36,47,61,20,0,47,30,95,99,43,53,35,23,81,76,76,42,73,63,96,97,79,99,13,77,10,87,63,70,24,91,59,2,78,15,30,10,0,0,1 * true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const randomNumber = getRandomNumber();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

30,4,5,24,8,73,49,29,12,53,75,72,63,50,83,17,46,40,90,66,59,0,87,12,58,32,89,80,64,88,83,47,27,91,85,47,51,76,37,21,94,93,38,68,68,63,94,23,60,19,41,81,68,48,0,19,56,12,90,89,67,35,81,49 * 60

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
93,29,28,50,53,2,21,24,1,66,38,3,21,3,68,86,37,54,84,37,28,69,85,51,56,23,20,89,93,25,1,65,44,51,85,44,4,71,71,97,83,73,7,58,13,2,77,34,44,58 + kiwi
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
