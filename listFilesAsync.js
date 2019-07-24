const fs = require('fs');

let thisFolder = __dirname.split('\\')[__dirname.split('\\').length - 1];

let folders = [];
let allfiles = [];
let allFilesPaths = [];

function sortFilesFolders(){
    fs.readdir(__dirname, (err, files) => {
        if(err){console.log(err);}

        files.forEach(file => {
            allfiles.push(file);
            file.indexOf('.') >= 0  ? null : folders.push(file);
        });
    });
};

sortFilesFolders();

function getFolderContent(folder){
    fs.readdir(__dirname + '/' + folder, (err, files) => {
        if(err){console.log(err)}

        files.forEach(file => {
            allfiles.push(folder + '/' + file);
            file.indexOf('.')  < 0 ? getFolderContent(folder + '/' + file) : null;
        }) 
    });
}


setTimeout(()=> {
    folders.forEach(folder => {
        getFolderContent(folder);
    })
}, 7000)

setTimeout(()=>{
    allfiles.map((item) => {
        allFilesPaths.push(thisFolder + '/' + item);
    })
},13000)

setTimeout(() => {
    console.log(allFilesPaths);
}, 15000)

    

    