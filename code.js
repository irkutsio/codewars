// ======================CODEWARS===============
// function squareSum(numbers) {
//   let sum = 0;
//   let squareNum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     squareNum = numbers[i] ** 2;
//  sum += squareNum;
//   }
//   return sum;
// }
// console.log(squareSum([2, 5, 7])); // 78

// ***************************8

// function removeChar(str){
// console.log(str.slice(1, -1));
//  };
//  removeChar('person');
//  removeChar('eloquent');

// ****************************

// function sumArray(array) {
//   let sum = 0;
//   if (array === null) {
//     return 0;
//   } else if (array.length < 3) {
//     return 0;
//   } else {
//     array = array.sort((a, b) => a - b);
//     for (let i = 1; i < array.length - 1; i++) {
//       sum += array[i];
//     }
//   }

//   return sum;
// }

// sumArray(null, 0);
// sumArray([], 0);
// sumArray([3], 0);
// sumArray([3, 5], 0);
// sumArray([6, 2, 1, 8, 10], 16);
// sumArray([0, 1, 6, 10, 10], 17);
// sumArray([-6, -20, -1, -10, -12], -28);
// sumArray([-6, 20, -1, 10, -12], 3);

// ***********************************************

// function fakeBin(x){

// let numbers = x;
// let arr = numbers.split('');
// console.log(arr)
// return arr.map(num => {
//   if (num < 5) {
//     num = 0;
//   }
//   if (num >=5) {
//     num =1
//   }
// return num;
// }).join('')
// }

// console.log(fakeBin('45385593107843568'));

// *****************************

// function simpleMultiplication(number) {
// if (number % 2 === 0) {
// 	return number * 8;
// } else {
// 	return number * 9;
// }
// *************************
//    return number % 2 === 0 ? number * 8 : number * 9

// }
// console.log(simpleMultiplication(2, 16, 'Should return given argument times eight...'));
// simpleMultiplication(1, 9, 'Should return given argument times nine...');

// *********************************

// const stringToNumber = function(str){
//     // return parseInt(str)
//     console.log(+str)
//     console.log(str)
// //  return +str;
//     }
//    stringToNumber(("1405"),1405);

//*********************** */

// function getGrade(s1, s2, s3) {
// 	let num = (s1 + s2 + s3) / 3;

// 	if (num <= 100 && 90 <= num ) {
// 		return 'A';
// 	} else if (num < 90 && 80 <= num) {
// 		return 'B';
// 	} else if (num < 80 && 70 <= num) {
// 		return 'C';
// 	} else if (num < 70 && 60 <= num) {
// 		return 'D';
// 	} else if (num < 60 && 0 <= num) {
// 		return 'F';
// 	}
// }   мщжно только с одним условием, без &&
// console.log(getGrade(65, 70, 59));
// console.log(getGrade(82, 85, 87));
// console.log(getGrade(95, 90, 93));

// ******************************
// function paperwork(n, m) {
// 	if (n < 0 || m < 0) {
// 		return 0;
// 	} else {
// 		return n * m;
// 	}
// }
// console.log(paperwork(-5, 5))
// console.log(paperwork(-5, -5))
// console.log(paperwork(5, 5))

// function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
//   }

// *88************************

// var min = function (list) {
// 	list.sort((a, b) => a - b);
// 	return list[0];
// };

// var max = function (list) {
// 	list.sort((a, b) => b - a);
// 	return list[0];
// };
// console.log(max([4,6,2,1,9,63,-134,566]))
// min([-52, 56, 30, 29, -54, 0, -110]);
// min([42, 54, 65, 87, 0]), 0;

//*********************** */

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

//   const finder = new SmallestIntegerFinder();
// console.log(finder.findSmallestInt([1,5,3,7,5,0]))

// function getSum(a, b) {
// 	let sum = 0;
// 	if (a < b) {
// 		for (let i = a; i <= b; i++) {
// 			sum += i;
// 		}
// 		return sum;
// 	}else if (a > b){
// 		for (let i = a; i >= b; i--) {
// 			sum+=i
//            }
// 		return sum;
// } else {
//     return a;
// }
// }
// //
// console.log(getSum(0, 8));
// console.log(getSum(0, -8));
// console.log(getSum(2,2));

// *************************

// function nthEven(n) {
// 	return n * 2 - 2; // или так
// 	return (n - 1) * 2;
// }

// найти n-ное четное число

