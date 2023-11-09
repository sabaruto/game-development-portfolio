import ScreenType from "../../enum/ScreenType"


function SetOrientationStyle(hStyle: string, vStyle: string, mStyle: string) {

    return {
        [ScreenType.HORIZONTAL_PC]: hStyle,
        [ScreenType.VERTICAL_PC]: vStyle,
        [ScreenType.MOBILE]: mStyle,
    }
}

export default SetOrientationStyle