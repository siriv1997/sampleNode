let express = require('express');
let app = express();
var bodyParser = require('body-parser');
let port = '3010';


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// sample API call
app.get('/sampleGet',(req,res)=>{
    res.status(200).send({mes:'Hello World',data:'This is a sample API call'});
})


// Post API
app.post('/samplePost',(req,res)=>{
    const {name, age} = req.body;
    console.log(name,age);
    res.status(200).send({msg:'Hello I am Post method', data:{name,age}});
});


// Port Define
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})