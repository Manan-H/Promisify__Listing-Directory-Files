
function promisify(fsFunc){
  function  fsFuncPormisifying (){
        return new Promise((resolve, reject) => {
            let args = [];
    
            for(let item in arguments) {
                    args.push(arguments[item].toString())
            }
            console.log(args);

            fsFunc(...args , (error) => {
    
                if(error) reject(error);
    
                resolve('The file created successfully with handcrafted Promise!')
            }); 
    
        })
    }
    return fsFuncPormisifying
}

module.exports = promisify;