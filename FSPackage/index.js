const fs = require('fs');
const data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data);

const addData = `Add this content to a new file. ${data}\n Data is created on ${Date.now()}`;
fs.writeFileSync('./output.txt', addData);

fs.readFile('./data.txt', 'utf-8', function(err, data){
    if(err) throw err;
    const addData = `Add this content to a new file. ${data}\n Data is created on ${Date.now()}`;
    fs.writeFile('./output.txt', addData, function(err2){
        if(err2) throw err2;
    })
})
console.log("Funciona");