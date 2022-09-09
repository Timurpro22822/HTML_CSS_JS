////#region Task 1
// function countBs(str) {
//        var length = str.length;
//        let count = 0;                        
//        for(n=0; n<length; n++)
//        {
//            var c = str.charAt(n);              
//            if(c==" ")                    
//           count++;
//         }
//       return count;
// }
// alert(countBs("Hello world"));
////#endregion
////#region Task 2
// function ucFirst(str) {
//     if (!str) return str;
// 
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// alert(ucFirst("привіт") );
////#endregion

////#region Task 3
// String.prototype.countWrd = function(str) {
//     return this.split(/\s+\b/).length;
// }
// alert("Hello World".countWrd());

////#region Task 5
function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
alert(checkPalindrom("Hi")) // false
////#endregion
////#endregion