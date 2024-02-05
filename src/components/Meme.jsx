import "../styles/Meme.css";

const Meme = () => {
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
          <button type="submit" className="submit-button">
            Get a new meme image
          </button>
        </form>
      </main>
    </div>
  );
};

export default Meme;
