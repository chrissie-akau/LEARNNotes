// // Logging values with for loops
// // Write a for loop that logs each number from 1 - 20.
// for(let i=1; i<21; i++) {
//     console.log(i)
// }
// // Write a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i=0; i<21; i++){
//     console.log(i*3)
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for(let i=1;i<21; i++) {
//     if(i % 2===1) {
//         console.log("ODD")
//     } else {
//         console.log(i)
//     }
// }

// // Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
// var sort = nums.sort((a,b) => a-b).reverse()

// for (let i=0; i < nums.length; i++){
//   if(nums[i] === 67){
//     console.log(nums[i])
//   }
// }
// // Create a loop that will log the lowest number from the array Expected output --> -9
// var sort2 = nums.sort((a,b) => a-b)
// for (let i=0; i<nums.length; i++) {
//     if (nums[i]===-9) {
//         console.log(nums[i])
//     }
// }
// // Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
// let newNums = []
// for(i=0; i<nums.length; i++) {
//     console.log(nums[i]%2)
// }

// // Looping over a string. Consider this variable:
// var myString = "learn student"
// // Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
// var newArray = myString.split("")
// var count=0
// for(let i = 0; i < newArray.length; i++){
//     if(newArray[i] === "e"){
//       count++
//     }
// }
// console.log(count)
  


// // STRETCH Challenges
// // Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc

// //create a for loop that begins at index 0 and goes through 15 and iterates one spot at a time
// for (let i=0; i<= 15; i++) {
//     //if statement checking to see if integer returns a remainder of 0 if divided by 2
//     if (i%2 ===0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }


// // Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// //create an array that begins at index 1 and goes through 100 numbers, iterating one spot at a time
// for (let i=1; i<=100; i++) {
//     //create if statement that says if the numbers in the array are divisible by 15 and have a remainder 0, it will print "FizzBuzz"
//     if(i % 15=== 0) {
//         //telling computer to print "FizzBuzz"
//         console.log("FizzBuzz")
//     //else if statement declaring if the number is dividied by 3 and has a remainder of 0 to print "Fizz"
//     } else if (i%3 === 0){
//         //telling computer to print "Fizz"
//         console.log("Fizz")
//     //else if statement declaring if the number is divided by 5 and has a remainder of 0 to print "Buzz"
//     } else if (i%5 === 0) {
//         //telling computer to print "Buzz"
//         console.log("Buzz")
//     //catch all for rest of numbers who do not fit the criteria in the above if/else statements
//     } else {
//         //telling computer to just print the integers
//         console.log (i)
//     }
// }
