import "../styles/Meme.css";
import { useState } from "react";
import memesData from "../memesData.js";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");
  const [memeName, setMemeName] = useState("");

  const getMemeImage = (e) => {
    e.preventDefault();

    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    setMemeName(memesArray[randomNumber].name);
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
        {memeImage && (
          <div className="meme-image-container">
            <img src={memeImage} alt={memeName} className="meme-image" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Meme;
