const express =require('express')
const hbs=require('hbs')
const route=require('./routers/main')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const session=require('express-session');
const fileUpload = require('express-fileupload');
const { handlebars } = require('hbs');
require("./handlebar")
const app=express();
app.use(fileUpload())
app.use(session({
    secret:"restorent_datails",
    resave: false,
    saveUninitialized: true,
}))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('',route)
//static folder
app.use("/static",express.static("public"));
//template engine
app.set("view engine",'hbs')
app.set("views",'views')
//app.set("views","")
hbs.registerPartials('views/partials')





mongoose.connect("mongodb+srv://admin:WW735cmxce@cluster0.e9opud3.mongodb.net/",()=>{
    console.log("Server connected..");
})
app.listen(5656,()=>{
    console.log('server is start..')
})