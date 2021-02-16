function addUpTo(n){

let total=0;
for (let i = 1; i<=n;i++){
    total +=i;
}
return total;

}

var time1 = performance.now();
console.log(addUpTo(100000));
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



function addUpTo1(n) {
  return n * (n + 1) / 2;
}

var time3 = performance.now();
console.log(addUpTo1(100000));
var time4 = performance.now();
console.log(`Time Elapsed: ${(time4 - time3) / 1000} seconds.`)

