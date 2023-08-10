/*----------------------------Default configuration---------------------------------*/
favouriteFruit("regular")
favouriteEdgeStyle("round")
favouriteMode("dark")
favouriteMovieGenre("regular")

/*---------------------------------The function that sets the properties receives the 
property like image, background, borderImg, light, or dark, and the respective value 
(var) or color like #f2f6c3, #68c4af etc.-------------------------------------------*/
function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

/*---------------------------------It Changes the image(photo), button, textbox and 
select css's for sharp, soft, or round look for style in the style.css
             --sharp             --soft             --round
------------------------------------------------------------------------------------*/
function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

/*---------------------------------It Changes the font in all the website look for 
style in the style.css
    --superhero    --fantasy    --space    --military    --romantic    --scary
    --cowboy       --regular    --fantasy
------------------------------------------------------------------------------------*/
function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");
    }
}

/*---------------------------------It Changes to light or dark, being background, 
text(color), and Border image look for style in the style.css
             --light             --dark             --img, border-radius and border
------------------------------------------------------------------------------------*/
function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text',       "var(--dark)");
        setProp('--borderImg',  "var(--dark)");
    } 
    else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text',       "var(--light)");
        setProp('--borderImg',  "var(--light)")
    }
}

/*---------------------------------It Changes the theme. See below
   --pastel     --muted    --love    --sky    --forrest    --shiny    --banana
   --watermelon --tomato   --avocado --orange --blueberry  --regular(black & light)
------------------------------------------------------------------------------------*/
function favouriteFruit(theme) {
    if (theme === "pastel") {
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    } else if (theme === "muted") {
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    } else if (theme === "love") {
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    } else if (theme === "sky") {
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    } else if (theme === "forrest") {
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    }  else if (theme === "shiny") {
        setProp('--light', "#2e9afe")
        setProp('--dark', "#02197c")
    } else if (theme === "banana") {
        setProp('--light', "#fbec5d")
        setProp('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setProp('--light', "#75b855")
        setProp('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
    } else if (theme === "avocado") {
        setProp('--light', "#6b8c21")
        setProp('--dark', "#704012")
    } else if (theme === "orange") {
        setProp('--light', "#ffca16")
        setProp('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setProp('--light', "#41a8f9")
        setProp('--dark', "#064490")
    } else  {
        setProp('--light', "#f5f5f5")
        setProp('--dark', "#222222")
    } 
}

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