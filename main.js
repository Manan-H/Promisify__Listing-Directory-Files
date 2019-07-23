
const fs = require('fs');

let data = "This is the content of the file";


let promisify = require("promisify-manan");


let promisifiedWriteFile = promisify(fs.writeFile)

promisifiedWriteFile('newFile.txt', data)


.then((data)=>{
  console.log("Success");
  console.log(data);
})
.catch((err) => {
  console.log(err);
})





 