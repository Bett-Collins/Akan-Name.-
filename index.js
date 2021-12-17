function akanName() {
    //declaring variables
    var date = document.getElementById("Date").value;
    var month = document.getElementById("Month").value;
    var year = document.getElementById("Year").value;

    var male = document.getElementById("Male").checked;
    var female = document.getElementById("Female").checked;

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var birthDay = new Date(year + '-' + month + '-' + date);
    var dayOfTheWeek = birthDay.getDay();


    //Vadate date
    if (date <= 0 || date > 31) {
        alert("Enter the correct date");
    } else if (month <= 0 || month > 12) {
        alert("Enter the correct month")
    } else if (year >= 2022) {
        alert("Enter the correct year")

    }


    if (male === true) {
        document.getElementById("Display").innerHTML = "Your day of birth is " + daysOfWeek[dayOfTheWeek] + " your Akan Name is " + maleNames[dayOfTheWeek];

    } else if (female === true) {
        document.getElementById("Display").innerHTML = "Your day of birth is " + daysOfWeek[dayOfTheWeek] + " your Akan Name is " + femaleNames[dayOfTheWeek];
    }

};