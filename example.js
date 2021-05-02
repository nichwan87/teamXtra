const fs = require('fs');

let allData = '';

let names = ["Jane", "Bill"]


for(var i = 0; i < names.length; i++){
    allData+= `<p> ${names[i]}</p>`
}


let data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
  ${allData}
</body>
</html>`

fs.writeFile('tutor.html', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });