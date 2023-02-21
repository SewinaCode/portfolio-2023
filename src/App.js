import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import styles from "./constants/style";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
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
      <div className={`${styles.padding} bg-primary xl:max-w-4xl xl:mx-36`}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
