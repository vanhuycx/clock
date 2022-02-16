function showClock() {

  var date = new Date(); /* creating object of Date class */
  var dayOfWeek = getDayOfWeek(date);
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";

  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  var timeNow = dayOfWeek + " " + hour + " : " + min + " : " + sec + " " + midday;
  document.getElementById("clock").innerText = timeNow;
  
  setTimeout(showClock, 1000);
}

function getDayOfWeek(date) {
  var dayOfWeek = "";
  switch (date.getDay()) {
    case 0 : dayOfWeek = "Sun"; break;
    case 1 : dayOfWeek = "Mon"; break;
    case 2 : dayOfWeek = "Tue"; break;
    case 3 : dayOfWeek = "Wed"; break;
    case 4 : dayOfWeek = "Thu"; break;
    case 5 : dayOfWeek = "Fri"; break;
    case 6 : dayOfWeek = "Sat"; break;
  }

  return dayOfWeek
}

function updateTime(k) { 
  // append 0 before time elements if less than 10
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}


