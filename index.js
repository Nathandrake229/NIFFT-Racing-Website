const express = require('express')
var app = express()
var port = process.env.port || 3000
const hbs = require('hbs')
const bodyparser = require('body-parser')
var urlencodedParser = bodyparser.urlencoded({ extended: false })
const nodemailer = require('nodemailer')
app.set('view engine', 'hbs')
app.use(express.static(__dirname+"/views"))
app.get("/",(req,res)=>{
    
    res.render('index')
    console.log(res.body);
 });     
 app.get("/tB1",(req,res)=>{
    
    res.render('tB1')
    console.log(res.body);
 });  
 app.get("/tS1",(req,res)=>{
    
    res.render('tS1')
    console.log(res.body);
 });  
         
 app.get("/tF1",(req,res)=>{
    
    res.render('tF1')
    console.log(res.body);
 });  
         
 app.get("/tS2",(req,res)=>{
    
    res.render('tS2')
    console.log(res.body);
 }); 
 app.post('/contact', urlencodedParser, (req,res)=>{
    console.log(req.body.email)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'nifftsae@gmail.com',
            pass: 'thrusters4'
        }
    });
    
    let mailOptions = {
        from: 'nifftsae@gmail.com',
        to: 'nifftsae@gmail.com, sshyamal18@gmail.com',
        subject: `Contact form submission: ${req.body.name}`,
        text: `You have received a new message. 
        Here are the details:\n Name: ${req.body.name} \n Batch: ${req.body.batch} \n Company: ${req.body.company} \n City: ${req.body.city} \n Contact: ${req.body.contact} \n Email: ${req.body.email} \n Feedback: \n ${req.body.feedback} `
        
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
    });
 
    
    res.redirect('/')
    
 }) 
         


app.listen(port,()=>{console.log ("server is running")})