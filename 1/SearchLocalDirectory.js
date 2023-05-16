const fs = require('fs');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log('Error while reading director->:', err);
        return;
    }

    console.log('Files in directory => ');
    files.forEach(file => {
        console.log(file);
    });
});