// ****************************
// function countSheeps(arrayOfSheep) {
// 	let num = 0;
// 	arrayOfSheep.forEach(item => {
// 		if (item) {
// 			num += 1;
// 		}
// 	});
// 	return num;
// }

// console.log(countSheeps([true, true, true, true, false, false, true, true]));

//&&&&&&&&&&&&&&&&&

// function expressionMatter(a, b, c) {
//     let arr = [];
// 	let x = a * (b + c);
// 	let x1 = a * b * c;
// 	let x2 = a + b * c;
// 	let x3 = (a + b) * c;
//     let x4 = a + b + c;
//     let x5 = (a * b) + c;
//     arr.push(x,x1,x2,x3,x4,x5);
//     console.log(arr)
//     arr.sort((a,b) => b - a);
//     return arr[0];

// }

// function expressionMatter(a, b, c) {
// 	const variants = [a * b * c, a + b + c, a * (b + c), (a + b) * c, a + b * c, a * b + c];
// console.log(...variants);
// 	return Math.max(...variants);
// }

// function expressionMatter(a, b, c) {
//     return Math.max(
//       a + b + c,
//       a * b * c,
//       a * (b + c),
//       (a + b) * c,
//       a + b * c,
//       a * b + c,
//     );
//   }

// console.log(expressionMatter(9, 1, 1));

// *********************
// function makeUpperCase(str) {
//     return str.toUpperCase();
//   }

//   console.log(makeUpperCase('qweqwe'))

// ***********************
// задача = функция возвращает s в количестве n(столько n => сколько s)
// function repeatStr(n, s) {
//     let str = '';
// 	for(let i=1; i <=n; i++){
//         str += s
//     }
//     return str;
// }

// есть функция репит --- function repeatStr (n, s) {
//     return s.repeat(n);
//   }
// repeatStr(5, '#');
// *********************************
// найти самое короткое слово из строки
// function findShort(s) {
// 	const arr = s.split(' ');
// 	let min = arr[0].length;
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i].length < min) {
// 			min = arr[i].length;
// 			return min;
// 		}
// 	}
// }
// console.log(findShort("Let's travel abroad shall we")); // 2
// console.log(findShort('turns out random test cases are easier than writing out basic ones')); // 3
// ************************************8
// function check(a, x) {
// return a.includes(x)
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107));

// ****************************
// function abbrevName(name){
// const arr = name.split(' ')
// const newArr = arr[1][0] + '.' + arr[0][0]
// }
// abbrevName("Sam Harris")

// ***************************
// function litres(time) {
// 	console.log(Math.floor(time * 0.5));
// }

// litres(1787); //893
// litres(12.3); // 6
// litres(1.4); //0
// ****************************

// function hero(bullets, dragons) {
// 	return bullets / dragons >= 2 ? true : false;
// }
// console.log(hero(1500, 751));
// hero(4, 5);
// hero(7, 4);
// console.log(hero(10, 5));

// *************************************
// function solution(str, ending){
//     console.log(str[str.length-1])
//     if(str[str.length-1] === ending[ending.length-1]) {
//         return 'true'
//     } else {
//         return'false'
//     }
//   }

//   solution('abcde', 'abc')// false
//   solution('abcde', 'cde')// true

// ****************************
// function filter_list(l) {
//     return l.filter((item) => {
//       return typeof item === "number" && item >= 0; // добавляем проверку на >= 0
//     });
//   }

// console.log(filter_list([1, 2, 0, 'aasf', '1', '123', 123]))
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// filter_list([1, 2, 'a', 'b']);

// **********************
// ***********************ЗАПОМНИ!!!!!
// function isIsogram(str) {
// 	for (let i = 0; i < str.length - 1; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }
// console.log(isIsogram('Dermatoglyphics'));
// isIsogram('Dermatoglyphics'); //, true );
// isIsogram('isogram'); //, true );
// isIsogram('aba'); //, false, "sa

// **********************
// function positiveSum(arr) {
//     let sum = 0;
// 	arr.filter(num => {
// 		if (num > 0) {
//            sum += num
// 		}

// 	});
//     return sum;
// }
// positiveSum([-1, -2, -3, -4, -5]); //,0);
// positiveSum([1, -2, 3, 4, 5]); //,13)
// positiveSum([1, 2, 3, 4, 5]); //15

// *************************
// function maps(x) {
// 	return x.map(num => num * 2);
// }
// console.log(maps([1, 4, 6]));

