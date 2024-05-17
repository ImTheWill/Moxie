import "../css/dealer.css";
import Header from "../pages/components/fixedHeader.jsx";
import Footer from "../pages/components/footer.jsx";

const dealer = () => {
  return (
    <>
      <div className="dealer-container">
        <Header />
        <h2>Locate Dealer</h2>
          <iframe
            src="https://storage.googleapis.com/maps-solutions-23q1c3b953/locator-plus/5ycn/locator-plus.html"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>

        <Footer />
      </div>
    </>
  );
};
export default dealer;
