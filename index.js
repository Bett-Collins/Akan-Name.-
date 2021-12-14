         
    function handleForm() {
    var dateEntered = document.getElementById("Date").value;  
    var monthEntered = document.getElementById("Month").value;  
    var yearEntered = document.getElementById("Year").value;  
    if (dateEntered == "" || dateEntered <= 0 || dateEntered >31 ) {
        alert("enter correct date");
        
    }

    else if (monthEntered == "" || monthEntered <=0 || monthEntered > 12 ) {
        alert("enter correct month");
    }
else if (yearEntered =="" ) {
    alert("enter year");
    
}

else { 
var calculateDayOfWeek = function(dateEntered,monthEntered,yearEntered){
var dateEntered = document.getElementById("Date").value;  
    var monthEntered = document.getElementById("Month").value;  
    var yearEntered = docu.getElementById("Year").value;  
    var year= parseInt(yearEntered.slice(-2));
    var month =parseInt(monthEntered);
    var date =parseInt(dateEntered);
    var century =parseInt(yearEntered.slice(0,2));
    var daysOfWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )  %7
    var day = Math.floor (daysOfWeek)
    
}
alert (day);
}
calculateDayOfWeek();
}

    
}
