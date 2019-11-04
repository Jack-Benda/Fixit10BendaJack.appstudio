var customers = [];   

btnDelete.onclick=function(){
  
    query1 = "Select * From Customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jeb71427&pass=aspretto&database=jeb71427&query=" + query1)

    if (req1.status == 200) { 
      results = JSON.parse(req1.responseText)    
      txtArea1.text = ""
      customers = [];
          
        for(i=0;i<results.length;i++){
          customers.push(results[i][1])
          }
        
        for(i=0;i<companies.length;i++){
          txtDeleteCustomers.text = txtDeleteCustomers.text + customers[i] + "\n"
          }
          
       query2 = 'Delete From Customer where name = ''iptCustomer.value''; 
       req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jeb71427&pass=aspretto&database=jeb71427&query=" + query1)
   
          
          
     }       


}
