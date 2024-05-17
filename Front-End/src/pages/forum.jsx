import "../css/forum.css";
import Header from "../pages/components/forum-header.jsx";
import Footer from "../pages/components/footer.jsx";


const forum = () => {
  return (
    <>
      <Header />
      <div className="forum-container">
        <div className="discussion-nav">
          <div className="top-discussion"></div>
          <div className="recent-searched-discussion"></div>
        </div>
        <div className="recent-discussion"></div>
      </div>
      <Footer />
    </>
  );
};
export default forum;
