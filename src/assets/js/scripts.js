// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import jQuery
import * as $ from 'jquery'

$(document).ready(function () {
  $('.button').on('click', function() {
    $(this).css({ "display": "none" });
    $('.close').css({ "display": "block" });
    $('nav .menus').slideDown(400);
    $('nav .login-btn').slideDown(500);
    $('nav .menus').css({ "display": "flex" });
    $('nav .login-btn').css({ "display": "block" });
});
$('.close').on('click', function() {
    $(this).css({ "display": "none" });
    $('.button').css({ "display": "block" });
    $('nav .menus').slideUp(500);
    $('nav .login-btn').slideUp(300);
});
})