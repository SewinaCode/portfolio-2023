import { useState, useEffect } from "react";
import {
  NavBar,
  Intro,
  About,
  Projects,
  Contact,
  Loading,
} from "./components/components";
import styles from "./constants/style";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={`bg-primary ${styles.padding} w-full `}>
          <div className={` animate-pop sm:px-8`}>
            <NavBar />
          </div>
          <div
            className={`${styles.padding} bg-primary ${styles.widthXL} ${styles.marginXL}`}
          >
            <Intro />
          </div>
          <div
            className={`${styles.padding} bg-primary ${styles.widthXL} ${styles.marginXL}`}
            data-aos="fade-up"
          >
            <About />
          </div>
          <div
            id="projects"
            className={`${styles.padding}bg-primary ${styles.marginXL}`}
            data-aos="fade-up"
          >
            <Projects />
          </div>
          <div
            className={`${styles.padding} bg-primary xl:max-w-4xl xl:mx-36`}
            data-aos="fade-up"
          >
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
