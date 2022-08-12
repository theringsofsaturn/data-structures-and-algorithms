/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/ const sum = function (a, b) {
    if (a === b) {
        return (a + b) * 3;
      } else {
        return a + b;
      }
    };
    /*
    2)
    Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
    */
    const isFifty = function (a, b) {
      if (a === 50 || b === 50 || a + b === 50) {
        return true;
      } else {
        return false;
      }
    };
    /*
    3)
    Create a function to remove a character at the specified position of a given string and return the new string.
    */
    const removeChar = function (str, pos) {
      return str.slice(0, pos) + str.slice(pos + 1);
    };
    //console.log(removeChar("strive", 3));
    /*
    4)
     Create a function to find the largest of three given integers.
    */
    const findLargestInt = function (...args) {
      const sorted = args.sort((a, b) => b - a);
      return sorted[0];
    };
    
    /*
    5)
    Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
    */
    const checkRange = function (a, b) {
      if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
        console.log("a and b in range 40...60");
      } else if (a >= 70 && a <= 100 && b >= 70 && b <= 100) {
        console.log("a and b in range 70...100");
      } else {
        console.log("a and b not in the range");
      }
    };
    checkRange(40, 50);
    /*
    6) 
    Create a function to create a new string of specified copies (positive number) of a given string.
    */
    const createCopies = function (str, n) {
      if (n <= 0) {
        return "n should be positive";
      } else {
        let copies = "";
        for (let i = 0; i < n; i++) {
          copies += str + " ";
        }
        return copies;
      }
    };
    console.log(createCopies("strive", 4));
    /*
    7)
    Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
    */
    const startsWith = function (str) {
      if (str.startsWith("Los") || str.startsWith("New")) {
        return str;
      } else {
        return "";
      }
    };
    console.log(startsWith("Los Angeles"));
    /* 
    8)
    Create a function to calculate the sum of three elements of a given array of integers of length 3.
    */
    const totalSum = function (...args) {
      let sum = 0;
      for (let i = 0; i < args.length; i++) {
        sum += args[i];
      }
      return sum;
    };
    console.log(totalSum(3, 6, 4));
    
    /*
    9)
    Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
    */
    const checkArray = function (arr) {
      //   if (arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
      //     console.log("arr contains 1 or 3");
      //   } else {
      //     console.log(" arr doesn nott  contain 1 or 3");
      //   }
      if (arr.includes(1) || arr.includes(3)) {
        return true;
      } else {
        return false;
      }
    };
    console.log(checkArray([3, 6]));
    /*
    10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
    */
    const notIncludes = function (arr) {
      if (!checkArray(arr)) {
        return true;
      } else {
        return false;
      }
    };
    /*
    11) Create a function to find the longest string from a given array of strings.
     */
    const getLongestStr = function (arr) {
      const temp = [];
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].length);
      }
      const largest = [...temp].sort((a, b) => b - a)[0];
      const index = temp.indexOf(largest);
    
      return arr[index];
    };
    console.log(getLongestStr(["aa", "ccccc", "ddd"]));
    /* 
    12)
    
    Create a function to find the types of a given angle.
    
    Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        btuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.
    */
    const angleType = function (angle) {
      if (angle < 90) {
        return "acute";
      } else if (angle === 90) {
        return "right";
      } else if (angle < 180) {
        return "obtuse";
      } else {
        return "straight";
      }
    };
    
    /**
    13) Create a function to find the index of the greatest element of a given array of integers
     */
    const findIndexofLargestInt = function (arr) {
      const largest = [...arr].sort((a, b) => b - a)[0];
      console.log(largest);
      return arr.indexOf(largest);
    };
    console.log(findIndexofLargestInt([4, 8, 2]));
    /**
     14) Create a function to get the largest even number from an array of integers.
     */
    const getLargestEven = function (arr) {
      const temp = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          temp.push(arr[i]);
        }
      }
      return temp.sort((a, b) => b - a)[0];
    };
    console.log(getLargestEven([3, 8, 1, 9, 4, 6]));
    /**
     15) Create a function to check from two given integers, whether one is positive and another one is negative.
     */
    const checkSign = function (a, b) {
      if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        return true;
      } else {
        return false;
      }
    };
    /**
    16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
     */
    const convertCase = function (str) {
      if (str.length < 3) {
        return str.toUpperCase();
      } else {
        return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
      }
    };
    console.log(convertCase("strive"));
    /**
    17) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
     */
    const checkSumRange = function (a, b) {
      if (a + b > 50 && a + b < 80) {
        return 65;
      } else {
        return 80;
      }
    };
    /*
    18)
    
    Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
    
    If the number has 3 as a factor, output 'Diego'.
    If the number has 5 as a factor, output 'Riccardo'.
    If the number has 7 as a factor, output 'Stefano'.
    If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
    Examples
    28's factors are 1, 2, 4, 7, 14, 28.
    this would be a simple "Stefano".
    30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
    this would be a "DiegoRiccardo".
    34 has four factors: 1, 2, 17, and 34.
    this would be "34".
    */
    const numToStrByFactor = function (num) {
      let str = "";
      if (num % 3 === 0) str += "Diego";
      if (num % 5 === 0) str += "Riccardo";
      if (num % 7 === 0) str += "Stefano";
      return str;
    };
    console.log(numToStrByFactor(21));
    /**
    19) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
     */
    const getAcronym = function (str) {
      const temp = str.split(" ");
      let acronym = "";
      for (let i = 0; i < temp.length; i++) {
        acronym += temp[i].charAt(0).toUpperCase();
      }
      return acronym;
    };
    console.log(getAcronym("British Broadcasting Corporation"));
    