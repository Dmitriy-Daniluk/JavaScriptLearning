"use strict";


// Задача №41 - выдает ошибку
// alert(er_for41);


// Задача №42
const PI = 3.14;
let radius_for41 = 2;
let per_lenth42 = PI * radius_for41 ** 2;
// alert(per_lenth42);


// Задача №44
// #1
let str_a44 = '10'
let str_b44 = '20'
// alert(Number(str_a44) + Number(str_b44));
// #2
// alert( Number('2') + Number('3') );
// #3
// alert( 2 + Number('3') );
// #4
// alert( '2' + Number('3') );


// Задача №45
let a_45 = +'2';
let b_45 = +'3';
// alert(a_45 + b_45); 


// Задача №47
let per_47a1 = parseFloat('5px');
let per_47b1 = parseFloat('6px');
// alert(per_47a1 + per_47b1);

let per_47a2 = parseFloat('5.5px');
let per_47b2 = parseFloat('6.25px');
// alert(per_47a2 + per_47b2);

let per_47a3 = parseFloat('5.5px');
let per_47b3 = parseFloat('6.25px');
// alert(per_47a3 + per_47b3 + 'px');


// Задача №48
let per_48a1 = 120;
let per_48b1 = 240;
// alert(String(per_48a1) + String(per_48b1));


// Задача №49
let per49_1 = 12345;
// alert(String(per49_1).length);

let per49_2a = 873;
let per49_2b = 4326;
let str49_2a = String(per49_2a); 
let str49_2b = String(per49_2b);

// alert(str49_2a.length + str49_2b.length);


// Задача №52
let str52_1 = 'abcde';
let [ num_contstr_52a, num_contstr_52c, num_contstr_52e ]= [0, 2, 4];
// alert(str52_1[num_contstr_52a] + ' ' + str52_1[num_contstr_52c] + ' ' + str52_1[num_contstr_52e]);

let str52_2 = 'abcde';
let [num_contstr_52_2a, num_contstr_52_2b, num_contstr_52_2c, num_contstr_52_2d, num_contstr_52_2e] = [0, 1, 2, 3, 4];
// alert(str52_2[num_contstr_52_2e] + ' ' + str52_2[num_contstr_52_2d] + ' ' + str52_2[num_contstr_52_2c]+ ' ' + str52_2[num_contstr_52_2b] + ' ' + str52_2[num_contstr_52_2a]);

let str52_3 = 'abcde';
let number_str52_3 = 2;
// alert(str52_3[number_str52_3]);


// Задача №54
let str54 = 'string';
// alert(str54[str54.length - 1] + ' ' + str54[str54.length - 2] + ' ' + str54[str54.length - 3]);


// Задача №55
let str55 = '12345';
// alert(Number(str55[0]) + Number(str55[1]) + Number(str55[2]) + Number(str55[3]) + Number(str55[4]));


// Задача №56
let num56 = String(12345);
// alert(Number(num56[0]) + Number(num56[1]) + Number(num56[2]) + Number(num56[3]) + Number(num56[4]));

// alert((num56[0]) * (num56[1]) * (num56[2]) * (num56[3]) * (num56[4]));

// alert((num56[4]) + (num56[3]) + (num56[2]) + (num56[1]) + (num56[0]));


// Задача №58
let num_58 = 47;
num_58 += 7;
num_58 -= 18;
num_58 *= 10;
num_58 /= 15;
// alert(num_58);


// Задача №59
let num_59 = 10;
num_59++;
num_59++;
num_59--;
// alert(num_59);


// Задача №61
// alert(0.1 * 0.2);

// alert(0.3 - 0.1);


// Задача №62
// alert('Ваш возраст: ' + prompt('Ваш возраст?'));


// Задача №63
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
// alert(Number(num1) + Number(num2)); 

let side_63 = Number(prompt('Введите значение стороны квадрата?'));
// alert('Площадь квадрата равна: ' + (side_63 ** 2)  );

let height_63 = Number(prompt('Введите значение высоты прямоугольника?'));
let width_63 = Number(prompt('Введите значение ширины прямоугольника?'));
// alert('Площадь прямоугольника равна: ' + (height_63 * width_63));


// Задача №64

let str64_1 = 'text with tag b';
document.write('<b>' + str64_1 + '</b>');

let str64_2 = 'text with tag i';
document.write('<i>' + str64_2 + '</i>');

