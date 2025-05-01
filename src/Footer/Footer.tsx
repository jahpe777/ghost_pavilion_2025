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
import React from "react";

const Footer: React.FC<React.HTMLAttributes<any>> = () => {
  return (
    <section className="footer">
      <ul className="links">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ghostpavilion.bandcamp.com/"
          >
            <FaBandcamp className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/artist/6e1gGZhzHrDzdI3voe9FxV?si=oykgzH93R7SYPFBmuQUGlg"
          >
            <FaSpotify className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://music.apple.com/us/artist/ghost-pavilion/1070448912"
          >
            <FaApple className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://music.amazon.ca/artists/B01B0L76EA/ghost-pavilion?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&ref=dm_sh_kMqadHSFG3r6cem1yuXAqXPx3"
          >
            <FaAmazon className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg"
          >
            <FaYoutube className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@ghostpavilion"
          >
            <FaTiktok className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ghost_pavilion"
          >
            <FaInstagram className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/GhostPavilion"
          >
            <FaFacebookF className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/ghost_pavilion"
          >
            <FaTwitter className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/r/GhostPavilion/"
          >
            <FaReddit className="icons" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/ghost-pavilion"
          >
            <FaSoundcloud className="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ghostpavilionmusic@gmail.com"
          >
            <FaEnvelope className="icons" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
