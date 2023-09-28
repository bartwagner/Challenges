/*------------------ It Changes the website background ------------------*/
function favouriteBackground(background){
    if(background){
        setProp("--background", "var(--" + background + ")");
    }
}

/*------------------- It function sets the properties -------------------*/
function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}