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
function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0;
	} else {
		return n * m;
	}
}
console.log(paperwork(-5, 5))
console.log(paperwork(-5, -5))
console.log(paperwork(5, 5))

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
  }