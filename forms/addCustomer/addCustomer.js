btnAddCustomer.onclick=function(){
    
    query1 = "Select * From Customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jeb71427&pass=aspretto&database=jeb71427&query=" + query1)

    if (req1.status == 200) { 
    
    query2 = "INSERT INTO customer (name,street,city,state,zipcode) values(Jesse Antiques, 1113 F St, Omaha, NE, 68178")
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jeb71427&pass=aspretto&database=jeb71427&query=" + query2)

    }
}
