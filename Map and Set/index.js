// Q1-
var str = "abcadeecfb";
var mySet = new Set(str);
console.log(...mySet);

// Q2-
var str = "abcadeecfb";
const myMap = new Map();
for (var alphabet of str) {
  if (myMap.has(alphabet)) {
    myMap.set(alphabet, myMap.get(alphabet) + 1);
  } else {
    myMap.set(alphabet, 1);
  }
}
console.log(myMap);