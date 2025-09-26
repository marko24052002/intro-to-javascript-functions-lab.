//1.
function isAdult(age) {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
console.log('Exercise 2 Result:', isAdult(21));


//2.
function isCharAVowel() {
    const vowel = 'a'
  if ('Char' === 'a');
  return 'true';
  if ('Char' === 'y');
  return 'false';
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


//3.
function generateEmail(name, domain) {
    return 'johnsmith@example.com';
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//4.

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//5.
function greetUser(name, timeOfDay) {
 
     
  if (timeOfDay === 'morning') {
    return  'Good morning';
  } else if (timeOfDay === 'afternoon') {
   return  'Good afternoon';
  } else if (timeOfDay === 'evening') {
    return  'Good evening';
  } else {
   return 'Hello'; 
  }

  greeting `${greeting}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



//6.
const maxOfThree = function (num1, num2, num3) {
if (num1 > num2 && num1 > num3) {
    return num1;
} else if(num2 > num1 && num2 > num3) {
return num2
} else {
    return num3
}
}

//7.
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


//8.
 

   function convertTemperature(temp, scale) {
  if (scale === 'C') {
    return (temp * 9/5) + 32;
  } else if (scale === 'F') {
     return (temp - 32) * 5/9;
  }
  }


    console.log('Exercise 8 Result:', convertTemperature(32, "C"))

    //9.
function basicCalculator(num1, num2, operation) {
  
    if (operation === 'add') {
    return num1 + num2;
  }  else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  }  else if (operation === 'divide') {
    return num1 % num2;
    }  else {
      return  'Error';
    
    }
     
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));