// ****************************
// function areYouPlayingBanjo(name) {
//     if(name[0] === 'r' || name[0] === 'R') {
//         return name + " plays banjo"
//       }
//       return name + " does not play banjo"
//     }
//     console.log(areYouPlayingBanjo("Rravo"))

// function areYouPlayingBanjo(name) {
// 	return name[0] === 'r' || name[0] === 'R' ? name + ' plays banjo' : name + ' does not play banjo';
// }

// *********************************
// var number = function (busStops) {
// 	let inside = 0;
// 	let outside = 0;
// 	busStops.flatMap(num => {
// 		inside += num[0];
// 		outside += num[1];
// 	});
//      return inside - outside
// };
// number([
// 	[10, 0],
// 	[3, 5],
// 	[5, 8],
// ]);
//,5)
// number([
// 	[3, 0],
// 	[9, 1],
// 	[4, 8],
// 	[12, 2],
// 	[6, 1],
// 	[7, 8],
// ]); //,21)

// ***********************************
// function isTriangle(a, b, c) {
// 	if (a + b > c && a + c > b && b + c > a) {
//         return true
// 	}
//     return false
// }
// console.log(isTriangle(1,2,2))

// *****************************
// function rentalCarCost(d) {
//     if(d < 3) {
//         return d * 40
//     } else if(d < 7) {
//         return d * 40 - 20
//     } else {
//         return d * 40 - 50
//     }
//    }
//    console.log(rentalCarCost(3))

// **************************
// function nbYear(p0, percent, aug, p) {
//     let population = p0;
//     let years = 0;
//     while (population < p) {
//       population += Math.floor(population * (percent / 100)) + aug;
//       years++;
//     }
//     return years;
//   }
// nbYear(1500, 5, 100, 5000);
// Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
// Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);

//*************************** */

// function binaryArrayToNumber(arr) {
//     // Преобразуем массив в строку и затем в двоичное число
//     const binaryStr = arr.join('');
//     const binaryNum = parseInt(binaryStr, 2);
//     // Возвращаем десятичное число
//     return binaryNum;
//   }
// Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
// Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
// Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
// Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);

// ********************************8
// function removeExclamationMarks(s) {
// 	return s.split('!').join('')
// }
// removeExclamationMarks('Hello World!');
// console.log(removeExclamationMarks('Hello! World!'));

// **************************
// function noOdds(values) {
// 	return values.filter(value => value % 2 === 0);
// }
// console.log(noOdds([0, 1, 2, 3]));

// ****************************
// function explode(x) {
// 	let count = 0;
// 	let arr = [];
// 	if (typeof x[0] === 'number' && typeof x[1] === 'number') {
// 		count = x[0] + x[1];
// 	} else if (typeof x[0] === 'number') {
// 		count = x[0];
// 	} else if (typeof x[1] === 'number') {
// 		count = x[1];
// 	} else {
// 		return 'Void!';
// 	}
// 	for (let i = 0; i < count; i++) {
// 		arr.push(x);

// 	}
//     return arr;
// }
// console.log(explode([2, 3]));
// explode(['a', 'b']);

