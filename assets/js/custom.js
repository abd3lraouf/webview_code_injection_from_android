/* ----------------------------
/*  Name: webview_code_injection_from_android
    Author: AbdElraouf Sabri
    Version: 1.0.0
/* -------------------------- */

let myButton = document.querySelector('button');

myButton.onclick = function() {
  Android.toast("Webpage is saying hi!!");
}