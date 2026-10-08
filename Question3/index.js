



 const createFiles = require('./add');
const removeFiles = require('./remove');

// Grab the action argument from the terminal command line
const command = process.argv[2]; // this is the command line interface for representing it in terminal 

if (command === 'add') {
    createFiles();
} else if (command === 'remove') {
    removeFiles();
} else {
    console.log('Please provide a valid command: "add" or "remove"');
    console.log('Usage: node index.js add');
    console.log('Usage: node index.js remove');
}