// *****************************
// function longest(s1, s2) {
// 	let str = s1 + s2;
// 	// console.log(str);
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j <= str.length; i++) {
// 			if (str[i] !== str[j]) {
// 				return str[j];
// 			}
// 		}
// 	}
// }
// console.log('hello');
// longest('aretheyhere', 'yestheyarehere');
// longest('loopingisfunbutdangerous', 'lessdangerousthancoding');
// longest('inmanylanguages', 'theresapairoffunctions');

// =====================================

function countSheeps(arrayOfSheep) {
	// let total = 0;
	// for (let i = 0; i < arrayOfSheep.length; i++) {
	// 	if (arrayOfSheep[i]) {
	// 		total += arrayOfSheep[i];
	// 	}
	// }
	// return total;
	// ============================================
	// return arrayOfSheep.filter(Boolean).length;
}

// console.log(
// 	countSheeps([
// 		true,     ............ответ 17
// 		true,
// 		true,
// 		false,
// 		true,
// 		true,
// 		true,
// 		true,
// 		true,
// 		false,
// 		true,
// 		false,
// 		true,
// 		false,
// 		false,
// 		true,
// 		true,
// 		true,
// 		true,
// 		true,
// 		false,
// 		false,
// 		true,
// 		true,
// 	])
// );

// ================================
// function sumCubes(n){
// 	let sum =0;
// 	for (let i=1; i<=n; i++)
// 	sum += i ** 3
// console.log(sum)
//   }

//   sumCubes(2)

// =======================================
// function removeSmallest(numbers) {
// 	const smallest = Math.min(...numbers);
// 	let arr = [];
// 	return (arr = numbers.filter((number, i) => i !== numbers.indexOf(smallest)));
// }

// function removeSmallest(numbers) {
// 	let indexOfMin = numbers.indexOf(Math.min(...numbers));
// 	return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }
// removeSmallest([1, 2, 3, 4, 5]); //, [2, 3, 4, 5],
// // removeSmallest([5, 3, 2, 1, 4]); //, [5, 3, 2, 4],
// removeSmallest([2, 2, 1, 2, 1]); //, [2, 2, 2, 1],
// removeSmallest([]); //, [], "Wrong result for []");

// ===================================================

// function arrayPlusArray(arr1, arr2) {
// 	const arr = arr1.concat(arr2);
// 	const total = arr.reduce((acc, num) => {
// 		return acc + num;
// 	}, 0);
// 	return total
// }

// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

// var a = {};
// (function b(a) {
// 	a.a = 10;
// 	a = null;
// })(a);

// console.log(a)

///////////////////////////////////////
// Sum Numbers
// function sum(numbers) {
// 	let total = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		total += numbers[i];
// 	}
// 	return total
// }
// sum([1, 5.2, 4, 0, -1])

// function countBy(x, n) {
// 	let z = [];
// 	for (let i = 1; i <= n; i++) {
// 		z.push(i * x);
// 	}
// 	console.log(z)
// 	return z;
// }

// countBy(2,5)

// function reduce(fraction) {
// 	fraction.sort((a, b) => a - b);

// 	const a = fraction[1];
// 	const b = fraction[0];
// 	while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// =======================эвклыдова формула=================
// function gcd(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function reduce(fraction) {
//     const a = fraction[0];
//     const b = fraction[1];
//     const greatestCommonDivisor = gcd(a, b);

//     const reducedNumerator = a / greatestCommonDivisor;
//     const reducedDenominator = b / greatestCommonDivisor;

//     return [reducedNumerator, reducedDenominator];
// }

// const simplifiedFraction = reduce([45, 120]);
// console.log(simplifiedFraction); // [3, 8]

// reduce([45, 120]);
// reduce([80, 120]);
// reduce([60, 20]);

// ===================================
// const invert = array => {
// 	let newArr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		newArr.push(array[i] * -1);
// 	}
// 	return newArr;
// };

// invert([1, 2, 3, 4]);===
// ==========================================

// function smash(words) {
// 	return words.join(' ');
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));
//===============================================

// // const findOdd = A => {
// // 	const groups = {};

// // 	for (const value of A) {
// // 		if (groups[value]) {
// // 			groups[value].push(value);
// // 		} else {
// // 			groups[value] = [value];
// // 		}
// // 	}
// // 	const arrays = Object.values(groups);
// // 	for (const arr of arrays) {
// // 		if (arr.length % 2 !== 0) {
// // 			console.log(arr[0]);
// // 			return arr[0];
// // 		}
// // 	}
// // };

// // findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
// // findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// // const [a, ,b] = 'JavaScript is awesome'.split(' ');
// // console.log(a, b);

// // const confused = 'no';
// // const myKey = confused;

// // const obj = {
// // [myKey]: false,
// // };

// // console.log(obj);

// // let value = 20;

// // if (true) {
// // console.log(value);
// // let value = 10;
// // }

// // console.log(+'1000')

// // function multiply() {
// // 	let total = 1;

// // 	for (const argument of arguments) {
// // 	  total *= argument;
// // 	}

// // 	return total;
// //   }

// //   console.log(multiply(1, 2, 3)); //  6
// //   console.log(multiply(1, 2, 3, 4)); //  24
// //   console.log(multiply(1, 2, 3, 4, 5)); //  120

// // console.log(a)
// // const a =5

// const book = {
// 	title: 'The Last Kingdom',
// 	author: 'Bernard Cornwell',
// 	genres: ['historical prose', 'adventure'],
// 	rating: 8.38,
// };

// //   for (const key in book) {
// // 	// Ключ
// // 	// console.log(key);
// // 	// Значення властивості з таким ключем
// // 	console.log(book[key]);
// //   }

// // const person = {
// // 	age: 60,
// // };

// // const a = person;
// // a.age = 45;

// // console.log(person.age);

