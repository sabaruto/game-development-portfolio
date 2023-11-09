import React, { createContext } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ScreenType from "../enum/ScreenType";
import SetOrientationStyle from "../Common/Orientation/Orientation";
import styles from './app.module.css';

const OrientationContext = createContext(ScreenType.HORIZONTAL_PC);

function App() {
  const location = useLocation();
  const [screenType, setScreenType] = React.useState(ScreenType.HORIZONTAL_PC);
  const [title, setTitle] = React.useState("Theodore Aaron-Obelley");
  const appStyles = SetOrientationStyle(
    styles.App,
    styles.App,
    styles.AppSmall,
  )

  function handleResize() {
    const isvertical = window.innerWidth < 1350;
    const isMobile = window.innerWidth < 700;

    var newScreenType: ScreenType

    if (isMobile) {
      newScreenType = ScreenType.MOBILE
    } else if (isvertical) {
      newScreenType = ScreenType.VERTICAL_PC
    } else {
      newScreenType = ScreenType.HORIZONTAL_PC
    }

    if (newScreenType !== screenType) {
      setScreenType(newScreenType)
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
    <OrientationContext.Provider value={screenType}>
      <div className={appStyles[screenType]}>
        <Navbar title={title}/>
        <Outlet />
      </div>
    </OrientationContext.Provider>
  );
}

export { OrientationContext };
export default App;
