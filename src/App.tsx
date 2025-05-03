import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Favicon from "react-favicon";

import "./App.css";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import WatchPage from "./WatchPage/WatchPage";
import ListenPage from "./ListenPage/ListenPage";
import SpeakPage from "./SpeakPage/SpeakPage";
import SignUpPage from "./SignUpPage/SignUpPage";

const App = () => {
  return (
    <div className="App">
      <Favicon url="https://f4.bcbits.com/img/0003430782_10.jpg"></Favicon>
      <header className="App-Header">
        <Routes>
          <Route path="/*" element={<NavBar />} />
        </Routes>
      </header>
      <main className="Header">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/listen" element={<ListenPage />} />
            <Route path="/speak" element={<SpeakPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer>
        <Routes>
          <Route path="/*" element={<Footer />} />
        </Routes>
      </footer>
    </div>
  );
};

export default App;
