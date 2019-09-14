
const fs = require('fs');
const path = require('path');

function listDirFiles(dir, callbackFunc) {
    let allFiles = [];

    fs.readdir(dir, (err, files) => {
        if (err) return callbackFunc(err);

        let filesLength = files.length;

        if (!filesLength) return callbackFunc(null, allFiles);

        files.forEach((file) => {

            let fileDir = dir + "\\" + file;
            allFiles.push(fileDir);

            //OPTION1
            // fs.stat(fileDir, (err, stat) => {
            //     if (stat && stat.isDirectory()) {

            //         listDirFiles(fileDir, (err, data) => {
            //             allFiles = allFiles.concat(data);
            //             if (!--filesLength) callbackFunc(null, allFiles);
            //         });

            //     } else {
            //         if (!--filesLength) callbackFunc(null, allFiles);
            //     }
            // });


            // OPTION2 - To avoid git files and be able to check if it works properly 
            if(file.indexOf(".") >= 0) {
                if (!--filesLength) callbackFunc(null, allFiles);
            }else {
                listDirFiles(fileDir, (err, data) => {
                    allFiles = allFiles.concat(data);
                    if (!--filesLength) callbackFunc(null, allFiles);                       
                 });
            }      

        });
    });
};

listDirFiles(__dirname, (err, data) => {
    if(err){
        throw err;
    }
    data.map((d) => {
        console.log(d.split("\\").splice(4).join("/"));
    })
});
