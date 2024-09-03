// Challenge: Changing String Casing

/*
 *      var nome = prompt("Digite a primeira letra do seu nome: ");
 *      var primeiraLetra = nome.slice(0, 1);
 *
 *      alert(primeiraLetra.toUpperCase() + nome.slice(1, nome.length));
 */

// Dog Age to Human Age Formula
/*
 *   var dogAge = prompt("How old is your dog: ");
 *  var humanAge = (dogAge - 2) * 4 + 21;
 *   alert("Human Age is -> " + humanAge);
 */

/*
function getMilk() {
  console.log("LeaveHouse");
  console.log("moveRigth");
  console.log("LeaveHouse");
  console.log("moveRigth");
  console.log("LeaveHouse");
  console.log("moveRigth");
  console.log("LeaveHouse");
  console.log("moveRigth");
  console.log("LeaveHouse");
  console.log("moveRigth");
}

getMilk();
*/

/*
function lifeinWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log(`You have ${days} days, ${weeks} weeks, and ${months} left.`);
}

lifeinWeeks(56);
*/
/*
function bmiCalculator(weigth, height) {
    var bmi = weigth / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
*/

/*s
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
*/
/*
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);

    if (bmi > 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`;
    }
    console.log(bmi);
    return interpretation;
}

bmiCalculator(65, 1.8);
*/

// Leap Year Code

/*
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}
*/

// FizzBuzz

/*
    var output = [];
    var count = 1;

    function fizzBuzz() {
        output.push(count);
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }

        count++;
        console.log(output);
    }
*/

//Buying Lunch
/*
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    function whosPaying(name) {
        var numbrOfPeoples = names.length;
        var randomPersonPosition = Math.floor(Math.random() * numbrOfPeoples);
        var randomPerson = names[randomPersonPosition];

        return randomPerson + " is going to buy lunch today!";
    }
*/

//the 99 Bottles
/*
    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        }
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
*/

//Fibonacci Code
/*
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]); // 4
        }
    }

    return output;
}

output = fibonacciGenerator(5);
console.log(output);
*/
