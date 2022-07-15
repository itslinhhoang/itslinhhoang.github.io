function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "testingsitesvmb@gmail.com",
        Password : "troioichuatoi152",
        To : 'testingsitesvmb@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("fname").value + " sent you a message.<br>" + document.getElementById("message").value
    }).then(
      message => alert("Sent")
    );
}