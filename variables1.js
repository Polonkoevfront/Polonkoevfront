// Объявление переменной
// 1. Объявите переменную name и присвойте ей ваше имя.
// let name = "John";

// console.log(name);

// Объявление нескольких переменных
// 2. Объявите переменные age и city, присвойте им значения.
// let age = "20";
// let city = "New-York";

// console.log(age, city);

// Конкатенация строк
// 3. Объявите переменные firstName и lastName, объедините их и выведите полное имя.
// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName, lastName);

// Переменные и типы данных
// 4. Объявите переменную isStudent и присвойте ей значение true.
// let isStudent = true;

// console.log(isStudent);

// Изменение значения переменной
// 5. Объявите переменную count, присвойте ей значение, затем измените это значение.
// let count = 10;
// count = 11;

// console.log(count);

// Обмен значений переменных
// 6. Объявите переменные a и b, поменяйте их значения местами.
// let a = "a";
// let b = "b";

// console.log(b, a);

// Проверка типа переменной
// 7. Объявите переменную price и присвойте ей значение 19.99. Проверьте её тип.
// let price = 19.99;

// console.log(typeof price);

// Использование const
// 8. Объявите константу PI и присвойте ей значение 3.14.
// const PI = 3.14;

// console.log(PI);

// Преобразование строки в число
// 9. Объявите переменную str со значением "123" и преобразуйте её в число.
// let str = "123";

// let num = Number(str);

// console.log(num);

// Преобразование числа в строку
// 10. Объявите переменную num со значением 456 и преобразуйте её в строку.
// let num = 456;

// let str = String(num);

// console.log(str);

// Объявление массива
// 11. Объявите массив colors с элементами "red", "green", "blue".
// let colors = ["red", "green", "blue"];

// console.log(colors);

// Добавление элемента в массив
// 12. Добавьте элемент "yellow" в массив colors.

// colors.push("yellow");

// console.log(colors);

// Удаление элемента из массива
// 13. Удалите последний элемент из массива colors.
// colors.pop()

// console.log(colors);

// Доступ к элементу массива
// 14. Объявите массив fruits с элементами "apple", "banana", "cherry". Выведите второй элемент массива.
// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits[1]);

// Объявление объекта
// 15. Объявите объект person с свойствами name и age.
let person = {
    name: "Jack",
    age: 22
}
// console.log(person);

// Доступ к свойству объекта
// 16. Объявите объект car с свойствами make и model. Выведите значение свойства make.
// let car = {
//     make: "Mustang",
//     model: "Ford"
// }
// console.log(car.make);

// Изменение свойства объекта
// 17. Измените значение свойства age в объекте person.
// person.age = 23;

// console.log(person);

// Добавление свойства к объекту
// 18. Добавьте свойство color к объекту car.
// car.color = "Black";

// console.log(car);

// Удаление свойства из объекта
// 19. Удалите свойство model из объекта car.
// delete car.model;

// console.log(car);

// Использование шаблонных строк
// 20. Объявите переменные firstName и age. Используйте шаблонные строки для вывода фразы "My name is [firstName] and I am [age] years old."
// let firstName = "Mark";
// let age = 25;

// console.log(`My name is ${firstName} and I am ${age} years old.`);

// Объявление булевой переменной
// 21. Объявите переменную isAvailable и присвойте ей значение false.
// let isAvailable = false;

// console.log(isAvailable);

// Использование оператора typeof
// 22. Объявите переменные x и y со значениями 10 и "hello" соответственно. Используйте typeof для проверки их типов.
// let x = 10;
// let y = "hello";

// console.log(typeof x);
// console.log(typeof y);

// Сравнение переменных
// 23. Объявите переменные a и b со значениями 5 и 10. Используйте оператор == для проверки их равенства.
// let a = 5;
// let b = 10;

// console.log(a == b);

// Строгое сравнение переменных
// 24. Объявите переменные a и b со значениями "5" и 5. Используйте оператор === для проверки их строгого равенства.
// let a = "5";
// let b = 5;

// console.log(a === b);

// Логические операторы
// 25. Объявите переменные isAdult и hasTicket. Используйте логический оператор && для проверки, что обе переменные истинны.
// let isAdult = "aaa";
// let hasTicket = "bbb";

// let result = isAdult && hasTicket;

// console.log(result);

// Объявление функции
// 26. Объявите функцию greet, которая принимает параметр name и выводит приветствие с этим именем.
// function greet(name) {
    
//     console.log("Hello", name);

// }

// greet("John");

// Функция с возвращаемым значением
// 27. Объявите функцию square, которая принимает число и возвращает его квадрат.

