"use strict";


// Задача №121
let test121_a = true;
if (!test121_a) {
	console.log('+++');
} else {
	console.log('---');
}

let test121_b = true;
if (test121_b) {
	console.log('+++');
} else {
	console.log('---');
}

let test121_c = true;
if (test121_c) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача №122
// #1
// Ответ: +++
// #2
// Ответ: +++
// #3
// Ответ: ---
// #4
// Ответ: ---
// #5
// Ответ: ---
// #6
// Ответ: ---
// #7
// Ответ: ---
// #8
// Ответ: ---
// #9
// Ответ: +++
// #10
// Ответ: +++


// Задача №123
let test1_123a = true;
let test2_123b = true;
let test3_123с = true;

if (test1_123a && test2_123b) {
	console.log('+++');
} else {
	console.log('---');
}

if (test1_123a && !test2_123b) {
	console.log('+++');
} else {
	console.log('---');
}

if (!test1_123a && !test2_123b) {
	console.log('+++');
	} else {
	console.log('---');
	}

if (test1_123a && test2_123b) {
	console.log('+++');
} else {
	console.log('---');
}

if (test1_123a && test2_123b && test3_123с) {
	console.log('+++');
	} else {
	console.log('---');
	}

if (test1_123a && !test2_123b && !test3_123с) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача №124
let test124 = 10;

if (test124 == 10) {
	console.log('+++');
}


// Задача №125
let test125 = 12;
if (test125 > 0) console.log('+++'); else console.log('---');
if (test125 > 0) console.log('+++');


// Задача №127
let day127_1 = 15;

if (day127_1 >= 1 && day127_1 <= 10) {
	console.log('Первая декада месяца');
} else if (day127_1 >= 11 && day127_1 <= 20) {
	console.log('Вторая декада месяца');
} else if (day127_1 >= 21 && day127_1 <= 31) {
	console.log('Третья декада месяца');
} else {
	console.log('Неверное значение переменной day');
}

let day127_2 = 32; 
if (typeof day127_2 !== 'number' || day127_2 < 1 || day127_2 > 31) {
	console.log('Ошибка: значение переменной day должно быть числом от 1 до 31');
} else if (day127_2 >= 1 && day127_2 <= 10) {
	console.log('Первая декада месяца');
} else if (day127_2 >= 11 && day127_2 <= 20) {
	console.log('Вторая декада месяца');
} else {
	console.log('Третья декада месяца');
}


// Задача №128
let num128 = 34; 
if (num128 >= 10 && num128 <= 99) {
	let tens128 = (num128 / 10) % 10; // Десятки
	let units128 = num128 % 10; // Единицы
	let sum128 = tens128 + units128;
	if (sum128 <= 9) {
		console.log('Сумма цифр однозначна');
	} else {
		console.log('Сумма цифр двухзначна');
	}
} else {
	console.log('Число не находится в диапазоне от 10 до 99');
}


// Задача №129
let lang129 = 'ru';
switch (lang129) {
	case 'ru': 	
		console.log('рус');
		break;
	case 'en': 
		console.log('анг');
		break;
	case 'de': 
		console.log('нем');
		break;
	default:
		console.log('язык не поддерживается');
		break;
}


// Задача №131
let num131 = 1;
let res131 = num131 >= 0 ? true : false;
console.log(res131);


// Задача №132

// #1
let a132_1 = 2 * (3 - 1);
let b132_1 = 6 - 2;
let res132_1 = a132_1 == b132_1;
console.log(res132_1);


// #2
let a132_2 = 5 * (7 - 4);
let b132_2 = 1 + 2 + 7;
let res132_2 = a132_2 > b132_2;
console.log(res132_2);

// #3
let a132_3 = 2 ** 4;
let b132_3 = 4 ** 2;
let res132_3 = a132_3 !== b132_3;
console.log(res132_3);



// Задача №133
let ok133 = confirm('Вам есть 18 лет?');
if (ok133) {
	alert('Ну тогда вот ваш текст для взрослых')
} else {
	alert('Уходи с сайта')
}


// Задача №134
let age134 = 17;
let adult134;
if (age134 >= 18) {
	adult134 = true;
} else {
	adult134 = false;
}
console.log(adult134);


// Задача №135
// #1
let age135_1 = 17;
let adult135_1;

