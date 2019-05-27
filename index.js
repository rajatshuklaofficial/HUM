    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    const path = require('path');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    app.use(bodyParser.json());
    app.use(express.static('public'))
    
    app.get('/',function(req,res){
        res.sendFile(__dirname + "/client/index.html");
    });
    app.get('/teams',function(req,res){
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("test");
          dbo.collection("teams").findOne({}, function(err, result) {
            if (err) throw err;
            res.send(result.teams)
            db.close();
          });
        });
    })
    app.get('/groups',function(req,res){
      MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("teams").findOne({},function(err,result){
            var obj={
                "A":[],
            "B":[],
            "C":[],
            "D":[],
            "E":[],
            "F":[],
            "G":[],
            "H":[],
            }
            
            rand = function(min, max) {
              if (min==null && max==null)
                return 0;    
              
              if (max == null) {
                  max = min;
                  min = 0;
                }
                return min + Math.floor(Math.random() * (max - min + 1));
            }
            var d=result.domastic
            var o=result.others
            for (var i = 0; i <= 7; i++) {
                var j=0
                var group = String.fromCharCode(65+i);
                var rn=rand(0,7-i)
                var k=d[rn].split("(")
                obj[group].push(k[0])
                var prev_country=k[1]
                d.splice(rn,1);
                while(j<3) {
                 var rn2=rand(0,o.length-1)
                 var l=o[rn2].split("(")
                 var t_country=l[1]
                 if (t_country==prev_country) {
                    continue;
                 }
                 else{
                    obj[group].push(l[0])
                    o.splice(rn2,1)
                    j++; 
                 }
                    
                }    
            }
            console.log("ok")
            res.send(obj)
        })
      })
    })
    app.get('/app.js',function(req,res){
        res.sendFile(__dirname+"/client/app.js");
    });
    app.get('/style.css',function(req,res){
        res.sendFile(__dirname+"/client/style.css");
    });
    
    app.listen('3000', function(){
        console.log('running on 3000...');
    });