// let a = 7;
// function j() {
// 	let a = 6;
// 	console.log(a / 'io');
// }

// j()

// function g(){
// console.log(this)
// }

// g()

// const r = 'qwe' + 'qweqwe'
// console.log(r)

// function StringChallenge(str) {
// 	// Split the input string into two equal parts at the asterisk.
// 	const parts = str.split('*');
// 	console.log('parts', parts)
// 	const firstPart = parts[0];
// 	const secondPart = parts[1];

// 	// Initialize an empty string to store the result.
// 	let result = '';

// 	// Pair up the characters in corresponding positions.
// 	for (let i = 0; i < firstPart.length; i++) {
// 	  result += firstPart[i] + secondPart[i];
// 	}

// 	// Reverse the result string.
// 	result = result.split('').reverse().join('');

// 	// Combine the reversed result with the ChallengeToken.
// 	const ChallengeToken = "ep36oads4cb";
// 	const finalOutput = result + ':' + ChallengeToken;

// 	return finalOutput;
//   }

//   // Example usage:
//   const inputString = "abc1*kyoo";
//   console.log(StringChallenge(inputString))

// //   let sum = 0;
// // for (let i = 0; i < 3; i++) {
// //     for (let j = 5; j > 2; j--) {
// //         sum = sum + j + i;
// //     }
// // }
// // console.log(sum);
// // let sum = 0;
// // for (let i = 0; i < 3; i++) {
// //     for (let j = 5; j > 2; j--) {
// //         sum = j + i;
// //     }
// // }
// // console.log(sum); // ???

// // const hobbies = ['Sports', 'Cooking', 'Coding'];
// // let favoriteHobby;
// // for (const hobby of hobbies) {
// // 	console.log(hobby)
// //     // favoriteHobby = hobby;
// // }
// // console.log(favoriteHobby);

// // Функція для розміщення блоків у контейнері
// function arrangeBlocks(blocks, container) {
//     // Сортуємо блоки за зменшенням площі
//     const sortedBlocks = blocks.slice().sort((a, b) => b.width * b.height - a.width * a.height);

//     let currentX = 0;
//     let currentY = 0;
//     let maxYInRow = 0;
//     let blockCoordinates = [];

//     sortedBlocks.forEach((block, index) => {
//         if (currentX + block.width <= container.width && currentY + block.height <= container.height) {
//             // Розміщуємо блок
//             blockCoordinates.push({
//                 top: currentY,
//                 left: currentX,
//                 right: currentX + block.width,
//                 bottom: currentY + block.height,
//                 initialOrder: index + 1,
//             });

//             // Оновлюємо координати для наступного блоку
//             currentX += block.width;
//             maxYInRow = Math.max(maxYInRow, currentY + block.height);
//         } else {
//             // Переходимо до нового ряду
//             currentX = 0;
//             currentY = maxYInRow;
//             maxYInRow = 0;

//             // Повторно розміщуємо блок
//             blockCoordinates.push({
//                 top: currentY,
//                 left: currentX,
//                 right: currentX + block.width,
//                 bottom: currentY + block.height,
//                 initialOrder: index + 1,
//             });

//             // Оновлюємо координати для наступного блоку
//             currentX += block.width;
//             maxYInRow = Math.max(maxYInRow, currentY + block.height);
//         }
//     });

//     // Обчислюємо коефіцієнт корисного простору
//     const fullness = 1 - calculateEmptySpace(blocks, blockCoordinates);

//     return {
//         fullness,
//         blockCoordinates,
//     };
// }

// Функція для обчислення площі порожнини
// function calculateEmptySpace(blocks, blockCoordinates) {
//     const containerArea = blocks.reduce((area, block) => area + block.width * block.height, 0);
//     const occupiedArea = blockCoordinates.reduce((area, coord) => area + (coord.right - coord.left) * (coord.bottom - coord.top), 0);

//     return occupiedArea / (occupiedArea + containerArea);
// }

// Приклад використання:
// const blocks = [
//     { width: 90, height: 90 },
//     { width: 60, height: 115 },
//     // Додайте інші блоки за необхідності
// ];

// const container = { width: 350, height: 300 };

// const result = arrangeBlocks(blocks, container);
// console.log(result);

function transformToObjects(numberArray) {
    let newArr = []
numberArray.map( num => {
   const obj = {val : num}
   newArr.push(obj)}
)
return newArr
}

console.log(transformToObjects([1, 2, 3, 4]));
