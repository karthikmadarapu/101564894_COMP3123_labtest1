const fs = require('fs');
const path = require('path');

function createFiles(){

   const  logsDir = path.join(__dirname, 'logs');

   //creting the logs dir 

   if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
   }

   console.log("creating files -------------------");
    for (let i = 1; i <= 10; i++) {
        const fileName = `log_${i}.txt`;
        const filePath = path.join(logsDir, fileName);
        
        fs.writeFileSync(filePath, `This is log file number ${i}`);
        console.log(`Created: ${fileName}`);
    }
}


module.exports = createFiles;
