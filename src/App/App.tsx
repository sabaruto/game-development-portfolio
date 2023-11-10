import React, { createContext, useRef } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ScreenType from "../enum/ScreenType";
import SetOrientationStyle from "../Common/Orientation/Orientation";
import styles from './app.module.css';
import jsAsCSS from "../Common/JsAsCSS";

const OrientationContext = createContext(ScreenType.HORIZONTAL_PC);

function App() {
  const location = useLocation();
  const [screenType, setScreenType] = React.useState(ScreenType.HORIZONTAL_PC);
  const [title, setTitle] = React.useState("Theodore Aaron-Obelley");
  const ref = useRef<HTMLDivElement>(null);
  const appStyles = SetOrientationStyle(
    styles.App,
    styles.App,
    styles.AppSmall,
  );

  jsAsCSS("--margin-gap", "200px");

  function setMargin() {
    if (ref == null || ref.current == null) {
      console.log("No div given")
      return
    }
    
    const navbarHeight = ref.current.clientHeight;
    jsAsCSS("--margin-gap", navbarHeight + 20 + "px");
    console.log("Updated margin value", navbarHeight)
  }

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

  function changeTitleName() {
    const pathName = window.location.pathname
    const urlNames = pathName.split("/")
    var tabTitle = "Home"

    console.log(urlNames)

    if (urlNames[1] === "Project" && urlNames.length > 2) {
      let newTitle = urlNames[2].replace(/([a-z]+)([A-Z]+)/g, "$1 $2").replace(/^/, "");
      setTitle(newTitle)
      tabTitle = newTitle;
    } else {
      setTitle("Theodore Aaron-Obelley")

      if (urlNames[1] === "") {
        tabTitle = "Home";
      } else {
        tabTitle = urlNames[1].replace(/([a-z]+)([A-Z]+)/g, "$1 $2").replace(/^/, "");
      }
    }

    document.title = tabTitle
  }

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  React.useEffect(() => { changeTitleName() }, [location])
  React.useEffect(() => {setMargin()})

  handleResize()
  return (
    <OrientationContext.Provider value={screenType}>
      <div className={appStyles[screenType]}>
        <Navbar title={title} ref={ref}/>
        <Outlet />
      </div>
    </OrientationContext.Provider>
  );
}

export { OrientationContext };
export default App;
