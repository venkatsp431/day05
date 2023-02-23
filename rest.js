//Anonymous Func

//Print odd numbers in an array

var oddNumbF = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
};
oddNumbF([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Convert all the strings to title caps in a string array

var titleCapsF = function (arr) {
  var titleCaps = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i][0].toUpperCase() + arr[i].slice(1);
    titleCaps.push(str);
  }
  return titleCaps;
};
console.log(titleCapsF(["venkat", "arun", "ball", "cricket"]));

//Sum of all numbers in an array

var sumNumF = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumNumF([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Return all the prime numbers in an array

var primeCheckF = function (arr) {
  var prime = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] % j === 0) count++;
    }
    if (count === 2) prime.push(arr[i]);
    count = 0;
  }
  return prime;
};
console.log(primeCheckF([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]));

// Return all the palindromes in an array

var palindromeCheckF = function (arr) {
  var palindrome = [];
  for (var i = 0; i < arr.length; i++) {
    var reverseStr = arr[i].split("").reverse().join("");
    if (reverseStr === arr[i]) palindrome.push(arr[i]);
  }
  return palindrome;
};
console.log(
  palindromeCheckF(["bob", "good", "dood", "response", "tat", "play"])
);

// Return median of two sorted arrays of the same size

function compareNumbers(a, b) {
  return a - b;
}
var medianFindF = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    var newArr = [...arr1, ...arr2];
    newArr.sort(compareNumbers);
    return (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
  }
};
var a = [1, 12, 15, 26, 38];
var b = [2, 13, 17, 30, 45];
console.log(medianFindF(a, b));

//Remove duplicates from an array

var c = [1, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5];
var removeDuplicate = function (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count > 1) {
      arr.splice(i, 1);
      i--;
    }
    count = 0;
  }

  return arr;
};
console.log(removeDuplicate(c));

// Rotate an array by k times

var rotateArray = function (arr, k) {
  console.log(arr);
  for (var i = 1; i <= k; i++) {
    var lastEle = arr.pop();
    arr.unshift(lastEle);
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 3));

//IIFE

(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

(function (arr) {
  var titleCaps = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i][0].toUpperCase() + arr[i].slice(1);
    titleCaps.push(str);
  }
  console.log(titleCaps);
})(["venkat", "arun", "ball", "cricket"]);

(function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

(function (arr) {
  var prime = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] % j === 0) count++;
    }
    if (count === 2) prime.push(arr[i]);
    count = 0;
  }
  console.log(prime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);

(function (arr) {
  var palindrome = [];
  for (var i = 0; i < arr.length; i++) {
    var reverseStr = arr[i].split("").reverse().join("");
    if (reverseStr === arr[i]) palindrome.push(arr[i]);
  }
  console.log(palindrome);
})(["bob", "good", "dood", "response", "tat", "play"]);

function compareNumbers(a, b) {
  return a - b;
}
(function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    var newArr = [...arr1, ...arr2];
    newArr.sort(compareNumbers);
    console.log(
      (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2
    );
  }
})([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]);

(function (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count > 1) {
      arr.splice(i, 1);
      i--;
    }
    count = 0;
  }

  console.log(arr);
})([1, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5]);

(function (arr, k) {
  console.log(arr);
  for (var i = 1; i <= k; i++) {
    var lastEle = arr.pop();
    arr.unshift(lastEle);
  }
  return arr;
})([1, 2, 3, 4, 5], 3);

//Arrow Functions

var oddNum = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
};
oddNum([1, 2, 3, 4, 5, 6, 7]);

var titleCaps = (arr) => {
  var arrNew = [];
  for (var i = 0; i < arr.length; i++) {
    arrNew.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return arrNew;
};
console.log(titleCaps(["bob", "like", "learn", "guvi"]));

var sumNum = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};
console.log(sumNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

var primeCheck = (arr) => {
  var prime = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) count++;
    }
    if (count === 2) prime.push(arr[i]);
    count = 0;
  }
  return prime;
};
console.log(primeCheck([1, 2, 3, 4, 5, 6, 7, 8, 9]));

var palindromeCheck = (arr) => {
  var palind = [];
  for (var i = 0; i < arr.length; i++) {
    var reverseStr = arr[i].split("").reverse().join("");
    if (arr[i] === reverseStr) palind.push(arr[i]);
  }
  return palind;
};
console.log(palindromeCheck(["bob", "game", "prime", "dood", "food"]));
