import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaReddit,
  FaBandcamp,
  FaSoundcloud,
  FaEnvelope,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaBandcamp />, url: "https://ghostpavilion.bandcamp.com/" },
    {
      icon: <FaSpotify />,
      url: "https://open.spotify.com/artist/6e1gGZhzHrDzdI3voe9FxV?si=oykgzH93R7SYPFBmuQUGlg",
    },
    {
      icon: <FaApple />,
      url: "https://music.apple.com/us/artist/ghost-pavilion/1070448912",
    },
    {
      icon: <FaAmazon />,
      url: "https://music.amazon.ca/artists/B01B0L76EA/ghost-pavilion?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&ref=dm_sh_kMqadHSFG3r6cem1yuXAqXPx3",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg",
    },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@ghostpavilion" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/ghost_pavilion" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/GhostPavilion" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/ghost_pavilion" },
    { icon: <FaReddit />, url: "https://www.reddit.com/r/GhostPavilion/" },
    { icon: <FaSoundcloud />, url: "https://soundcloud.com/ghost-pavilion" },
    { icon: <FaEnvelope />, url: "mailto:ghostpavilionmusic@gmail.com" },
  ];

  return (
    <section className="footer">
      <ul className="links">
        {socialLinks.map(({ icon, url }, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {React.cloneElement(icon, { className: "icons" })}
              </motion.div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Footer;
