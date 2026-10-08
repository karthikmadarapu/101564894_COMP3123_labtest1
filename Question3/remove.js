const fs = require('fs');
const path = require('path');


function removeFiles(){

       const logsDir = path.join(__dirname, 'logs');

    // Checking if directory exists before trying to read it
    if (!fs.existsSync(logsDir)) {
        console.log('Logs directory does not exist.');
        return;
    }

   const files = fs.readdirSync(logsDir);
   console.log("Deleting the files------------------");

   if (files.length === 0) {
        console.log('No files found to delete.');
        return;
    }

    files.forEach(file => {
        // Only delete text files
        if (path.extname(file) === '.txt') {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${file}`);
        }
    });
}


module.exports = removeFiles;

