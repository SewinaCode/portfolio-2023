import NavBar from "./components/NavBar";
import styles from "./constants/style";

function App() {
  return (
    <div className={`${styles.padding} bg-primary`}>
      <NavBar />
    </div>
  );
}

export default App;
