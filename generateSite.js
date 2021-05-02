const fs = require('fs');



fs.writeFile('./dist/index.html', html, function (err) {
    if (err) throw err;
    console.log('Saved!');
    fs.copyFile()
  });

const copyFile = () => {
    fs.copyFile('.assets/css/style.css', './distro/style.css', err => {
        if (err) {
            console.log(err);
        }
        console.log('css copied')
        
    });
}

module.exports = writeSite, copyFile