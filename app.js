//fichier qui contient la config du serveur 
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");
const mongoConfig = require("./database/dbConfig.json");
const app = express();
const studentsRouter = require("./routes/student");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); //afin de specifier les caractere speciaux dans l url

//routes
app.use("/students", studentsRouter)

app.use((req,res,next)=>{
    next(createError(404));
})

//mongoose
mongoose.connect(mongoConfig.mongo.uri)


module.exports = app