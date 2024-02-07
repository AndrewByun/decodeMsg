const fs = require('fs');

function decode(messageFile) {
    //read the passed in file using readFileSync, trim the white space, split into an array by new lines, and filter out any empty lines
  const lines = fs
    .readFileSync(messageFile, 'utf-8')
    .trim()
    .split('\n')
    .filter((line) => line !== '');
    //store the length of the array in a var
  const numberOfItems = lines.length;
  // Initialize an array to store the message words
  const messageWords = new Array(100).fill('');
  // Loop through the lines
  for (const line of lines) {
    // Split the line by space and get the first element as the number
    const number = parseInt(line.split(' ')[0]);
    // Determine if the number equates to the last element value of a "pyramid" line
    for (let x = 0; x < numberOfItems; x++) {
      if (number === parseInt((x * x + x) / 2)) {
        // Grab the second element after splitting the line, which is the word
        messageWords[x] = line.split(' ')[1];
        //break from the loop since we have found the matching position, and move on to the next line
        break;
      }
    }
  }
  // Now, concatenate the non-null array values together to form a sentence.
  const text = messageWords.filter((word) => word !== '').join(' ');
  // Return the result
  return text;
}

const filePath = 'data.txt';
const decodedMessage = decode(filePath);
console.log(decodedMessage);



// BRIEF: To decode the message from the file, I created a function that reads and parses the file, iterates over the array, tracks the values of the items that have a number that corresponds to the end of a pyramid row, and eventually returns the strings that belonged to items that were at the end of rows. 

// To keep track of the output, I created an array with the same length as the data array but with null values. As I looped over the data array, I updated the the result array at the same index but with the string value. 

// To determine if the number belonged to the end of a pyramid row, I used a common arithmetic function 