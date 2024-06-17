/* ----------------------------
/*  Name: webview_code_injection_from_android
    Author: Abdelraouf Sabri
    Version: 1.0.0
/* -------------------------- */

let myButton = document.querySelector("button");

myButton.onclick = function () {
  Android.toast("Hello Great Android User!!");
};

function messageMe(message) {
  document.getElementById("demo").innerHTML = message;
}
