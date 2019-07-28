const fs = require('fs');
const path = require('path');


let allfiles = [];
let promises = [];

function listDirFiles(folder){

    return new Promise((resolve, reject) => {

        fs.readdir( folder, (err, files) => {
            if(err){
                return reject(err);
            }

            files.forEach((file) => {
                let fileDir = folder + "\\" + file;
                allfiles.push(fileDir); 

                //OPTION1
                // fs.stat(fileDir, function(err, stat){
                //     if (stat && stat.isDirectory()) {
                //         promises.push(listDirFiles(fileDir));
                //     } 
                // }); 

                // OPTION2 - To avoid git files and be able to check if it works properly            
                file.indexOf(".") >= 0 ? null : promises.push(listDirFiles(fileDir));

            }) 
           resolve();            
        })
        
    })
}

listDirFiles(__dirname)
.then(() => {

    setTimeout(() => {
        Promise.all(promises)
        .then(() => {
            allfiles.map(file => {
                file = file.split("\\").splice(4).join("/");
                console.log(file);
            })
        }) 
        .catch(err => console.log(err))
    }, 100);
})

.catch(err => console.log(err))






 

