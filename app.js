const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

app.use("*",cors({ origin:true, credentials:true }));
app.set("trust proxy", 1);

const cookieParser = require("cookie-parser");
// const bodyparse = require('body-parser');

app.use(cookieParser()); 

// app.use(cors({
//     origin: "http://localhost:3000",
// }))

// app.use(bodyparse.json());
// app.use(bodyparse.urlencoded({ extended: true}));

//This is used to give access to app to use config file 
//Once we have imported it here(app.js) we cann access it anywhere in server folder
dotenv.config({path:'./config.env'});


//This means copying everything here in conn file
require('./DB/conn');
const Saree = require('./model/sareeSchema');
const User = require('./model/userSchema');

//whenever any file comes in json convert it to object
app.use(express.json());

//we link the router file
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;


// after DB ,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }


app.listen(PORT, () =>{
     console.log(`server loading`);
})