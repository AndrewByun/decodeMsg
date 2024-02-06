const fs = require('fs');
const filePath = './data.txt';

class TreeNode {
  constructor(value, data) {
    this.value = value;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const decodeMsg = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const parsedData = parseData(data);
  console.log(parsedData);
};

const parseData = (data) => {
  return data
    .trim()
    .split('\n')
    .map((line) => {
      const [value, ...rest] = line.split(' ');
      const data = rest.join(' ');
      return { value: parseInt(value), data };
    });
};

console.log(decodeMsg(filePath))

// const buildPyramid = () => {

// }