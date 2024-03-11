import React, { useState, useEffect } from "react";


const Main = () => {
  // Corrected useState usage: use a setter function for updating state
   // eslint-disable-next-line
  const [getUrl, setUrl] = useState("https://i.imgflip.com/2fm6x.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: 'https://i.imgflip.com/2fm6x.jpg'
  })
// eslint-disable-next-line
  const [allMemeImages, setAllMemeImages] = useState([]);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then (res => res.json())
    .then (data => setAllMemeImages(data.data.memes));
  }, [])

  // Corrected function for updating state
  function getMeme() {
    
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const urlfixed = allMemeImages[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState, 
      randomImage: urlfixed 
    }));
     // Correctly update state with setUrl
  }
  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })

  }

  return (
    <div className="maincontainer">
      <div className="input">
        <div className="inputs">
          <label>Top Text</label>
          <input className="input1" placeholder="Shut up"
          name = "topText" value = {meme.topText} onChange={handleChange} />
        </div>
        <div className="inputs">
          <label>Bottom Text</label> {/* Corrected label for clarity */}
          <input className="input2" placeholder="Take my money"
          name="bottomText" value={meme.bottomText} onChange={handleChange} />
        </div>
      </div>
      <button className="button" onClick={getMeme}>Get A New Meme</button>
      <div className="result">
        <img src={meme.randomImage} alt="Meme"></img>
        <h2 className="meme--texttop">{meme.topText}</h2>
        <h2 className="meme--textbottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Main;


