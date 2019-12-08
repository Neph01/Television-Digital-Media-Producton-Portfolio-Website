// JavaScript Document


function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myClipboard");

  /* Select the text field */
  copyText.select();
 
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert to let you know that the text was copied to your clipboard */
  alert("Copied the text: " + copyText.value);
} 
