//Import modules.
const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//Import database models.
const {StudentModel} = require('./Models/Student');
const{OrganiserModel} = require('./Models/Organiser');
const{CaptainModel} = require('./Models/Captains');

//Add middlewares.
const app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));
Mongoose.connect("mongodb+srv://ICTKings:ICTKings@cluster0.xo2fgdo.mongodb.net/?retryWrites=true&w=majority");

//Authenticate the login credentials for the organiser using JSON Web Tokens.
app.post("/adminlogin",async (req,res)=>{
    let request = req.body;
    let data = await OrganiserModel.find();
    let adminuser = data[0].user;
    let adminpass = data[0].password;
    if(request.user!==adminuser)
    {
        res.status(401).send("Invalid username!!");
    }
    else if(request.password!==adminpass)
    {
        res.status(401).send("Invalid password!!");
    }
    else
    {
        let payload = {subject:adminuser+adminpass};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
    }
});

//Register respective house captains.
app.post("/housecaptain", async(req,res)=>{
    let data = req.body;
    let obj = new CaptainModel(data);
    let result = await obj.save();
    res.send(result);
});

//Authenticate house captains using JSON Web Tokens.
app.post("/housecaptainlogin",async (req,res)=>{
    let request = req.body;
    let data = await CaptainModel.findOne({"user":request.user});
    let user = data.user;
    let pass = data.password;
    let house = data.house;
    if(user!==request.user)
    {
        res.status(401).send("Invalid username!!");
    }
    else if(pass!==request.password)
    {
        res.status(401).send("Invalid password!!");
    }
    else if(house!==request.house)
    {
        res.status(401).send("Invalid housename!!");
    }
    else
    {
        let payload = {subject:user+pass+house};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send(token);
    }
});

//Register students.
app.post("/addstudent",async (req,res)=>{
    let data = req.body;
    let obj = new StudentModel(data);
    let result = await obj.save();
    res.send(result);
});

//Gets the full list of students.
app.get("/viewstudents",async (req,res)=>{
    let data = await StudentModel.find();
    res.send(data);
});


//To get students by house name.  
app.get("/viewstudents/:housename", (req,res)=>{ 
    const housename = req.params.housename;
    StudentModel.find({"house":housename}).then((h)=>{res.send(h)});
});

//Authenticate student login using JSON Web Tokens.
app.post("/studentlogin",async(req,res)=>{
    let request = req.body;
    let data = await StudentModel.findOne({"name":request.name});
    let name = data.name;
    let house = data.house;
    let pass = data.pass;
    if(request.name!==name)
    {
        res.status(401),send("Invalid name!!");
    }
    else if(request.house!==house)
    {
        res.status(401).send("Invalid house name!!");
    }
    else if(request.pass!==pass)
    {
        res.status(401).send("Invalid password!!");
    }
    else
    {
        let payload = {subject:name+house+pass};
        let token = jwt.sign(payload,'secretKey');
        res.send(token);
    }
});


//Captain removes a student as per needs.
app.delete("/deletestudent",(req,res)=>{
    StudentModel.deleteOne({"_id":req.body._id},req.body,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Deletion successful!");
        }
    });
});

//To remove an event from the events array of a particular student.
app.post("/removeevent/:id/:event",async (req,res)=>{       
    const id = req.params.id;
    const event = req.params.event;
    let data = await StudentModel.findOne({"_id":id});
    for(let i=0;i<data.events.length;i++)
    {
        if(data.events[i] === event)
        {
            data.events.splice(i,1);
        }
    }
    StudentModel.findByIdAndUpdate({"_id":id},
    {$set:{"events":data.events}}).then(()=>res.send(data));
    
});



//Send an error if resource requested is invalid.
app.all("*",(req,res)=>{
    res.status(404).send("<h1>404 Resource not Found!</h1>");
});

//Using port 3000.
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});