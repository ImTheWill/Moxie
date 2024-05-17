import "../../css/fixedHeader.css";
import motoLogo from "../../img/motorcycle.svg";
import {Link} from "react-router-dom"

const header = () => {
  return (
    <>
      <div className="fixed-header-container">
        <Link to="/" className = "fixed-logo-container">
          <img src={motoLogo} width="40px" height="40pxpx"></img>
        </Link>
        <Link to="/"> <h3>Moxie</h3> </Link>
        <div className = "fixed-list-container">
          <ul className = "fixed-nav-bar">
            <li className="fixed-products">
              <Link to = "/products" >PRODUCTS</Link>
            </li>
            <li className="fixed-parts">
              <Link to = "/accessories"> PARTS & ACCESSORIES</Link>
            </li>
            <li className="forum">
              <Link to = "/forum">FORUM</Link>
            </li>
            <li className="fixed-dealer">
              <Link to = "/dealer">LOCATE DEALER</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
