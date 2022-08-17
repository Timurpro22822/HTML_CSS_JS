////#region Task 1.1
// const year = 2022;
// let dateOfBirth = +prompt("Enter your date of birth:");
// if(dateOfBirth > year)
// {
//     console.log("Error")
// }
// else
// {
//     console.log(`Username's age is: ${year - dateOfBirth}`);
// }
////#endregion

////#region Task 1.2
// let capacityFD = +prompt("Enter capacity of flash drive in GB:") * 1024;
// let size = 820;
// console.log(capacityFD);
// let result = capacityFD / size
// alert(`Файлов з розміром в ${size} MB влазить в флешку ${capacityFD / 1024} GB (${capacityFD} MB): ${result}`);
////#endregion

////#region Task 2.1
    // let num = +prompt("Enter number:");
    // let getSymbol = (number) => 
    // {
    //     let sym = null;
    //     switch(number)
    //     {
    //         case 1:
    //             sym = "!";
    //             break;
    //         case 2:
    //             sym = "@";
    //             break;
    //         case 3:
    //             sym = "#";
    //             break;
    //         case 4:
    //             sym = "$";
    //             break;
    //         case 5:
    //             sym = "%";
    //             break;
    //         case 6:
    //             sym = "^";
    //             break;
    //         case 7:
    //             sym = "&";
    //             break;
    //         case 8:
    //             sym = "*";
    //             break;
    //         case 9:
    //             sym = "(";
    //             break;
    //         case 0:
    //             sym = ")";
    //             break;
    //         default:
    //             sym = "Error!";
    //             break;
    //     } 
    //     return sym;
    // }
    // alert(`${num} = ${getSymbol(num)}`);

////#endregion

////#region Task 2.2
    // let year = +prompt("Enter year:");
    // if(year % 4 == 0 && (year % 400 == 0 || year % 100 != 0))
    // {
    //     alert("Високосний");
    //     console.log("Високосний");
    // }
    // else{
    //     alert("Не високосний");
    //     console.log("Не високосний");
    // }
////#endregion

////#region Task 3.1
    // var a = Number(prompt("Enter start of diapason: "));
    // var n = Number(prompt("Enter end of diapason: "));
    // var sum = 0;
    // while(a <= n) {
    //     sum+=a;
    //     a++;
    // }
    // alert(sum);
////#endregion12

////#region Task 3.2
    // let number = +prompt("Enter number");
    // function countDigits(n) {
    //     for(var i = 0; n > 1; i++) {
    //        n /= 10;
    //     }
    //     return i;
    //  }
    // prompt('В переменной num %s знаков', countDigits(number));
////#endregion

////#region Task 3.3
    let number;
    let counterNegative = 0;
    let counterZero = 0;
    let counterPositive = 0;
    let numberParne = 0;
    let numberNeParne = 0;
    for(let i = 0; i < 10; i++) {
        number = +prompt("Enter 10 numbers: ");
        console.log(`Numbers: %s`, number)
        if(number % 2 == 0) {
            numberParne++;
        }
        else if(number % 2 != 0) {
            numberNeParne++;
        }
        if(number < 0) {
            counterNegative++;
        }
        else if(number == 0) {
            counterZero++;
        }
        else if(number > 0) {
            counterPositive++;
        }
    }
    console.log(`Кол-во парних: %s`, numberParne)
    console.log(`Кол-во не парних: %s`, numberNeParne)
    console.log(`Кол-во негативних: %s`, counterNegative);
    console.log(`Кол-во позитивних: %s`, counterPositive);
    console.log(`Кол-во нулів: %s`, counterZero);
////#endregion

////#region Task 3.4
    // const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятница', 'Субота', 'Неділя'];
    // let currDay = 0;

    // while (confirm(`${days[currDay]}.  Хочете побачити наступний день?`)) {
    //   currDay = (currDay + 1) % days.length;
    // }
////#endregion