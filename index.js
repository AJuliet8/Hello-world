const express = require("express");
const mongoose = require("mongoose");// for mongodb
const path = require("path");//for pug
require("dotenv").config();

const port =  3500;
// importing routes
const registrationRoutes = require("./routes/register")


const app = express()
// intallations


// configguration
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
 useUnifiedTopology: true,
});
 
mongoose.connection
  .once("open", () => {
   console.log("Mongoose connection open");
 })

  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
});
  // Set view engine as pug
app.set("view engine","pug");//setting the view engine to pug
app.set("views",path.join(__dirname,"views"));
  // middle wareapp.
app.use(express.static(path.join(__dirname,"public")))//set directory for static files

// // middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// Routes
app.get("/babiesregistration",(req,res)=>{
  res.render("babiesregistration") });

// useimported routes
app.use("/", registrationRoutes);


// app.get("/", (req, res) => {
//   res.send("homepage Hello World");
// });
// app.get("/about", (req, res) => {
//   res.send("About page. Nice.");
// });


// // syntex of route
// //  app.get('/book/:bookid',(req,res)=>{res.send(
// //  "you have hit home page")})
// //  console.log(req.params.studentid)

// app.get("/student/:name", (req, res) => {
//   res.send("this is my students name " + req.params.id);
// });

// app.get("/index", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// // querry params
// app.get("/students", (req, res) => {
//   res.send("this is class " + req.query.class + "cohort " + req.query.cohot);
// });
// app.get("/students", (req, res) => {
//   res.send("this is class " + req.query.class + "cohort " + req.query.cohot);
// });
// app.get("/babies", (req, res) => {
//   res.send("this is  " + req.query.name + "aged" + req.query.age);
// });

// app.get("/index", (req, res) => {
//   res.send("this is  " + req.query.name + "aged" + req.query.age);
// });
 


// app.get('/books/:bookid',(req,res) =>{res.send(req.param);})

//for invalid routes
app.get("*", (req, res) => {
  res.json({message:"babiesregistration",});
});

// bootstrapping server

//always be the last comment

app.listen(port, () => console.log(`App listening on port ${port}`));
