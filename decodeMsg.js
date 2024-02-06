const fs = require('fs');


// class TreeNode {
//   constructor(value, data) {
//     this.value = value;
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function lastDataInEachRowFromFile(filePath) {
//   const result = [];
  
//   // Read the content of the file
//   const data = fs.readFileSync(filePath, 'utf8');
//   const treeData = parseTreeData(data);
// console.log(treeData)
//   if (!treeData || treeData.length === 0) {
//     console.error('Invalid tree data in the file.');
//     return result;
//   }

//   const root = buildTree(treeData);
//   console.log(root);
//   if (!root) {
//     console.error('Error building the tree from the data.');
//     return result;
//   }

//   const queue = [root];

//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     let lastData = null;

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       lastData = node.data;

//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }

//     result.push(lastData);
//   }

//   return result;
// }

// function parseTreeData(data) {
//   return data.trim().split('\n').map(line => {
//     const [value, ...rest] = line.split(' ');
//     const data = rest.join(' ');
//     return { value: parseInt(value), data };
//   });
// }

// function buildTree(treeData) {
//   const sortedTree = treeData.sort((a,b)=>a.value - b.value)
//   console.log('this is sortedTree');
//   console.log(sortedTree)
//   if (!sortedTree || sortedTree.length === 0) {
//     return null;
//   }

//   const root = new TreeNode(sortedTree[0].value, sortedTree[0].data);

//   for (let i = 1; i < sortedTree.length; i++) {
//     insertNode(root, sortedTree[i].value, sortedTree[i].data);
//   }

//   return root;
// }

// function insertNode(root, value, data) {
//   if (value < root.value) {
//     if (root.left === null) {
//       root.left = new TreeNode(value, data);
//     } else {
//       insertNode(root.left, value, data);
//     }
//   } else {
//     if (root.right === null) {
//       root.right = new TreeNode(value, data);
//     } else {
//       insertNode(root.right, value, data);
//     }
//   }
// }


// function insertNode(root, value, data) {
  // Always insert to the left if there is room, otherwise insert to the right
//   if (root.left === null) {
//     root.left = new TreeNode(value, data);
//   } else {
//     root.right = new TreeNode(value, data);
//   }
// }


// Example usage:
// const filePath = './data.txt';

// const result = lastDataInEachRowFromFile(filePath);
// console.log(result);

// 1
// 23
// 456

class TreeNode {
constructor(value, data){
    this.root = value;
    this.data = data;
    this.left = null;
    this.right = null;
}
}

const decodeMessage = (filePath) => {
  
    //   // Read the content of the file
    //   const data = fs.readFileSync(filePath, 'utf8');
    //   const treeData = parseTreeData(data);
    // console.log(treeData)
    //   if (!treeData || treeData.length === 0) {
    //     console.error('Invalid tree data in the file.');
    //     return result;
    //   }
    
    //   const root = buildTree(treeData);
    //   console.log(root);
    //   if (!root) {
    //     console.error('Error building the tree from the data.');
    //     return result;
    //   }
    
    //   const queue = [root];
    
    //   while (queue.length > 0) {
    //     const levelSize = queue.length;
    //     let lastData = null;
    
    //     for (let i = 0; i < levelSize; i++) {
    //       const node = queue.shift();
    
    //       lastData = node.data;
    
    //       if (node.left) {
    //         queue.push(node.left);
    //       }
    //       if (node.right) {
    //         queue.push(node.right);
    //       }
    //     }
    
    //     result.push(lastData);
    //   }
    
    //   return result;
    const result = [];
    const data = fs.readFileSync(filePath, 'utf-8');
    const treeData = parseData(data);
      if (!treeData || treeData.length === 0) {
    console.error('Invalid tree data in the file.');
    return result;
  }
  
  const root = buildTree(treeData);
       console.log(root);
      if (!root) {
        console.error('Error building the tree from the data.');
        return result;
      }
    
      const queue = [root];


  while (queue.length > 0) {
    const levelSize = queue.length;
    let lastData = null;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      lastData = node.data;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(lastData);
  }

  return result;
}

function buildTree(treeData) {
//   const sortedTree = treeData.sort((a,b)=>a.value - b.value)
//   console.log('this is sortedTree');
  console.log(treeData)
  if (!treeData || treeData.length === 0) {
    return null;
  }

  const root = new TreeNode(treeData[0].value, treeData[0].data);

  for (let i = 1; i < treeData.length; i++) {
    insertNode(root, treeData[i].value, treeData[i].data);
  }

  return root;
}

function insertNode(root, value, data) {
    if (value < root.value) {
      if (root.left === null) {
        root.left = new TreeNode(value, data);
      } else {
        insertNode(root.left, value, data);
      }
    } else {
      if (root.right === null) {
        root.right = new TreeNode(value, data);
      } else {
        insertNode(root.right, value, data);
      }
    }
  }


const parseData = (data) => {
  return data.trim().split('\n').map(line => {
    const [value, ...rest] = line.split(' ');
    const data = rest.join(' ');
    return { value: parseInt(value), data };
  });

}

const filePath = './data.txt';

const result = decodeMessage(filePath);
console.log(result);