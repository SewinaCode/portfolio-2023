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

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" bg-primary overflow-hidden w-full">
          <div className={`${styles.padding} bg-primary`}>
            <NavBar />
          </div>
          <div
            className={`${styles.padding} bg-primary ${styles.widthXL} ${styles.marginXL} `}
          >
            <Intro />
          </div>
          <div
            className={`${styles.padding} bg-primary ${styles.widthXL} ${styles.marginXL}`}
          >
            <About />
          </div>
          <div
            id="projects"
            className={`${styles.padding} bg-primary xl:max-w-4xl xl:mx-36`}
          >
            <Projects />
          </div>
          <div className={`${styles.padding} bg-primary xl:max-w-4xl xl:mx-36`}>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
