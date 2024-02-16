/*---------------------------------Method to send emails, correct is to create an API, 
but this is a little challenge for me-----------------------------------------------*/
function sendEmail(){
    var emailPerson = document.getElementById("textinput").value;

    let checkemail = checkValidateEmail(emailPerson)

    if (checkemail === true){
        Email.send({
            Host:      "smtp.gmail.com",
            Username : "<sender’s email address>",
            Password : "<email password>",
            To :       "<recipient’s email address>",
            From :     `${emailPerson}`,
            Subject :  "<email subject>",
            Body :     "<email body>",
        }).then(function(message)
        {
            alert("mail sent successfully")
            document.getElementById("textinput").value = null
        })
    }
    else
    {
        alert("Invalid email");
    }
}

/*-----------------------Method to validate the email format -----------------------*/
function checkValidateEmail(emailPerson){

    let check = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/
    
    if (check.test(emailPerson))
    {
        return true;
    }
    else{
        return false;
    }
}