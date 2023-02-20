import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import styles from "./constants/style";

function App() {
  return (
    <div className=" bg-primary overflow-hidden w-full">
      <div className={`${styles.padding} bg-primary`}>
        <NavBar />
      </div>
      <div className={`${styles.padding} bg-primary`}>
        <Intro />
      </div>
      <div className={`${styles.padding} bg-primary`}></div>
      <div className={`${styles.padding} bg-primary`}></div>
    </div>
  );
}

export default App;
