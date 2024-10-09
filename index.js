const express = require('express');

const port = 3000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/health-check", (req, res)=>{
	try{
		console.log("working fine");
		res.send("Health Check Right!!");
	}catch(err){
		console.log("Error Message :", err);
	}
})

app.listen(port,()=>{
	console.log(`server running on http://localhost:${port}`);
})