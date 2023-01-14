const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

main().then(()=>console.log("succ")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/foodlover',{
    useNewUrlParser:true,  
  });
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}