if (age135_1 >= 18) {
	adult135_1 = true;
} else {
	adult135_1 = false;
}
console.log(adult135_1);

// #2
let age135_2 = 17;
let adult135_2;

if (age135_2 >= 18) {
	adult135_2 = true;
} else {
	adult135_2 = false;
}

console.log(adult135_2);

// #3
let age135_3 = 17;
let res135_3;

if (age135_3 >= 18) {
	if (age135_3 <= 23) {
		res135_3 = 'от 18 до 23';
	} else {
		res135_3 = 'больше 23';
	}
} else {
	res135_3 = 'меньше 18';
}

console.log(res135_3); 

// #4
let age135_4 = 19;
let res135_4;

if (age135_4 >= 18) {
	if (age135_4 <= 23) {
		res135_4 = 'от 18 до 23';
	} else {
		res135_4 = 'больше 23';
	}
} else {
	res135_4 = 'меньше 18';
}
console.log(res135_4); 


// Задача №136
let min136 = 10;

if (min136 >= 0 && min136 <= 19) {
	console.log('1 треть часа');
}

if (min136 >= 20 && min136 <= 39) {
	console.log('2 треть часа');
}

if (min136 >= 40 && min136 <= 59) {
	console.log('3 треть часа');
}


// Задача №137
let arr137 = [1, 2, 4, 456, 76, 894];
if (arr137.length === 3){
	console.log(arr137[0] + arr137[1] + arr137[2] + arr137[3] + arr137[4] + arr137[5]);
}
else{
	console.log('его длина равна не 3')
}


// Задача №138
let str138_1 = 'Avokado';
if (str138_1[0] === 'a'){
	console.log('эта строка начинается на символ <<a>>');
}
else{
	console.log('эта строка не начинается на символ <<a>>');
}

let str138_2 = 'Avokadox';
let last138_2 = (str138_2.length - 1);
if (str138_2[last138_2] === 'x'){
	console.log('эта строка заканчивается на символ <<х>>');
}
else{
	console.log('эта строка не заканчивается на символ <<х>>');
}	

let str138_3 = 'Avokado';

if ((str138_3[0] === 'a') || (str138_3[0] === 'b')) {
	console.log('эта строка начинается на символ <<a>> или <<b>>');
} else {
	console.log('эта строка не начинается на символ <<a>> и не на <<b>>');
}



// Задача №139
let num139 = 12345; 
let strNum139 = String(num139); 

if (strNum139[strNum139.length - 1] === '0') {
	console.log('Последняя цифра равна нулю');
} else {
	console.log('Последняя цифра не равна нулю');
}

let lastDigit139 = strNum139[strNum139.length - 1];
if (lastDigit139 === '0' || lastDigit139 === '2' || lastDigit139 === '4' || lastDigit139 === '6' || lastDigit139 === '8') {
	console.log('Число четное');
} else {
	console.log('Число нечетное');
}


// Задача №140
let number140 = 10;

if (number140 % 2 === 0) {
	console.log('Число четное');
} else {
	console.log('Число нечетное');
}

if (number140 % 3 === 0) {
	console.log('Число делится на 3');
} else {
	console.log('Число не делится на 3');
}



// Задача №141
// #1
let num1_141_1 = 1;
let num2_141_1 = 2;

