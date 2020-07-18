const express       =  require("express");
const app           =  express();
const PORT          =  process.env.PORT || 3000;
const bankacctroute = require("./routes/bankacct");
const emergencyroute= require("./routes/emergency")
const config        = require("./config/config");
const parser        = require("body-parser");
const cors          = require("cors");
const mongoose      = require("mongoose");

mongoose.Promise = global.Promise;



app.listen(PORT, (err) =>{
    console.log(err)
})

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use('/api/v1', bankacctroute);
app.use('/api/v2', emergencyroute)

mongoose.connect(config.dbUrl,
    {useUnifiedTopology: true, useNewUrlParser: true}
)
.then(()=>{
    console.log("connected to db")
})
.catch(err =>{
    console.log(err)
});

// app.use((req,res,next)=>{
//     return res.status(500).send({
//         status: 500,
//         message: "Server Error"
//     })
// });