// function square(num) {

//     return num;

// }
// console.log(square(3 ** 2));

// Функция с параметрами по умолчанию
// 28. Объявите функцию multiply с двумя параметрами, второй параметр должен иметь значение по умолчанию 1.
// function multiply(num1, num2 = 1) {
    
//     return num1 + num2;
    
// }
// console.log(multiply(10));

// Конкатенация чисел и строк
// 29. Объявите переменные num и str со значениями 10 и "20" соответственно. Сконкатенируйте их и выведите результат.
// let num = 10;
// let str = "20";

// let result = num + "" + str

// console.log(result);

// Преобразование boolean в строку
// 30. Объявите переменную isHappy со значением true и преобразуйте её в строку.
// let isHappy = true;

// let strBoolean = String(isHappy);

// console.log(strBoolean);

// Массив строк в одну строку
// 31. Объявите массив строк и объедините их в одну строку, используя метод join.
// let arrayStrs = ["red", "black", "ping"];

// let arrayFindStr = arrayStrs.join("");

// console.log(arrayFindStr);

// Преобразование строки в массив символов
// 32. Объявите строку и преобразуйте её в массив символов.
// let str = "string";

// let arraySymbols = str.split("");

// console.log(arraySymbols);

// Проверка длины строки
// 33. Объявите переменную text и присвойте ей строку. Проверьте длину этой строки.
// let text = "This is a string";

// const txtLenght = text.length;

// console.log(txtLenght);

// Объявление многомерного массива
// 34. Объявите массив массивов (двумерный массив).
// let multArray = [
//     [
//         "user",
//         "admin",
//         "person"
//     ],
//     [
//         "key",
//         "home",
//         "car"
//     ]
// ]
// console.log(multArray);

// Доступ к элементу многомерного массива
// 35. Объявите двумерный массив и выведите элемент из второй строки и первого столбца.
// let multArray2 = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ]

// console.log(multArray2[0][1]);

// Создание объекта с методами
// 36. Объявите объект с методами greet и farewell. Каждый метод должен выводить сообщение.
// let greetings = {
//     greet: "Hello",
//     farewell: "World"
// }

// Вызов метода объекта
// 37. Вызовите метод greet из объекта.
// console.log(greetings.greet);

// //2-ой вариант
// console.log(greetings["greet"]);

// Проверка свойства объекта
// 38. Проверьте, существует ли свойство name в объекте person.
// console.log(person);

// if (person.hasOwnProperty("name")) {

//     console.log("В объекте person есть свойство name");

// }else {

//     console.log("В объекте person нет свойства name");
// }

// Клонирование объекта
// 39. Создайте копию объекта person с помощью оператора расширения.
// let objCopie = {...person}

// console.log("objCopie", objCopie);

// Объединение объектов
// 40. Объедините два объекта в один, используя оператор расширения.
// let obj1 = {
//     firstname: "John",
// }

// let obj2 = {
//     lastname: "Smith",
// }

// let combineObj = {...obj1, ...obj2}

// console.log(combineObj);

// Объявление переменной с undefined
// 41. Объявите переменную x без присваивания значения.
// let x;

// console.log(x);

// Проверка переменной на undefined
// 42. Проверьте, является ли переменная x undefined.
// if (x === undefined) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Присваивание null переменной
// 43. Объявите переменную y и присвойте ей значение null.
// let y = null;

// console.log(y);

// Проверка переменной на null
// 44. Проверьте, является ли переменная y null.
// if (y === null) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Изменение значения элемента массива
// 45. Объявите массив numbers и измените значение первого элемента.
// let numbers = [0, 2, 3, 4, 5];
// numbers.shift();
// numbers.unshift(1);

// console.log(numbers);

// Использование метода массива
// 46. Объявите массив и используйте метод forEach для вывода каждого элемента.
// let allArray = ["white", "black", "red", "green", "blue", "yellow"].forEach(alert);

// Преобразование числа в строку и обратно
// 47. Объявите переменную num со значением 100. Преобразуйте её в строку, затем обратно в число.
// let num = 100;

// let numIsStr = String(num);

// console.log(numIsStr);

// Сравнение строк
// 48. Объявите переменные str1 и str2 со значениями "apple" и "banana". Сравните их.
// let str1 = "apple";
// let str2 = "banana";

// console.log(str1 === str2);

// Объявление массива чисел
// 49. Объявите массив numbers с несколькими элементами и выведите его длину.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers.length);

// Объявление объекта с вложенными объектами
// 50. Объявите объект student с вложенными объектами address и grades.
// let student = {
//     address: "animal1",
//     grades: "none"
// }

// console.log(student);