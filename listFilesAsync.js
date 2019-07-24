const fs = require('fs');

let thisFolder = __dirname.split('\\')[__dirname.split('\\').length - 1];

let folders = [];
let allfiles = [];

 fs.readdir(__dirname, (err, files) => {

    if(err){console.log(err);}

    files.forEach(item => {
        allfiles.push(item);
        item.indexOf('.') >= 0  ? null : folders.push(item);
    });

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

setTimeout(()=> {

    folders.forEach(item => {
    foo(item)
})
}, 7000)

setTimeout(()=>{
    for(let i = 0; i < allfiles.length; i++) {
    allfiles[i] = thisFolder + '/' + allfiles[i]
}
},13000)

setTimeout(() => {
    console.log(allfiles)
}, 15000)

    

    