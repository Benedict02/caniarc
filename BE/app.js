const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
const port = process.env.PORT || 5000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , (req , res)=>{
    const data={
        name:"Benhal",
        message:"fuck you!"
    }
   res.render('index', { data })
})

app.get('/about' , (req , res)=>{
   res.render('about')
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))