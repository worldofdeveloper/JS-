/*До этого момента мы рассматривали только массивы и объекты, в которых содержатся данные простых типов, такие как числа и строки. Однако
ничто не мешает сделать элементом массива или объекта другой массив или объект. Например, так может выглядеть массив с объектами, описывающими динозавров:*/

var dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
];

/*Получить сведения о первом динозавре можно уже известным нам способом — указав индекс в квадратных скобках:*/
dinosaurs[0];
//{ name: "Тираннозавр рекс", period: "Верхнемеловой" }

/*А если нужно только название первого динозавра, достаточно указать ключ объекта в еще одних квадратных скобках, следом за индексом:*/
dinosaurs[0]["name"];
//"Тираннозавр рекс"

/*Другой вариант — воспользоваться точечной нотацией:*/
dinosaurs[1].period;
//"Верхнеюрский"

/*Точечную нотацию можно использовать только с объектами, для массивов она не подходит.*/

/*Давайте рассмотрим более сложный пример — массив объектов со сведениями о друзьях, где в каждый из объектов вложено по еще одному
массиву. Сначала создадим объекты, а затем поместим их в массив.*/

var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

/*Теперь создадим массив друзей:*/
var friends = [anna, dave, kate];

/*Итак, в переменной friends находится массив с тремя элементами:
anna, dave и kate (каждый из них является объектом). Мы можем получить любой из объектов по его индексу в массиве:*/

friends[1];
//{ name: "Дэйв", age: 5, luckyNumbers: Array[3] }

/*Также мы можем получить значение, хранящееся в объекте, указав индекс объекта в квадратных скобках, поставив точку
и написав соответствующий ключ:*/
friends[2].name
//"Кейт"