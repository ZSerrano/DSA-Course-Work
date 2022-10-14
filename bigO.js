// Initial work on Big O Notation section of the Udemy DSA course

// Write a function that accepts a string input and returns a reversed copy
// function reverse(s) {
//   var splitS = s.split("");
//   var reverseS = splitS.reverse();
//   var joinS = reverseS.join("");

//   return joinS;
// }

// console.log(reverse("hello"));

// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n
function accumulator(n) {
  let total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(accumulator(4));

// Another possible solution using different math
function addUp(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUp(1));
