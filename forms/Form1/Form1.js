
btn1.onclick=function(){

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)

    if (req1.status == 200) { //
    
      results = JSON.parse(req1.responseText)    
      
      if (results.length == 0) {
        NSB.MsgBox("There are no pets of that type.")
      }
      
      else {        
        let message = ""
        
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][1] + "\n"
            txtResults1.value = message
        }   
      }
    }
    
    else {NSB.MsgBox("Error code: " + req1.status)}
}
