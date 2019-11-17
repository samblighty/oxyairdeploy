const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const url = "mongodb+srv://OxyAir:oxyair@oxyair-zd5vf.gcp.mongodb.net/OxyAir?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

app.get('/airlines', async (req,res)=>{

    
	await client.connect();

    const dbRes = await client.db('OxyAir').collection('OxyAir').findOne({ airlinename: "Air Canada" });
    res.send(dbRes);
})

app.listen(process.env.PORT || 8080); 