import "../styles/Meme.css";
import { useState } from "react";
import memesData from "../memesData.js";

const Meme = () => {
  // const [memeImage, setMemeImage] = useState("");
  // const [memeName, setMemeName] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    imageName: "One Does Not Simply",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = (e) => {
    e.preventDefault();

    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    const name = memesArray[randomNumber].name;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      imageName: name,
    }));
  };

  return (
    <div className="main-content-container">
      <main className="main-content">
        <form className="meme-form">
          <div className="form-inputs">
            <label className="form-label">
              {" "}
              Top text
              <input type="text" className="form-input" />
            </label>
            <label className="form-label">
              {" "}
              Bottom text
              <input type="text" className="form-input" />
            </label>
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={getMemeImage}
          >
            Get a new meme image
          </button>
        </form>
        {meme.randomImage && (
          <div className="meme-image-container">
            <img
              src={meme.randomImage}
              alt={meme.imageName}
              className="meme-image"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Meme;
