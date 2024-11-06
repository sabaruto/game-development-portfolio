import { createContext, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ScreenType from "../enum/ScreenType";
import SetOrientationStyle from "../Common/Orientation/Orientation";
import styles from "./app.module.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "../Components/ErrorFallbackRender";

const OrientationContext = createContext(ScreenType.HORIZONTAL_PC);
const DBContext = createContext(false);
const queryClient = new QueryClient();

function App() {
    const location = useLocation();
    const [screenType, setScreenType] = useState(ScreenType.HORIZONTAL_PC);
    const [title, setTitle] = useState("Theodore Aaron-Obelley");
    const ref = useRef<HTMLDivElement>(null);
    const appStyles = SetOrientationStyle(styles.App, styles.App, styles.AppSmall);

    function handleResize() {
        const isvertical = window.innerWidth < 1350;
        const isMobile = window.innerWidth < 700;

        var newScreenType: ScreenType;

        if (isMobile) {
            newScreenType = ScreenType.MOBILE;
        } else if (isvertical) {
            newScreenType = ScreenType.VERTICAL_PC;
        } else {
            newScreenType = ScreenType.HORIZONTAL_PC;
        }

        if (newScreenType !== screenType) {
            setScreenType(newScreenType);
        }
    }

    function changeTitleName() {
        const pathName = window.location.pathname;
        const urlNames = pathName.split("/");
        var tabTitle = "Home";

        if (urlNames[1] === "Project" && urlNames.length > 2) {
            let newTitle = urlNames[2].replace(/([a-z]+)([A-Z]+)/g, "$1 $2").replace(/^/, "");
            setTitle(newTitle);
            tabTitle = newTitle;
        } else {
            setTitle("Theodore Aaron-Obelley");

            if (urlNames[1] === "") {
                tabTitle = "Home";
            } else {
                tabTitle = urlNames[1].replace(/([a-z]+)([A-Z]+)/g, "$1 $2").replace(/^/, "");
            }
        }

        document.title = tabTitle;
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        changeTitleName();
    }, [location]);

    handleResize();
    return (
        <OrientationContext.Provider value={screenType}>
            <ErrorBoundary fallbackRender={FallbackRender}>
                <QueryClientProvider client={queryClient}>
                    <div className={appStyles[screenType]}>
                        <Navbar title={title} ref={ref} />
                        <Suspense fallback={<p>Loading</p>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </QueryClientProvider>
            </ErrorBoundary>
        </OrientationContext.Provider>
    );
}

export { OrientationContext, DBContext };
export default App;