let str64_3 = 'text';
document.write('<i>' + str64_3 + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');



// Задача №66
// alert('Количество секунд в сутках: ' + (60 * 60 * 24) + ' секунд.');
// alert('Количество секунд в 30 сутках: ' + (86400 * 30) + ' секунд.');
// alert('Количество секунд в году (без учёта високосных годов): ' + (86400 * 365) + ' секунд.');
// alert('Количество минут в сутках: ' + (60 * 24) + ' минут.');
// alert('Количество минут в году: ' + (1440 * 365) + ' минут.');
// alert('Количество байт в мегабайте: '+ (1024 * 1024) + ' байт.');
// alert('Количество байт в гигабайте: ' + (1048576 * 1024) + ' байт.');
// alert('Количество байт в 10 гигабайтах: ' + (1073741824 * 10) + ' байт.');
// alert('Количество байт в терабайте: ' + (1073741824 * 1024) + ' байт.');
// alert('Количество килобайт в терабайте: ' + (1099511627776 / 1024) + ' килобайта.');


// Задача №67
let r67 = 5; 
let s_res67_1 = Math.PI * r67 * r67; 
console.log(s_res67_1); 

let a_side67 = 4; 
let s_res67_2 = a_side67 * a_side67; 
console.log(s_res67_2); 

let a_side67_p = 3; 
let b_height67_p = 5; 
let s_res67_3 = a_side67_p * b_height67_p; 
console.log(s_res67_3); 

let a_side67_p4 = 3; 
let b_height67_p4 = 5; 
let p_res67_4 = 2 * (a_side67_p4 + b_height67_p4); 
console.log(p_res67_4); 

let tc67_5 = 25; 
let tf67_5 = (tc67_5 * (9 / 5)) + 32; 
console.log(tf67_5); 

let tf67_6 = 77; 
let tc67_6 = (tf67_6 - 32) * (5 / 9); 
console.log(tc67_6); 


// Задача №68
let arr_68 = [1, 2, 3];
// alert(arr_68);
console.log(arr_68);

let arr_str68 = ['1', '2', '3'];
// alert(arr_str68);
console.log(arr_str68);


// Задача №69
let arr69_1 = ['1', '2', '3'];
console.log(arr69_1[0]); 
console.log(arr69_1[1]); 
console.log(arr69_1[2]); 

let arr69_2 = [1, 2, 3];
console.log(arr69_2[0]); 
console.log(arr69_2[1]); 
console.log(arr69_2[2]); 

let arr69_3 = [1, 2, 3];
// alert(arr69_3[0] + arr69_3[1] + arr69_3[2]);

let arr69_4 = ['a', 'b', 'c', 'd'];
// alert(String(arr69_4[0] + '+' + arr69_4[1] + '+' + arr69_4[2] + '+' + arr69_4[3]));


// Задача №70
let arr70_1 = [1, 3, 4, 67, '2', 'aboba'];
console.log(arr70_1.length);

let arr70_2 = [3, 4, 5, 'haha', '7', 'abobus'];
console.log(arr70_2[arr70_2.length - 1]);


// Задача №71
let arr71 = ['a', 'b', 'c'];

arr71[0] = '1';
arr71[1] = '2';
arr71[2] = '3';
console.log(arr71);


// Задача №72
let arr_72 = [1, 2, 3];

arr_72[0] += 3;
arr_72[1] += 3;
arr_72[2] += 3;
console.log(arr_72);


// Задача №73
let arr_73 = [1, 2, 3];

arr_73[0]++;
++arr_73[1];
arr_73[2]++;
console.log(arr_73);


// Задача №74
let arr74_1 = [];

arr74_1[0] = 1;
arr74_1[1] = 2;
arr74_1[2] = 3;
console.log(arr74_1);

let arr74_2 = [1, 2, 3];

arr74_2[3] = 4;
arr74_2[4] = 5;
console.log(arr74_2);


// Задача №75
let arr75 = [];

arr75[3] = 'a';
arr75[8] = 'b';
console.log(arr75.length);


// Задача №76
let arr76_1 = [];
arr76_1.push(1);
arr76_1.push(2);
arr76_1.push(3);
console.log(arr76_1);

let arr76_2 = [1, 2, 3];
arr76_2.push(4);
arr76_2.push(5);
console.log(arr76_2);


// Задача №77
let arr77_1 = ['a', 'b', 'c'];
let key77_1 = 2;
console.log(arr77_1[key77_1]);

let arr77_2 = [1, 2, 3, 4, 5];
let key1_77 = 1;
let key2_77 = 2;
console.log(arr77_2[key1_77] + arr77_2[key2_77]);


// Задача №78
let arr78 = ['a', 'b', 'c', 'd', 'e'];
// alert(arr78.length);
console.log(arr78);
delete arr78[1];
delete arr78[3];
console.log(arr78);
// alert(arr78.length);
// Задача №79
/*
Код должен вывести последний элемент массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]);
*/
let arr79_1 = [1, 2, 3, 4, 5];
console.log(arr79_1[arr79_1.length - 1]);
/*
Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);
*/
let arr79_2 = [1, 2, 3, 4, 5];
console.log(arr79_2[0] + arr79_2[1] + arr79_2[2] + arr79_2[3] + arr79_2[4]);
/*
Код должен вывести длину массива:
let arr = {1, 2, 3, 4, 5};
console.log(arr.length]);
*/
let arr79_3 = [1, 2, 3, 4, 5];
console.log(arr79_3.length);
/*
Код должен вывести длину массива:
let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght);
*/
let arr79_4 = [1, 2, 3, 4, 5];
console.log(arr79_4.length);


// Задача №80
let obj80 = {1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};
console.log(obj80);