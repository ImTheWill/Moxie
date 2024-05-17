import "../../css/header.css";
import motoLogo from "../../img/motorcycle.svg";
import {Link} from "react-router-dom"

const header = () => {
  return (
    <>
      <div className="header-container">
        <Link to="/" className = "logo-container">
          <img src={motoLogo} width="40px" height="40pxpx"></img>
        </Link>
        <Link to="/"> <h3>Moxie</h3> </Link>
        <div className = "list-container">
          <ul className = "nav-bar">
            <li className="products">
              <Link to = "/products" >PRODUCTS</Link>
            </li>
            <li className="parts">
              <Link to = "/accessories"> PARTS & ACCESSORIES</Link>
            </li>
            <li className="forum">
              <Link to = "/forum">FORUM</Link>
            </li>
            <li className="dealer">
              <Link to = "/dealer">LOCATE DEALER</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
