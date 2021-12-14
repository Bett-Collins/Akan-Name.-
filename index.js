function onSubmit() {
    var dateEntered = validDate();
    var monthEntered = validMonth();
    var yearEntered = validYear();
    var GenderEntered = validGender();
    var calculatedDay = calculateDayOfWeek(yearEntered, monthEntered, dateEntered);
    var akanName = determineName(GenderEntered, calculatedDay);
    document.getElementById("Display").innerHTML = "hi! Your Akan Name Is " + akanName;
  
  };
  function validDate() {
    var date = document.getElementById("Date").value;
    if (date) {
        if (date <=0 || date > 31) {
            return fulse;
        } else {
            alert("return date");
        }
    } else {
        alert("please enter date")
    }
}
function valiMonth() {
    var month = document.getElementById("Month").value;
    if (month) {
        if ( month <=0 || month > 12) {
            return fulse;
        } else {
            alert("return month");
        }
    } else {
        alert("please enter month")
    }
}