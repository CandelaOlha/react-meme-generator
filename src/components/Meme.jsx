import "../styles/Meme.css";
import { useState, useEffect } from "react";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    imageName: "One Does Not Simply",
  });

  const getMemeImage = (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const name = allMemes[randomNumber].name;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      imageName: name,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <div className="main-content-container">
      <main className="main-content">
        <form className="meme-form">
          <div className="form-inputs">
            <label className="form-label">
              {" "}
              Top text
              <input
                type="text"
                name="topText"
                className="form-input"
                placeholder="Add some text here"
                value={meme.topText}
                onChange={handleChange}
              />
            </label>
            <label className="form-label">
              {" "}
              Bottom text
              <input
                type="text"
                name="bottomText"
                className="form-input"
                placeholder="Add some text here"
                value={meme.bottomText}
                onChange={handleChange}
              />
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
          <div className="meme-container">
            <img
              src={meme.randomImage}
              alt={meme.imageName}
              className="meme-image"
            />
            <p className="meme-text top">{meme.topText}</p>
            <p className="meme-text bottom">{meme.bottomText}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Meme;
