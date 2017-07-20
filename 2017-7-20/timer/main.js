setTimeout(function() {
  console.log("2s");
}, 2000);
setTimeout(function() {
  console.log("1s");
}, 1000);
console.log("0s");

var count = 0;
var timer = setInterval(function() {
  count++;
  if (count > 30) {
    clearInterval(timer);
    return;
  }
  console.log("count:" + count);
}, 100);
