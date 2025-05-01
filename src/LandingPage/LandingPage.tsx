// import { Link } from "react-router-dom";
import "./LandingPage.css";
import video from "../../src/Videos/All Along_edit.mp4";
import image from "../../src/Images/GP_300DPI.jpeg";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <video autoPlay loop muted className="landingpage-video">
        <source src={video} type="video/mp4" />
      </video>
      <section className="image-landingpage">
        <a
          href="https://ghostpavilion.bandcamp.com/album/ghost-pavilion"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="Ghost Pavilion Artwork" />
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
