function getCSV(){
  var req = new XMLHttpRequest(); 
  req.open("get", "https://k-rintaro.github.io/COMEIWEB/sample.csv", true);
  req.send(null);

 
  req.onload = function(){
convertCSVtoArray(req.responseText); 
  }
}


function convertCSVtoArray(str){ 
  var result = [];
  var tmp = str.split("\n"); 

  for(var i=0;i<tmp.length;++i){
      result[i] = tmp[i].split(',');
  }

  alert(tmp[i].split(','));
}

getCSV(); 
