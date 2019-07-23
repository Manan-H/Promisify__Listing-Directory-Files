const fs = require('fs');

var allfiles = fs.readdirSync(__dirname);

let thisFolder = __dirname.split('\\')[__dirname.split('\\').length - 1];
let folders = [];


    allfiles.forEach(item => {
        item.indexOf('.') >= 0  ? null : folders.push(item);
    }) 
    
    

    foo = (item) => {
        let files =  fs.readdirSync(__dirname + '/' + item);
        files.forEach(items => {
        allfiles.push(item + '/' + items)
            items.indexOf('.')  < 0 ? foo(item + '/' + items) : null
        })
    }
folders.forEach(item => {
    foo(item)
})

for(let i = 0; i < allfiles.length; i++) {
    allfiles[i] = thisFolder + '/' + allfiles[i]
}
console.log(allfiles);



