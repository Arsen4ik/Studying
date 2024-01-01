var inp1 = document.getElementById('input1');
var inp2 = document.getElementById('input2'); 
var inp3 = document.getElementById('input3'); 

var inp1 = document.getElementById('sum');
var inp2 = document.getElementById('sub'); 
var inp3 = document.getElementById('mult'); 
var inp3 = document.getElementById('div');


inp3.value = +inp1.value + +inp2.value;
inp3.value = inp1.value - inp2.value;
inp3.value = inp1.value * inp2.value;
inp3.value = inp1.value / inp2.value;


console.log(input3.value);

