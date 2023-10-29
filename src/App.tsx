import React, { createContext } from "react";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isVertical, setIsVertical] = React.useState(false);
  const [title, setTitle] = React.useState("Theodore Aaron-Obelley");

  function handleResize() {
    const isvertical = window.innerWidth < 1350;

    if (isVertical !== isvertical) {
      setIsVertical(isvertical);
    }
  }

  function getTitleName() {
    const pathName = window.location.pathname
    const urlNames = pathName.split("/")

    if (urlNames[1] === "Project" && urlNames.length > 2) {
      let newTitle = urlNames[2].replace(/([a-z]+)([A-Z]+)/g, "$1 $2").replace(/^/, "");
      setTitle(newTitle)
    } else {
      setTitle("Theodore Aaron-Obelley")
    }
  }

  React.useEffect(() => {

    handleResize()
    window.addEventListener('resize', handleResize)
  })

  React.useEffect(() => {
    getTitleName()
  }, [location])

  handleResize()
  
  return (
    <OrientationContext.Provider value={isVertical}>
      <div className="App">
        <Navbar title={title}/>
        <Outlet />
      </div>
    </OrientationContext.Provider>
  );
}

export const OrientationContext = createContext(false);
export default App;
