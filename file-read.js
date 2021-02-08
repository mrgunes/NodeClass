const fs=require('fs');



fs.readFile('demo.txt', (err,data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());   //eger sadece "data" yazar isek buffer miktarini yazar..

})

console.log('File read end ...') // oncelikli console.log verir cunku assegron calisiyor ,ve sonra alinan data bilgilerini verir ekrana...