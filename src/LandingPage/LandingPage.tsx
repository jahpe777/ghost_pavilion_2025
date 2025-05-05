import { motion } from "framer-motion";
import "./LandingPage.css";
import video from "../Videos/Website-Video.mp4";
import image from "../Images/Frame_26.png";

const LandingPage = () => {
  return (
    <motion.div
      className="landingpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <video autoPlay loop muted playsInline className="landingpage-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay" />

      <motion.section
        className="image-landingpage"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          filter: "drop-shadow(0 0 10px #ff00ff)",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        <a
          href="https://ghostpavilion.bandcamp.com/album/ghost-pavilion"
          target="_blank"
          rel="noreferrer"
        >
          <motion.img
            src={image}
            alt="Ghost Pavilion Logo"
            className="gp-logo"
          />
        </a>
      </motion.section>
    </motion.div>
  );
};

export default LandingPage;
