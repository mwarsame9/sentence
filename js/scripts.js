// var sentence = function(number1) {
// 	return number1;
// };
//
// var number1 = prompt("Enter a sentence:");
//
//
//
// alert(sentence);


var sentence = prompt("Enter a sentence")
var letter1 = sentence.charAt(0).toUpperCase();
var letter2 = sentence.charAt(sentence.length-1).toUpperCase();
var result = letter1 + letter2;



var result2 = letter2 + letter1;




var n = sentence.length;


var number1 = parseInt(n / 2);

// alert(number1);

var reverse = (sentence.charAt(number1)+ sentence + result2 );
// alert(reverse);

alert(reverse.split("").reverse().join(""));
