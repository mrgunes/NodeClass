const fs=require("fs");

fs.unlink('demoNew.txt',(err)=>{
    if(err){
        throw err;
        console.log(err)
    }
    console.log('This File have already been removed succsesfully')
})