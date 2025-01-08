import Button from "./Components/Button"
import styles from "../src/App.module.css"
function App() {

  return (
    <div className={styles.div}>
      <div className={styles.container}>
      <h1>People Counter</h1>
      <h2>0</h2>
      <Button/>
      <p>Previous entries: </p>
      </div>
    </div>

  )
}

export default App
