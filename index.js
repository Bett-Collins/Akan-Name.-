function onSubmit() {
    var dateEntered = validDate();
    var monthEntered = validMonth();
    var yearEntered = validYear();
    var GenderEntered = validGender();
    var calculatedDay = calculateDayOfWeek(yearEntered, monthEntered, dateEntered);
    var akanName = determineName(GenderEntered, calculatedDay);
    document.getElementById("Display").innerHTML = "hi! Your Akan Name Is " + akanName;
  
  }
  