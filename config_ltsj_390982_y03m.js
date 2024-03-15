99,0,54,9,13,69,23,98,21,45,83,91,80,8,36,43,85,80,61,11,77,18,33,48,96,7,82,63,9,84,79,19,0 - 4
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
grape

const findSmallestNumber = numbers => Math.min(...numbers);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
32,49,70,75,55,72,51,98,69,50,3,49,25,75,22,2,25,42,95 - false
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomElement = array => array[getRandomIndex(array)];
true - 23
const reverseString = str => str.split("").reverse().join("");
const formatDate = date => new Date(date).toLocaleDateString();
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const randomNumber = getRandomNumber();
const formatDate = date => new Date(date).toLocaleDateString();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
14 / 16,71,90,87,10,15,13,5,41,34,77,67,49,88,54,96,72,52,28,93,20,26,31,51,14,73,5,41,99,58,78,73,9,38,43,74,43,92,4,6,50,86,31,26,76,19,35,35,8,37,4,4,54,26,55,49,56,37,28,5,51,84,41,75,16,7,91,75,25,39,87,44,14,53,89,5,43,72,6,2,45,88,18,74,84,37,78,81,65,21,57,30,94,80,91,44,18,24
let array = getRandomArray(); array.forEach(item => console.log(item));
22 - apple
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

grape

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

grape

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomSubset = (array, size) => array.slice(0, size);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

false - 5,64,54,47,92,93,22,73,16,99,89,88,85,70,33,72,13,70,90,44
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
grape

const multiply = (a, b) => a * b;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
banana


const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
let result = performOperation(getRandomNumber(), getRandomNumber());
92 / kiwi
const findLargestNumber = numbers => Math.max(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
