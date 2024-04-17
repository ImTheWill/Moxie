import "../../css/footer.css";
import twitter from "../../img/twitter.svg"
import youtube from "../../img/youtube.svg"
import instagram from "../../img/instagram.svg"
import linkedin from "../../img/linkedin.svg"
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="main-content">
          <ul className="main-outer">
            <h2>SHOP</h2>
            <ul>
              <li>Gear & Apparel</li>
              <li>Parts & Acessories</li>
              <li>Locate Dealers</li>
              <li>Check Order Status</li>
              <li>Recalls</li>
            </ul>
          </ul>
          <ul className="main-outer">
            <h2>CONNECT</h2>
            <ul>
              <li>Forums</li>
              <li>Contact Us</li>
              <li>Affiliations</li>
              <li>Feedback</li>
              <li>Customer Service</li>
            </ul>
          </ul>
          <ul className="main-outer">
            <h2>CORPORATE</h2>
            <ul>
              <li>Mission</li>
              <li>Carrers</li>
              <li>Moxie Newsletter</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </ul>
        </div>
        <div className="sub-content">
          <h3>©️2024 Moxie Corportion, USA. All rights reserved</h3>
          <ul className="social-icons">
            <li><img src = {twitter} width  = "40px" height= "40px" /></li>
            <li><img src = {instagram} width  = "40px" height= "40px" /></li>
            <li><img src = {linkedin} width  = "40px" height= "40px" /></li>
            <li><img src = {youtube} width  = "40px" height= "40px" /></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default footer;
