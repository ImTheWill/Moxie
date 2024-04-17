import "../../../css/header.css";
import motoLogo from "../../../img/motorcycle.svg";

const header = () => {
  return (
    <>
      <div className="header-container">
        <a className = "logo-container">
          <img src={motoLogo} width="40px" height="40pxpx"></img>
        </a>
        <h3>Moxie</h3>
        <div className = "list-container">
        <ul>
          <li className="products">
            <a>PRODUCTS</a>
          </li>
          <li className="parts">
            <a>PARTS & ACCESSORIES</a>
          </li>
          <li className="contact">
            <a>FORUM</a>
          </li>
          <li className="contact">
          <a>LOCATE DEALER</a>
        </li>
        </ul>
        </div>
      </div>
      <div className="nav-container"></div>
    </>
  );
};

export default header;
