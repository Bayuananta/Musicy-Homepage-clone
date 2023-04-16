// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import jQuery
import * as $ from 'jquery'

$(document).ready(function () {
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "04/9/",
        timers = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > timers) {
      timers = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(timers).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my timers!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
  
  $('.button').on('click', function() {
    $(this).css({ "display": "none" });
    $('.close').css({ "display": "block" });
    $('nav .menus').slideDown(400);
    $('nav .login-btn').slideDown(500);
    $('nav .menus').css({ "display": "flex" });
    $('login-btn').css({"display": "inherit" });
});
$('.close').on('click', function() {
    $(this).css({ "display": "none" });
    $('.button').css({ "display": "block" });
    $('nav .menus').slideUp(500);
    $('nav .login-btn').slideUp(300);
});
})