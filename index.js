// Code your solutions in this file

/*  build a function named writeCards() that accepts two arguments: an array of string names, and an event name. 
Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
The for loop should stop once it has iterated over the length of the array. */ 

/* The overall process should be:

1) create a new, empty array to hold the messages;
2) iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
3) after the loop finishes and all of the messages have been added to the new array, return the new array. */

/* Here is an example of what a call to the writeCards() function might look like:

writeCards(["Charlie", "Samip", "Ali"], "birthday");
If we were to call the function using this function call, it should produce the following array as the return value:

[
  "Thank you, Charlie, for the wonderful birthday gift!",
  "Thank you, Samip, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!",
]; */

function  writeCards(arrayOfStringNames, name){
    let newArray =[];
   for(let i = 0 ; i < arrayOfStringNames.length ; i++){
      newArray[i] = `Thank you, ${arrayOfStringNames[i]}, for the wonderful ${name} gift!`
   }
   return newArray;
}

/* To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, 
starting from that number, counts down to zero using console.log(). Note that this means that running countDown(10); 
would actually log 11 times */

function countDown(integer){
    let i = integer;
    while (i>= 0){
     console.log(i);
      i--;
    }
 }