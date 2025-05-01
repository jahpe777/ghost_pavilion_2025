import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  return (
    <motion.section
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="ghost-pavilion-home"
        whileHover={{ scale: 1.025, opacity: 1 }}
        initial={{ opacity: 0.7 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/">Ghost Pavilion</Link>
      </motion.h1>

      <nav>
        <ul className="navlinks">
          <motion.li
            className="nav-li"
            whileHover={{ scale: 1.2, opacity: 1 }}
            initial={{ opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/watch">Watch</Link>
          </motion.li>
          <motion.li
            className="nav-li"
            whileHover={{ scale: 1.2, opacity: 1 }}
            initial={{ opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/listen">Listen</Link>
          </motion.li>
          <motion.li
            className="nav-li"
            whileHover={{ scale: 1.2, opacity: 1 }}
            initial={{ opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/speak">Speak</Link>
          </motion.li>
        </ul>
      </nav>
    </motion.section>
  );
};

export default NavBar;
