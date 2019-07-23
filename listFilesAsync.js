const fs = require('fs');

let thisFolder = __dirname.split('\\')[__dirname.split('\\').length - 1];


 fs.readdir(__dirname, (err, files) => {

    let folders = [];
    let allfiles = [];

    if(err){console.log(err);}

    files.forEach(item => {
        allfiles.push(item);
        item.indexOf('.') >= 0  ? null : folders.push(item);
    });


    foo = (item) => {
        fs.readdir(__dirname + '/' + item, (err, files) => {
            if(err){console.log(err);}
           files.forEach(items => {
            allfiles.push(item + '/' + items)
            items.indexOf('.')  < 0 ? foo(item + '/' + items) : null
        }) 
        });
        
    }

folders.forEach(item => {
    foo(item)
})

for(let i = 0; i < allfiles.length; i++) {
    allfiles[i] = thisFolder + '/' + allfiles[i]
}

console.log(allfiles)
    
});
    






