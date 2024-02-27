import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <img src={logo} alt="" className="header-image" />
        <h1 className="header-title">Meme Generator</h1>
      </div>
      <h2 className="project-description">React - Project 3</h2>
    </header>
  );
};

export default Header;
