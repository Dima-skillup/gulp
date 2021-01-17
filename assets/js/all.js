console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('new');
console.log('new');
console.log('new');
console.log('new');
console.log('new');
console.log('new');
const myPow = (x, n) => {
 if(n !== 1) x*= myPow(x, n - 1); return x;
}
console.log(myPow(3,2));


