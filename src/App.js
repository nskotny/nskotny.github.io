import React, { useEffect } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import './App.css';

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

const App = () => {
  const { width } = useViewport();
  const breakpoint = 800;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar width={width} breakpoint={breakpoint} />
        <Home width={width} breakpoint={breakpoint} />
      </header>
    </div>
  );
}

export default App;
