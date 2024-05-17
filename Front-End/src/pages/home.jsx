import Header from "./components/header";
import Footer from "./components/footer";
import motoVid from "../img/motoVid.mp4";
import r1m from "../img/R1M.png";
import sr from "../img/SRRR.jpg";
import v4 from "../img/V4.jpg";
import "../css/home.css";

const home = () => {
  return (
    <>
      <Header />
      <div className="video-container">
        <video width="100%" height="100%" loop autoPlay muted>
          <source src={motoVid} type="video/mp4" /> video not supported
        </video>
      </div>
      <div className="specs">
        <h1>SPECIFICATIONS </h1>
      </div>
      <div className="top-three-container">
        <div className="img">
          <h3>Yamaha YZF R1M</h3>
          <img src={r1m} />
        </div>
        <div className="img">
          <h3>BMW S1000RR</h3>
          <img src={sr} />
        </div>
        <div className="img">
          <h3>Ducati Panigale V4</h3>
          <img src={v4} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default home;
