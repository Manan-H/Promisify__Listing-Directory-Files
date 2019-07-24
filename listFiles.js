const fs = require('fs');

var allfiles = fs.readdirSync(__dirname);

let thisFolder = __dirname.split('\\')[__dirname.split('\\').length - 1];
let folders = [];
let allFilesPaths = [];

function sortFolders(){
    allfiles.forEach(item => {
        item.indexOf('.') >= 0  ? null : folders.push(item);
    }) 
}

sortFolders();
 
folders.forEach(folder => {
    getFolderContent(folder);
}) 

function getFolderContent(folder){
    let files =  fs.readdirSync(__dirname + '/' + folder);

    files.forEach(file => {
        allfiles.push(folder + '/' + file);
        file.indexOf('.')  < 0 ? getFolderContent(folder + '/' + file) : null;
    })
}




allfiles.map((item) => {
    allFilesPaths.push(thisFolder + '/' + item);
})

console.log(allFilesPaths);



