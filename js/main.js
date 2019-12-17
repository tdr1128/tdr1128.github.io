 var battingContainer = document.getElementById("batting");
  var bowlingContainer = document.getElementById("bowling");
  var allroundContainer = document.getElementById("allrounder");
  

   
 var cricketRequest = new XMLHttpRequest();
cricketRequest.open('GET',"https://tdr1128.github.io/json/ICCWomenCricketersRanking.json" );
 cricketRequest.onload = function(){
    var crickData=JSON.parse(cricketRequest.responseText);
    console.log(crickData)
  
  
     ourRequest.send();
    
