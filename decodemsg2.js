const fs = require('fs');

function processTxtFile(filePath) {
  // Read the content of the file
  const data = fs.readFileSync(filePath, 'utf-8');
  
  // Split the lines of the file
  const lines = data.split('\n');
  
  // Create an array to store the words in their respective positions
  const words = [];

  // Process each line
  lines.forEach(line => {
    // Split the line into words
    const lineWords = line.split(' ');

    // Extract the position and word
    const position = parseInt(lineWords[0]);
    const word = lineWords.slice(1).join(' ');

    // Store the word at its position
    words[position - 1] = word;
  });

  // Take only the final string from each row
  const finalStrings = words.map(word => word.split(' ').pop());

  // Join the final strings to form the decoded message
  const decodedMessage = finalStrings.join(' ');

  return decodedMessage;
}

// Example usage
const filePath = './data.txt';
const result = processTxtFile(filePath);
console.log(result);