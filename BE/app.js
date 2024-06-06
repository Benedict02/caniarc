const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.put('/user', (req,res)=>{
    res.send("Got a PUT request at /user")
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))