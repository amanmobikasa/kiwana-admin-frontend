// function that tell about screen size

import { ResizeWindowOnclick } from "@/common/resize-window-onclick";

export const resizeWindowScreen = () => {
    if(window.innerWidth < 1200){
        return <ResizeWindowOnclick />
    }else{
        return false;
    }
}

