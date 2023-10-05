import React, {useState, useEffect} from 'react'
import SelectOption from './Components/SelectOption'
import Modal from './Components/Modal'
import './css/basic.css'
import './css/style.css'

function App() {
  
  const numberOfPhotos = 20;                                           /*----------- Number of the photos -----------*/
  const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";      /*--------- ID Cliend to use the query -------*/
  const url = "https://api.unsplash.com/photos/random/?count=" + numberOfPhotos
              + "&client_id=" + clientID;                              /*--api link + number of photos e ID client --*/
  
  let [selectedBackground,setSelectedBackground] = useState("wooden"); /*------------ set the background ------------*/
  let [selectPhoto, setSelectPhoto]  = useState("-");                  /*-- set the link contains Unsplah's photos --*/  
  let [photosArray, setPhotosArray]  = useState([]);                   /*--------- set the Unsplah's photos ---------*/
  let [selectColor,setSelectColor]   = useState("snow");               /*---------------set the color ---------------*/
  let [selectFont,setSelectFont]     = useState("simple-font");        /*--------------- set the font ---------------*/
  let [selectColumn,setSelectColumn] = useState("2");                  /*--------------set the columns --------------*/
  let [selectGap,setSelectGap]       = useState("02cm");               /*------------- set the grid gap -------------*/
  
  
  const [isModalVisible, setIsModalVisible] = useState(true);          /*-------------set the modal true-------------*/
  const [isEmoji, setIsEmoji] = useState('🎉');                        /*---------------set the emoji ---------------*/
  const [isForm, setIsForm] = useState({
    name: ''
  });                                                                  /*------------set the form website------------*/
  
  const [emptyValue, setEmptyValue] = useState(false);


  /*------------------ It Changes the website background ------------------*/
  if(selectedBackground){
        setProp("--background", "var(--" + selectedBackground + ")");
  }
  /*---------------------It Changes the website color ---------------------*/
  if(selectColor){
    setProp("--main-color", "var(--" + selectColor + ")");
  }
  /*--------------------- It Changes the website font ---------------------*/
  if(selectFont){
    setProp("--simple-font", "var(--" + selectFont + ")");
  }
  /*--------------------- It Changes the columns grid ---------------------*/
  if(selectColumn){
    setProp("--column", "var(--" + selectColumn + ")");
  }
  /*----------------------- It Changes the grid gap -----------------------*/
  if(selectGap){
    setProp("--gap", "var(--" + selectGap + ")");
  }
  /*------------------- It function sets the properties -------------------*/
  function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
  }

  /*----------------- This hook displays the photos when you open the website -----------------*/
  useEffect(() => {
    const photosUrl = selectPhoto ? `${url}&query=${selectPhoto}` : url;
    if(selectPhoto != "-"){
      loadData({
        url: photosUrl,
        onSuccess: res => {
          setPhotosArray(res);
        }
      });
    }
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

  /*-- this set the form --*/
  const handleChange = (event) => {
    let newProp = isForm;
    newProp[event.target.name] = event.target.value;
    setIsForm({ ...newProp })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let emptyValues = Object.values(isForm).some(obj => obj == "");

    setEmptyValue(emptyValues)

    if(!emptyValues){
      /*-- Just you need to used this submit to send the information
        event.currentTarget.submit()
        fetch('http:website', {method: "POST", body: JSON.stringify(form) })
      --*/
      setIsModalVisible(false)
    }
  }

  return (
    <div className="box">
      {isModalVisible ? 
        <Modal>
          <h2 className='input-label'>Input your Name</h2>
          <SelectOption
            id='emoji'
            label='Kind of Emoji:'
            isEmoji={isEmoji}
            setIsEmoji={setIsEmoji}
          />
          <div className='modal-component'>
              <form onSubmit={(event) => handleSubmit(event)}>
                <input className='input-name' type="text" id="fname" name="name" onBlur={(event) => handleChange(event)}/>
                <button type='submit' className='btn-submit'>Submit</button>
                { emptyValue && isForm["name"] == "" ? <span className='emptyText'>Put you name please</span> : "" }
              </form>
          </div>
        </Modal>: 
        null
      }
      <div className='container'>
        <h2>{isEmoji}</h2>
        <h1>{isForm.name}'s website</h1>
        <SelectOption
          id='background'
          label='Kind of Background:'
          selectedBackground={selectedBackground}
          setSelectedBackground={setSelectedBackground}
        />
        <SelectOption
          id='photo'
          label='Kind of Photos:'
          selectPhoto={selectPhoto}
          setSelectPhoto={setSelectPhoto}
        />
        <SelectOption
          id='color'
          label='Kind of Color:'
          selectColor={selectColor}
          setSelectColor={setSelectColor}
        />
        <SelectOption
          id='font'
          label='Kind of Font:'
          selectFont={selectFont}
          setSelectFont={setSelectFont}
        />
        <SelectOption
          id='column'
          label='How many Columns?:'
          selectColumn={selectColumn}
          setSelectColumn={setSelectColumn}
        />
        <SelectOption
          id='gap'
          label='How much Gap?:'
          selectGap={selectGap}
          setSelectGap={setSelectGap}
        />
        <div className="grid">
        {
          selectPhoto ? photosArray.map(
            photo => {
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
            }
          ) : ""
        }
        </div>
      </div>
    </div>
  );
}

export default App