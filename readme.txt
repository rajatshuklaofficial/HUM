Prerequisit:
1.NPM must be installed
 https://www.npmjs.com/get-npm
2.Mongodb must be installed
 https://docs.mongodb.com/manual/installation/


Step 1:
open the mongo shell using command : mongo
then create database with name test using command : use test
copy the entire text (we are inserting document, teams information in db):


db.teams.insert({ "teams" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "Barcelona(ESP)", "BATE(BLR)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Juventus(ITA)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Paris(FRA)", "Porto(POR)", "PSV(NED)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)", "Zenit(RUS)" ], "domastic" : [ "Barcelona(ESP)", "Bayern(GER)", "Benfica(POR)", "Chelsea(ENG)", "Juventus(ITA)", "Paris(FRA)", "PSV(NED)", "Zenit(RUS)" ], "others" : [ "Arsenal(ENG)", "Astana(KAZ)", "Atlético(ESP)", "BATE(BLR)", "CSKA Moskva(RUS)", "Dinamo Zagreb(CRO)", "Dynamo Kyiv(UKR)", "Galatasaray(TUR)", "Gent(BEL)", "Leverkusen(GER)", "Lyon(FRA)", "Manchester Tel-Aviv(ISR)", "Malmö(SWE)", "Manchester City(ENG)", "Manchester United(ENG)", "Mönchengladbach(GER)", "Olympiacos(GRE)", "Porto(POR)", "Real Madrid(ESP)", "Roma(ITA)", "Sevilla(ESP)", "Shakhtar Donetsk(UKR)", "Valencia(ESP)", "Wolfsburg(GER)" ] })

Step 2:
Go to the directory HUM
  1.use commond npm i
  2.use command node index.js

Step 3:
now open the brouser and type localhost:3000
 Application will be running, now click on the button Create groups to create groups out of tems

 "If you feel any problem email:rajatshuklaofficial@gmail.com" 
 