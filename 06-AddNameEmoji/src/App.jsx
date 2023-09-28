import React, {useState, useEffect, useRef} from 'react'
import './css/basic.css'
import './css/style.css'

function App(props) {
  
  const numberOfPhotos = 20;                                           /*----------- Number of the photos -----------*/
  const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";      /*--------- ID Cliend to use the query -------*/
  const url = "https://api.unsplash.com/photos/random/?count=" + numberOfPhotos
              + "&client_id=" + clientID;                              /*--api link + number of photos e ID client --*/
  
  let [photos, setPhotos] = useState([]);                              /*--------- set the Unsplah's photos ---------*/
  let [selectPhoto, setSelectPhoto] = useState("nature");              /*-- set the link contains Unsplah's photos --*/
  let [selectedBackground,setSelectedBackground] = useState('wooden'); /*------------ set the background ------------*/
  let [selectedColor,setSelectedColor] = useState('snow');             /*---------------set the color ---------------*/
  let [selectedFont,setSelectedFont] = useState('simple-font');        /*--------------- set the font ---------------*/
  let [selectedColumn,setSelectedColumn] = useState("2");              /*--------------set the columns --------------*/
  let [selectedGap,setSelectedGap] = useState("0.1cm");                /*------------- set the grid gap -------------*/

  /*------------------ It Changes the website background ------------------*/
  if(selectedBackground){
        setProp("--background", "var(--" + selectedBackground + ")");
  }
  /*---------------------It Changes the website color ---------------------*/
  if(selectedColor){
    setProp("--main-color", "var(--" + selectedColor + ")");
  }
  /*--------------------- It Changes the website font ---------------------*/
  if(selectedFont){
    setProp("--simple-font", "var(--" + selectedFont + ")");
  }
  /*--------------------- It Changes the columns grid ---------------------*/
  if(selectedColumn){
    setProp("--column", "var(--" + selectedColumn + ")");
  }
  /*----------------------- It Changes the grid gap -----------------------*/
  if(selectedGap){
    setProp("--gap", "var(--" + selectedGap + ")");
  }
  /*------------------- It function sets the properties -------------------*/
  function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
  }

  /*------- This hook displays the photos when you open the website -------*/
  useEffect(() => {
    const photosUrl = selectPhoto ? `${url}&query=${selectPhoto}` : url;
    loadData({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res);
      }
    });
  }, [selectPhoto, url]);

  /*-- This interface checks if the response is correct and sets the photos(setPhotos(data)) --*/
  const loadData = (options) => {
    fetch(options.url)
      .then(function(response){
          return response.json()
      })
      .then(function(data){ 
         if (options.onSuccess) options.onSuccess(data)
      })
  }
  
  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>
      <div className='div-select'>
        <label className="form-label">Kind of background: </label>
        <select value={selectedBackground} onChange = {e => setSelectedBackground(e.target.value)}>
          <option value="wooden">Wooden</option>
          <option value="forest">Forest</option>
          <option value="sweets">Sweets</option>
          <option value="bubbles">Bubbles</option>
          <option value="crackle">Crackle</option>
          <option value="sparkle">Sparkle</option>
          <option value="rainbow">Rainbow</option>
          <option value="smoke">Smoke</option>
          <option value="nightsky">Nightsky</option>
          <option value="sunset">Sunset</option>
        </select>
      </div>
      <div className='div-select'>
        <label className="form-label">Kind of Photos: </label>
        <select value={selectPhoto} onChange = {e => setSelectPhoto(e.target.value)}>
          <option value="nature">Nature</option>
          <option value="monochromatic">Monochromatic</option>
          <option value="wallpapers">Wallpapers</option>
          <option value="3d-renders">3d-renders</option>
          <option value="textures-patterns">Textures Patterns</option>
          <option value="street-photography">Street Photography</option>
          <option value="experimental">Experimental</option>
          <option value="film">Film</option>
          <option value="animals">Animals</option>
          <option value="travel">Travel</option>
          <option value="people">People</option>
          <option value="spirituality">Spirituality</option>
          <option value="sports">Sports</option>
          <option value="arts-culture">Arts-culture</option>
        </select>
      </div>
      <div className='div-select'>
        <label className="form-label">Kind of color: </label>
        <select value={selectedColor} onChange = {e => setSelectedColor(e.target.value)}>
          <option value="snow">Snow</option>
          <option value="blood">Blood</option>
          <option value="slime">Slime</option>
          <option value="gloom">Gloom</option>
          <option value="candy">Candy</option>
          <option value="purple">Purple</option>
          <option value="blue">Blue</option>
          <option value="olive">Olive</option>
          <option value="royal">Royal</option>
          <option value="lilac">Lilac</option>
        </select>
      </div>
      <div className='div-select'>
        <label className="form-label">Kind of Font: </label>
        <select value={selectedFont} onChange = {e => setSelectedFont(e.target.value)}>
          <option value="simple-font">Simple</option>
          <option value="scary-font">Scary</option>
          <option value="typewriter-font">Typewriter</option>
          <option value="funny-font">Funny</option>
          <option value="curly-font">Curly</option>
          <option value="funky-font">Funky</option>
          <option value="sweet-font">Sweet</option>
        </select>
      </div>
      <div className='div-select'>
        <label className="form-label">How many columns?: </label>
        <select value={selectedColumn} onChange = {e => setSelectedColumn(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className='div-select'>
        <label className="form-label">How many gap?: </label>
        <select value={selectedGap} onChange = {e => setSelectedGap(e.target.value)}>
          <option value="01cm">0.1cm</option>
          <option value="02cm">0.2cm</option>
          <option value="03cm">0.3cm</option>
          <option value="04cm">0.4cm</option>
          <option value="05cm">0.5cm</option>
        </select>
      </div>
      <div className="grid">
      { selectPhoto ?
        photos.map(photo => {
          return (
            <div key={photo.id} className="item">
              <img
                className="img"
                src={photo.urls.regular}
              />
              <div className="caption">
                <span className="credits">
                  Photo by
                  <span> </span>
                  <a href={photo.user.links.html}>{photo.user.name}</a>
                  <span> on </span> 
                  <a href={"https://unsplash.com"}>Unsplash</a>
                </span>
              </div>
            </div>
            );
        }) : ""}
      </div>
    </div>
  );
}

export default App