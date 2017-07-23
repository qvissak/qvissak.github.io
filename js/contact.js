function sendEmail() {
    var email = "quinn.vissak@uconn.edu";
    var subject = "Inquiry from Website";
    document.location = "mailto:" + email + "?subject=" + subject;
};
function swapPhoneDisplay() {
  document.getElementById("phoneDisplay").src = "../images/PhoneDenied.png"
};
