"use strict";


// Задача №81
let obj81 = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj81);


// Задача №82
let user82 = {name: 'Дмитрий', surname: 'Данилюк', patronymic: 'Студент'};
console.log(user82['name'], user82['surname'], user82['patronymic']);


// Задача №83
let date83 = {year: '2024', month: '10', day: '10'};
console.log([date83.year, date83.month, date83.day].join('-'));
// использовал метод join,чтобы был красивый вывд даты


// Задача №84

let obj_84 = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj_84['1a']);
console.log(obj_84.b2);
console.log(obj_84['с-с']);
console.log(obj_84['d 4']);
console.log(obj_84.e5);


// Задача №85
let obj85 = {x: 1, y: 2, z: 3};
obj85.x = 1**2;
obj85.y = 2**2;
obj85.z = 3**2;
console.log(obj85);


// Задача №86
let obj86 = {};
obj86.a = 1;
obj86.b = 2;
obj86.c = 3;
console.log(obj86);


// Задача №87
let obj87 = {7: 'a', 50: 'b', 23: 'c'};
console.log(obj87[7], obj87[23], obj87[50]);
console.log(obj87[7], obj87[50], obj87[23]);


// Задача №88
let obj88 = {x: 1, y: 2, z: 3};
let keys88 = Object.keys(obj88);
console.log(keys88);


// Задача №89
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);


// Задача №90
let obj90 = {x: 1, y: 2, z: 3};
let key90 = 'x';
console.log(obj90[key90]);


// Задача №91
// #1
let obj91_1 = {x: 1, y: 2, z: 3};
console.log(obj91_1['x']);

// #2
let obj91_2 = {x: 1, y: 2, z: 3};
let key91_2 = 'x';
console.log(obj91_2[key91_2]);


// Задача №92
// #1
let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1.prop92_1);

// #2
let obj92_2 = {x: 1, y: 2, z: 3};
let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);


// Задача №93
// #1
let key93_1 = 'x';

let obj93_1 = {
    [key93_1]: 1, 
    y: 2,
    z: 3
};
console.log(obj93_1); 

// #2
let key1_93 = 'x';
let key2_93 = 'y';
let key3_93 = 'z';

let obj93_2 = {
    [key1_93]: 1, // Используем переменную key1 как ключ
    [key2_93]: 2, // Используем переменную key2 как ключ
    [key3_93]: 3  // Используем переменную key3 как ключ
};

console.log(obj93_2);


// Задача №94

// Ответ: выведет true
// 			 вывелет false


// Задача №95
// Ответ: false



// Задача №96
// #1
// Ответ: object
// #2
// Ответ: object
// #3
// Ответ: object
// #4
// Ответ: number


// Задача №97

// #1
// Ответ: object
// #2
// Ответ: object
// #3
// Ответ: object
// #4
// Ответ: number
// #5
//Ответ: string


// Задача №98
// #1
// Ответ:true
// #2
// Ответ:false


// Задача №100
// #1
// Ответ:["a", 2, 3]
// #2
// Ответ: ["a", "b", 3]
// #3
//Ответ: ["b", 2, 3]


// Задача №102
const arr102 = [1, 2, 3, 4, 5];
const res102 = arr102[1] + arr102[2];

console.log(res102);


// Задача №103
let obj103_1 = {x: 1, y: 2, z: 3};
console.log(obj103_1['x']);

let obj103_2 = {x: 1, y: 2, z: 3};
let key103_2 = 'x';
console.log(obj103_2[key103_2]);

let obj103_3 = {x: 1, y: 2, z: 3};
let sum103 = obj103_3['x'] + obj103_3['y'] + obj103_3['z'];
console.log(sum103);


// Задача №104
let obj104 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj104).length);


// Задача №105
let test105 = 2;
if (test105 > 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 < 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 >= 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
if (test105 <= 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}


// Задача №106
let per106 = 10;
if (per106 == 0) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}


// Задача №107
let test107 = 9;

if (test107 != 0) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}


// Задача №108
let test1_108a_1 = 1;
let test2_108b_1 = 2;

if (test2_108b_1 > test1_108a_1) {
	console.log(test2_108b_1); // сработает это
} else {
	console.log(test1_108a_1);
}

let test1_108a_2 = 1;
let test2_108b_2 = 2;
if (test1_108a_2 == test2_108b_2) {
	console.log('значения равны');
} else {
	console.log('значения не равны'); 
}


// Задача №109
let test1_109a_2 = 'abc';
let test2_109b_2 = 'abc';
if (test1_109a_2 == test2_109b_2) {
	console.log('строки равны');
} else {
	console.log('строки не равны'); 
}


// Задача №110
let test1_110a_2 = '123';
let test2_110b_2 = 123;
if (test1_110a_2 == test2_110b_2) {
	console.log('число и строка равны');
} else {
	console.log('число и строка не равны'); 
}


// Задача №111
// #1
// Ответ: +++
// #2
// Ответ: +++ 
// #3
// Ответ: +++
// #4
// Ответ: ---
// #5
// Ответ: +++


// Задача №112
// #1
// Ответ: ---
// #2
// Ответ: --- 
// #3
// Ответ: ---
// #4
// Ответ: +++
// #5
// Ответ: +++


// Задача №113
let num113  = 3;

if (num113 > 0 && num113 < 5) {
	console.log('+++');
} else {
	console.log('---');
}

let num113_2 = 10;

if (num113_2 >= 10 && num113_2 < 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num113_3 = 1;
let num113_3b = 2;
if (num113_3 <= 1 && num113_3b >= 3) {
	console.log('+++');
} else {
	console.log('---');
}



// Задача №114
// #1
// Ответ: ---
// #2
// Ответ: +++
// #3
// Ответ: +++
// #4
// Ответ: +++
// #5
// Ответ: +++
// #6
// Ответ: +++
// #7
// Ответ: ---
// #8
// Ответ: +++


// Задача №115 
let num115 = 3;
if (num115 == 0 || num115 > 1 && num115 < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}
// num115 > 1 && num115 < 5 - первое
// num115 == 0 || (num115 > 1 && num115) - второе



// Задача №116
// #1
let num116_1 = 3;

if ((num116_1 > 5 && num116_1 < 10) || num116_1 == 20) {
	console.log('+++');
} else {
	console.log('---');
}

// #2
let num116_2 = 3;

if (num116_2 > 5 || (num116_2 > 0 && num116_2 < 3)) {
	console.log('+++');
} else {
	console.log('---');
}

// #3
let num116_3 = 3;

if (num116_3 == 9 || (num116_3 > 10 && num116_3 < 20) || (num116_3 > 20 && num116_3 < 30)) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача №117
let num117_1 = 3;
let num117_2 = 10;
if (!(num117_1 >= 0 || num117_2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача №118
let test118 = true;

if (test118 === true) {
	console.log('+++');
} else {
	console.log('---');
}
if (test118 === false) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача №119
// #1
// Ответ:
// false (ложь); 
// "" или '' (пустая строка); 
// NaN (специальный числовой тип данных, который обозначает «не число»); 
// 0 (число ноль); 
// null («пустое» значение); 
// undefined («неопределённое» значение). 
// #2
// Ответ: +++
// #3
// Ответ: ---
// #4
// Ответ: ---
// #5
// Ответ: +++
// #6
// Ответ: +++
// #7
// Ответ: ---
// #8
// Ответ: ---


// Задача №120
let test120 = true;

if (test120) {
	console.log('+++');
} else {
	console.log('---');
}