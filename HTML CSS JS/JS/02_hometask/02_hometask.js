// Task 1
var array = [];
for ( var i = 0; i < 20; i++ ) {
    array.push(Math.round( Math.random() * 100 ));
}
console.log("Array: ", array)

// Task 2
// Відображення кожного елемента масива у вигляді: [1] - 5
//                                                 [2] - 78... і тд.
// Де цифра в дужках це індекс, а число навпроти, елемент якій стоїть під цим індексом
for ( var i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}

// Task 3
// Перевірка чи є в масиві число яке кратне 7-ми
for( var i = 0; i < array.length; i++) {
    if(array[i] % 7 == 0)
    {
        console.log(`Елемент під індексом [${i}], Кратне 7-ми`);
    }   
}

// Task 4
// Сортування масив по спаданню
array.sort((a, b) => b - a); // 0: a == b | <0: a < b | >0: a > b
console.log("Sorted with custom func:", array);

// Task 5 
// Заповнення в масиві 2-гої половини елементів нулями
// У функції fill(0,10), де 0 - це значення яким будуть замінюватись елементи, а 10 - це з якого числа будуть замінюватись елементи,не з індекса, а з числа(це якщо індекс іде з 0, то число з 1)
array.fill(0,10);
console.log(array);

// Task 6
// Видалення з масива перші 3 елемента використавши один метод
array.splice(0, 3);
console.log("After deleting 3 firts elements",array)

//Task 7
var arr = [];
for ( var i = 0; i < 20; i++ ) {
    arr.push(Math.round( Math.random() * 100 ));
}
console.log("Arr: ", arr)

// Функція для знаходження дубліката в одновимірному масиві. Йде перевірка з першого індекса по останній включно.
function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

if (hasDuplicates(arr)) {
    console.log("Duplicate elements found.");
}
else {
    console.log("No Duplicates found.");
}

//Task 8
var golovniyyArr = [];
for ( var i = 0; i < 20; i++ ) {
    golovniyyArr.push(Math.round( Math.random() * 100 ));
}
console.log("golovniyyArr: ", golovniyyArr)
var array2 = [];

golovniyyArr.splice(0,10);
array2.push(...golovniyyArr);
console.log("Друга половина першого массива в array2: ", array2);