if (num1_141_1 + num2_141_1 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// #2
let num1_141_2 = '1';
let num2_141_2 = '2';

if (Number(num1_141_2) + Number(num2_141_2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// #3
let num1_141_3 = '1';
let num2_141_3 = '2';

if (Number(num1_141_3) + Number(num2_141_3) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// #4
let num141_4 = 123;

if (String(num141_4)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

// #5
let num141_5 = 123;

if (String(num141_5)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}


// #6
let num141_6 = 123;

if (String(num141_6)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

// #7
let num141_7 = 123;
let first141_7 = String(num141_7)[0];

if (first141_7 === '1') {
	console.log('+++');
} else {
	console.log('---');
}

// #8
let num141_8 = 12;

if (String(num141_8).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// #9
let num141_9 = 12;

if (String(num141_9).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// #10
let num141_10 = 12;

if (String(num141_10).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// #11
let num141_11 = 12;

if (String(num141_11).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// #12
let num141_12 = 12;

if (String(num141_12).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// #13
let num141_13 = '098765'; // берем в кавычки, чтобы обращаться к цифрам

let sum1_141 = Number(num141_13[0]) + Number(num141_13[1]) + Number(num141_13[2]);
let sum2_141 = Number(num141_13[3]) + Number(num141_13[4]) + Number(num141_13[5]);

if (sum2_141 === sum2_141) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}


// Задача №142
let month_142 = 2;

if (month_142 === 12 || month_142 === 1 || month_142 === 2) {
		console.log('Зима');
} else if (month_142 >= 3 && month_142 <= 5) {
		console.log('Весна');
} else if (month_142 >= 6 && month_142 <= 8) {
		console.log('Лето');
} else if (month_142 >= 9 && month_142 <= 11) {
		console.log('Осень');
} else {
		console.log('Некорректный месяц');
}

let str = 'abcde'; 

if (str[0] === 'a') {
		console.log('да');
} else {
		console.log('нет');
}

let num142_3 = 12345; 

if (String(num)[0] === '1' || String(num)[0] === '2' || String(num)[0] === '3') {
		console.log('да');
} else {
		console.log('нет');
}

let num142_4 = 456; 
let sum142_4 = Math.floor(num142_4 / 100) + Math.floor((num142_4 % 100) / 10) + Math.floor(num142_4 % 10);
console.log('Сумма цифр:', sum142_4);

let num142_5 = 123456; 
let firstHalfSum = Math.floor(num142_5 / 1000) % 10 + Math.floor(num142_5 / 100) % 10 + Math.floor(num142_5 / 10) % 10;
let secondHalfSum = num142_5% 10 + Math.floor(num142_5 / 10) % 10 + Math.floor(num142_5 / 100) % 10;

if (firstHalfSum === secondHalfSum) {
	console.log('да');
} else {
	console.log('нет');
}


// Задача №144
let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr144){
	console.log(elem);
}


// Задача №145
let obj145 = {x: 1, y: 2, z: 3};
for (let key in obj145) {
	console.log(key);
}
for (let key in obj145) {
	console.log(obj145[key]);
}


// Задача №146
let i_146 = 1;
while(i_146 <= 100){
		console.log(i_146)
		i_146++;
}

let i_146_2 = 11;
while(i_146_2 <= 33){
		console.log(i_146_2);
		i_146_2++;
}

let i_146_3 = 100;
let counter_146 = 0;
while (i_146_3 <= 1000){
		console.log(i_146_3);
		console.log(counter_146);
		i_146_3 = (i_146_3 * 3);
		counter_146++;
}

let num146 = 1;
let iterations146 = 0;

while (num146 <= 1000) {
	num146 = num146 * 3;
	iterations146++;
}

console.log('Результат:' + num146);
console.log('Количество итераций:' + iterations146);



// Задача №147
for (let i_147_1 = 1; i_147_1 <= 100; i_147_1++ ){
	console.log(i_147_1);
}

for (let i_147_2 = 11; i_147_2 <= 33; i_147_2++){
	console.log(i_147_2);
}

for (let i_147_3 = 0; i_147_3 <= 100; i_147_3 += 2){
	console.log(i_147_3);
}

for (let i_147_4 = 1; i_147_4 <= 99; i_147_4 += 2){
	console.log(i_147_4);
}

for (let i_147_5 = 100; i_147_5 >= 0; i_147_5--){
	console.log(i_147_5);
}


// Задача №148
let arr148_1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr148_1.length; i++) {
	console.log(arr148_1[i]);
}

let arr148_2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < (arr148_2.length - 1); i++) {
	console.log(arr148_2[i]);
}

let arr148_3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr148_3.length - 1; i >= 0; i--) {
	console.log(arr148_3[i]);
}

let arr148_4 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr148_4.length; i++) {
	console.log(arr148_4[i]);
}


// Задача №149
let arr149_1 = [2, 5, 9, 15, 1, 4];
for (let elem of arr149_1) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

let obj149_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let elem in obj149_2) {
	if (obj149_2[elem] % 2 !== 0) {
		console.log(obj149_2[elem]);
	}
}


// Задача №150
let res150 = 0;

for (let i = 2; i <= 100; i += 2) {
	res150 += i;
}
console.log(res150);

let sumOdd150 = 0;
for (let i = 1; i < 100; i += 2) {
	sumOdd150 += i;
}
console.log(sumOdd150);

let product150 = 1;
for (let i = 1; i <= 20; i++) {
	product150 *= i;
}
console.log(product150);


// Задача №151
let arr151_1 = [2, 5, 9, 3, 1, 4];
let res151_1 = 0;
for (let elem of arr151_1) {
	res151_1 += elem;
}
console.log(res151_1); // искомая сумма

let arr151_2 = [2, 5, 9, 3, 1, 4];
let res151_2 = 0;
for (let elem of arr151_2) {
		if (elem % 2 === 0) {
			res151_2 += elem;
		}
	}  
console.log(res151_2);

let arr151_3 = [2, 5, 9, 3, 1, 4];
let res151_3 = 0;
for (let elem of arr151_3) {
	res151_3 += elem * elem;
}
console.log(res151_3);

let arr151_4 = [2, 5, 9, 3, 1, 4];
let res151_4 = 1;
for (let elem of arr151_4) {
	res151_4 *= elem;
}
console.log(res151_4); 


// Задача №152
let str152_1 = '';
for (let i = 0; i <= 5; i++) {
	str152_1 += '-';
}
console.log(str152_1); 

let str152_2 = '';
for (let i = 1; i <= 9; i++) {
	str152_2 += i;
}
console.log(str152_2); 

let str152_3 = '';
for (let i = 9; i >= 1; i--) {
	str152_3 += i;
}
console.log(str152_3);

let str152_4 = '';
for (let i = 1; i <= 9; i++) {
	str152_4 += '-';
		str152_4 += i;
}
console.log(str152_4);


// Задача №153
for (let i = 10; i <= 1000; i++) {
	let str153 = String(i);
	console.log(str153[0]);
}

for (let i = 10; i <= 1000; i++) {
	let str153_2 = String(i);
	let firstDigit_153 = Number(str153_2[0]);
	let secondDigit_153 = Number(str153_2[1]);
	console.log(firstDigit_153 + secondDigit_153);
}

for (let i = 10; i <= 1000; i++) {
	let str153_3 = String(i);
	if (str153_3[0] === '1') {
		console.log(i);
	}
}

for (let i = 10; i <= 1000; i++) {
	let str153_4 = String(i);
	let firstDigit_153_4 = Number(str153_4[0]);
	let secondDigit_153_4 = Number(str153_4[1]);
	if (firstDigit_153_4 + secondDigit_153_4 === 5) {
		console.log(i);
	}
}


// Задача №154
let arr154_1 = [1, 2, 3, 0, 4, 5];

for (let elem154_1 of arr154_1) {
	if (elem154_1 === 0) {
		break;
	}
	console.log(elem154_1);
}

let arr154_2 = [1, 2, 3, -1, 4, 5];
let sum154_2 = 0;

for (let elem154_2 of arr154_2) {
	if (elem154_2 < 0) {
		break;
	}
	sum154_2 += elem154_2;
}
console.log('Сумма:', sum154_2);

let arr154_3 = [1, 2, 3, 4, 5];
let position154_3 = -1;

for (let i = 0; i < arr154_3.length; i++) {
	if (arr154_3[i] === 3) {
		position154_3 = i;
		break;
	}
}
console.log('Позиция первого числа 3:', position154_3);

let sum154_4 = 0;
let count154_4 = 0;

for (let i = 1; sum154_4 <= 100; i++) {
	sum154_4 += i;
	count154_4++;
}
console.log('Количество целых чисел:', count154_4);


// Задача №156
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i.toString() + j.toString() + " ");
	}
}


// Задача №159
let arr1_159 = [];
for (let i = 1; i <= 10; i++) {
	arr1_159.push(i);
}
console.log(arr1_159);

let arr2_159 = [];
for (let i = 0; i < 10; i++) {
	arr2_159.push('x');
}
console.log(arr2_159);

let originalArray = [-3, 5, -1, 0, 7, -8, 2];
let positiveArray = [];
for (let i = 0; i < originalArray.length; i++) {
	if (originalArray[i] > 0) {
		positiveArray.push(originalArray[i]);
	}
}
console.log(positiveArray);



// Задача №160
let arr160_1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_1.length; i++) {
	arr160_1[i] = arr160_1[i] ** 2;
}
console.log(arr160_1);

let arr160_2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_2.length; i++) {
	arr160_2[i] -= 1;
}
console.log(arr160_2);

let arr160_3 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_3.length; i++) {
	arr160_3[i] += 10;
}
console.log(arr160_3);