import "../../css/forum-header.css";
import motoLogo from "../../img/motorcycle.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopLogin from "./forum-pop";

const header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const [buttonPop, setButtonPopup] = useState(false);

  return (
    <>
      <div
        className={
          color
            ? "forum-header-container forum-header-container-bg"
            : "forum-header-container"
        }
      >
        <div className="forum-logo-container">
          <Link to="/" className="forum-logo-container">
            <img src={motoLogo} width="40px" height="40pxpx"></img>
            <h3>Moxie</h3>
          </Link>
        </div>
        <div className="forum-search-container">
          <input
            className="forum-search"
            type="text"
            placeholder="Search Forum"
          ></input>
        </div>
        <div className="forum-list-container">
          <ul className="forum-nav-bar">
            <li className="forum-products">
              <Link to="/">HOME</Link>
            </li>
            <li className="forum-parts">
              <Link to="/forum"> FORUM</Link>
            </li>
            <li className="forum-forum">
              <a
                onClick={() => {
                  setButtonPopup(true);
                }}
              >
                LOGIN
              </a>

              <PopLogin trigger={buttonPop} setTrigger = {setButtonPopup}></PopLogin>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
