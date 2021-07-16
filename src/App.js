import Counter from "./Counter";
import { useSelector } from "react-redux"
import DarkTheme from "./DarkTheme";
import { useEffect } from "react";


function App() {
  const dark = useSelector(state => state.dark)

  useEffect(() => {
    const body = document.querySelector('body')
    body.className = (dark ? 'darkness': 'lightnewss' )
  }, [dark])

  return (
    <div className='App'>
      <Counter/>
      <DarkTheme/>
    </div>
  );
}

export default App;
