import Header from "./components/nav-bar/header";
import Footer from "./components/footer";
import motoVid from "../img/motoVid.mp4";
import r1m from "../img/R1M.png";
import sr from "../img/SRRR.jpg";
import v4 from "../img/V4.jpg";
import "../css/home.css";


const home = () => {
  return (
    <>
      <div className="home-container">
        <Header className="header" />
        <div className="video-container">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={motoVid} type="video/mp4" /> video not supported
          </video>
        </div>
        <div className="top-three-container">
          <img src = {r1m}/>
          <img src = {sr}/>
          <img src = {v4}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default home;
