//Business Logic
var a;
var b;
var c;

var triangleTester = function (a, b, c) {
// test to see if triangle is a triangle

if (isNaN(a) || isNaN(a) || isNaN(c)) {
  return "missing a value";
} else if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
  return "not a triangle";
} else if (a !== b && a !== c) {
  return "scalene";
} else if (a === b && a === c) {
  return "equilateral";
} else if (a === b && b !== c || a === c && c !== b || b === c && c !== a) {
  return "isosceles";
}
};

// UI Logic
$(document).ready(function() {
  $("form#triangles").submit(function(event) {
       a = parseInt($("input#a").val());
       b = parseInt($("input#b").val());
       c = parseInt($("input#c").val());
      result = triangleTester(a, b, c);

      if (result === "missing a value") {
        document.write("Try again, you must enter a value into each field");
      } else if (result === "not a triangle") {
        document.write("NOT A TRIANGLE");
      } else if (result === "scalene") {
        document.write("You JUST MADE A SCALENE TRIANGLE");
      } else if (result === "equilateral") {
        document.write("Holy cow, you made an equilateral triangle!")
      } else if (result === "isosceles") {
        document.write("You just make that equilateral into an isosceles, baby!")
      }

    event.preventDefault();
  });
});
