const fs = require('fs');


function writeFile(html){
    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) throw err;
        console.log('Saved!');
        fs.copyFile()
      });

}

const copyFile = () => {
    fs.copyFile('./src/style.css', './distro/style.css', err => {
        if (err) {
            console.log(err);
        }
        console.log('css copied')
        
    });
}

module.exports = writeFile, copyFile