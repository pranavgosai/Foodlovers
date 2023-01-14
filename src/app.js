const express = require("express");
const path = require("path");
const app = express ();
require("./db/conn");
const hbs = require("hbs");
const Register = require("./models/registers");


const port = process.env.POST || 3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templeates/views");
const partials_path = path.join(__dirname,"../templeates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("viwe engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
   res.render("index")
});

app.get("/book",(req,res)=>{
    res.render("book");

});

app.post("/book",async(req,res)=>{
   
    try {
     
        const custmars = new Register({
            name :req.body.name,
            Number:req.body.Number,
            Email:req.body.Email,
            persons:req.body.persons,
            dates:req.body.dates,
        })
        await custmars.save();
       res.status(201).render("index");
      

    }catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});

