var companies = [];


btn1.onclick=function(){

    query = "Select * From Customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jeb71427&pass=aspretto&database=jeb71427&query=" + query)

    if (req1.status == 200) { //
    
      results = JSON.parse(req1.responseText)    
      txtArea1.text = ""
      
      if (results.length == 0) {
        NSB.MsgBox("There are no pets of that type.")
      }
      
       
     else{
       companies = [];
        for(i=0;i<results.length;i++){
          
            if(results[i][4] == iptState.text)
            {companies.push(results[i][1])}
          
          }
          
        for(i=0;i<companies.length;i++){
            txtArea1.text = txtArea1.text + companies[i] + "\n"
            }

      }
      
    }


}
    
    
Button1.onclick=function(){
  ChangeForm("customerDelete")
}
