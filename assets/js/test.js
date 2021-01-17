const myPow = (x, n) => {
 if(n !== 1) x*= myPow(x, n - 1); return x;
}
console.log(myPow(3,2));


