
function promisify(fsFunc){
    
  function  fsFuncPormisifying (){
        return new Promise((resolve, reject) => {
            let args = [];

            Object.entries(arguments).forEach(([key, val]) => {
                 args.push(val);
            });

            fsFunc(...args , (error) => {
    
                if(error) return reject(error);
    
                resolve('The file created successfully with handcrafted Promise!')
            });    
        })
    }
    return fsFuncPormisifying
}

module.exports = promisify;