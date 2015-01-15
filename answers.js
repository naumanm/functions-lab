// Mike Nauman's Function Lab

// exercise 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if  (num2 > num1) {
        return num2;
    } 
    else {
        console.log("equal")
    }
}

maxOfTwoNumbers(3, 2);
maxOfTwoNumbers(2, 3);
maxOfTwoNumbers(3, 3);


// exercise 2
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfTwoNumbers(num1, num2, num3) {
	if ((num1 > num2) && (num1 > num3)) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else if (num3 > num1 && num3 > num2)
        return num3;
}

maxOfTwoNumbers(4,5,6);

// exercise 3

function isVowel(letterCheck) {
    var vowels = ["a", "e", "i", "o", "u"]
    var vowelCheck = vowels.indexOf(letterCheck);
    if (vowelCheck > -1) {
    	return true;
    }
    else {
    	return false;
    }
 }

 isVowel("s");

// exercise 4

function sumArray (myArray) {
	var mySum = 0;
	for (var i = 0; i < myArray.length; i++) {
    	mySum = mySum + myArray[i];
	}
	return mySum;
}
function multiplyArray (myArray) {
	var mySum = 1;
	for (var i = 0; i < myArray.length; i++) {
		mySum = mySum * myArray[i];
	}
	return mySum;
}

sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
multiplyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// Bonus 1

function reverseString (inputString) {
	var reversedString = '';
	for (var i = inputString.length; i > -1 ; i--) {
		reversedString = reversedString + inputString[i];
	}
    return reversedString;
}

// TODO this is still returning an undefined before the reversed string.
reverseString("mike");


// Bonus 2

function findLongestWord (inputArray) {
	var myLength = 0;
	for (var i = 1; i < inputArray.length; i++) {
		if (inputArray[i].length > myLength) {
			myLength = inputArray[i].length;
		}
	}
}

// Bonus 3

function filterLongestWords (inputArray, i) {
    var myLength = 0;
    var biggest = "";
	for (var i = 1; i < inputArray.length; i++) {
		if (inputArray[i].length > myLength) {
			myLength = inputArray[i].length;
			biggest = inputArray[i];
		}
	}
	return biggest;
}

filterLongestWords(['the', 'world', 'is', 'wonderful', 'the']);



