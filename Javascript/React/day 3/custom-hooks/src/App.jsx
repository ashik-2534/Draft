import useMyHook from "./Hooks/useMyHook"

function App() {
  const [msg, myLuckyNum] = useMyHook("Hi ,there");
  return (
    <>
    {msg}
    <br />
    {myLuckyNum}
    </>
  )
}

export default App
