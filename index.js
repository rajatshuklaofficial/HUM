    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    const path = require('path');
    app.use(bodyParser.json());
    app.use(express.static('public'))
    var  result={ "teams" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "Barcelona(ESP)", "BATE(BLR)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Juventus(ITA)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Paris(FRA)", "Porto(POR)", "PSV(NED)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)", "Zenit(RUS)" ], "domastic" : [ "Barcelona(ESP)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "Juventus(ITA)", "Paris(FRA)", "PSV(NED)", "Zenit(RUS)" ], "others" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "BATE(BLR)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Porto(POR)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)" ] }
    
    app.get('/',function(req,res){
        res.sendFile(__dirname + "/client/index.html");
    });
    app.get('/teams',function(req,res){
       
            res.send(result.teams)
            
    })
    app.get('/groups',function(req,res){
      var gd=function(){
            var  result={ "teams" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "Barcelona(ESP)", "BATE(BLR)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Juventus(ITA)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Paris(FRA)", "Porto(POR)", "PSV(NED)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)", "Zenit(RUS)" ], "domastic" : [ "Barcelona(ESP)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "Juventus(ITA)", "Paris(FRA)", "PSV(NED)", "Zenit(RUS)" ], "others" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "BATE(BLR)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Porto(POR)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)" ] }

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
            try{
            rand = function(min, max) {
              if (min==null && max==null)
                return 0;
              if (max==0 && min==0) {
                return 0
              }    
              
              if (max == null) {
                  max = min;
                  min = 0;
                }
                return min + Math.floor(Math.random() * (max - min + 1));
            }
            var d=result.domastic
            var o=result.others
            var count=0
            for (var i = 0; i <= 7; i++) {
                var o_temp=[]
                var prev_country=[]
                var j=0
                var group = String.fromCharCode(65+i);
                var rn=rand(0,7-i)
                var k=d[rn].split("(")
                obj[group].push(k[0])
                prev_country.push(k[1])
                d.splice(rn,1);
                while(j<32) {
                 var rn2=rand(0,o.length-1)
                 var l=o[rn2].split("(")
                 var t_country=l[1]
                 for (var p = prev_country.length - 1; p >= 0; p--) {
                   if (t_country==prev_country[p]) {
                    o_temp.push(o[rn2])
                    o.splice(rn2,1)
                    count = 1
                    p=0
                        }
                    else{
                      count=0
                    }
                    }
                 if (count) {
                  continue;
                  j++
                 }
                 else{
                    obj[group].push(l[0])
                    prev_country.push(t_country)
                    o.splice(rn2,1)
                    j++; 
                 }
                 if (obj[group].length==4) {
                  j=32
                 }   
                }
                for (var q = 0; q <=o_temp.length-1; q++) {
                   o.push(o_temp[q])
                 }    
            }
            res.send(obj)
          }
          catch(err){
            console.log("err")
            if (o_temp) {
              gd()
            }
            
          }

        }
        gd()
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