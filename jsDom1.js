"use strict";

const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

const isDate = function (date) {
  return true;
}

  const validate = function (e) {
      if (!isDate(date.value)) {
            date.focus();
             e.preventDefault();
            return false;

    }
    createCookie($('name').value, $('date').value, 0.00694444);
    readCookie($('name').value);
    return true;
}



  const init = function() {
    $('minsubmit').addEventListener('click', validate);
    $('date').innerHTML = "format: yyyy-mm-dd";
  }



window.addEventListener('load', init);
