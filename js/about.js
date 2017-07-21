function sendEmail() {
    var email = "quinn.vissak@uconn.edu";
    var subject = "Inquiry from Website";
    document.location = "mailto:" + email + "?subject=" + subject;
};
function swapPhoneDisplay() {
  document.getElementById("phoneDisplay").src = "../images/PhoneDenied.png"
  document.getElementById("phoneDisplay").style = "padding: 0px 19px 0px 0px;";
};
