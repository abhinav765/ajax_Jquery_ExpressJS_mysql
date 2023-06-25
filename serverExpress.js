var exp = require('express');
var app = exp();
var mysql = require('mysql2');

app.use(exp.static('resourceJquery'))
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"shoppingdb"
})
con.connect(function(err){
    if(!err)
    {
        console.log("database connected")
    }
    else
    {
        console.log("database not connected")
    }
})

app.listen(9000,function(){
    console.log("server started at port no 9000")
})

app.get('/login',function(req,res){
    res.sendFile(__dirname+"/userform.html");
})

app.get('/useridcheck',function(req,res){
    var id = req.query.uid;
    console.log(id)
    con.query("select * from users where u_id="+"'"+id+"'",function(err,result){
       if(result.length==1)
       {
            if(!err)
            {
                res.send("USre id already in use");
            }
           
        }
    })
})