const fs=require('fs');


// fs.appendFile()   &  fs.writeFile()

// eger dosya hali hazirda mevcut degilse , en bastan kendisi create eder..

fs.appendFile('demoNew.txt',"Hello world!!\n",(err)=>{
    if(err){
        console.log(err);
    }

    console.log('append process is completed succesfully ')
})