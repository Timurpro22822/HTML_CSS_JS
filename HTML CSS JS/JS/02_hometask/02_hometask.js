// Task 1
var array = [];
for ( var i = 0; i < 20; i++ ) {
    array.push(Math.round( Math.random() * 100 ));
}
console.log("Array: ", array)

// Task 2
for ( var i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}

// Task 3
for( var i = 0; i < array.length; i++) {
    if(array[i] % 7 == 0)
    {
        console.log(`Елемент під індексом [${i}], Кратне 7-ми`);
    }   
}

// Task 4
array.sort((a, b) => b - a); // 0: a == b | <0: a < b | >0: a > b
console.log("Sorted with custom func:", array);

// Task 5 


// Task 6
array.splice(0, 3);
console.log("After deleting 3 firts elements",array)