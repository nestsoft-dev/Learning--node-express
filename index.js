const { v4: uuidv4 } = require('uuid');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false)



const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT|| 3000;


const json={
    "name": "Ikenna Obetta",
    "industry": "Enginesos-Tech",
    "favoritePeople": [
        {
            "name": "mom",
            "relation": "parent"
        },
        {
            "name": "father",
            "relation": "parent"
        }
    ]
};

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.send({"data":json.industry})
})

app.post('/api/customers',(req,res)=>{
   console.log(req.body.name);
   res.statusCode=200;
   res.send({"data":req.body.name})
})



const start= async()=>{
 try {
    await mongoose.connect(process.env.SERVER);

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
 } catch (error) {
    console.log(error.message);
   
 }
}
start();