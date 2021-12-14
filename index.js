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
function validYear() {
    var Year = document.getElementById("Year").value;
    if (Year) {
        if ( Year >= 2021 && Year >= 1900) {
            return fulse;
        } else {
            alert("year should be 1900-2021");
        }
    } else {
        alert("please enter year")
    }
    function validGender() {
        var gender = document.getElementById("Gender").value;
        if (gender) {
            if (gender == "male" || gender == "female") {
                return gender;
            } else {
                alert("results should be  either male or female");
            }
        } else {
            alert("please enter the gender")
        }
    }
}