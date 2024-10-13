import { useContext } from "react";
import AppScreenFrame from "./UI/AppScreenFrame";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";
import About from "./Apps/About";
import Mail from "./Apps/Mail";
import Certificates from "./Apps/Certificates";
import Projects from "./Apps/Projects";
import Cv from "./Apps/Cv";

const AppScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.About.open && (
        <AppScreenFrame
          appInfo={Menu[0]}
          className=""
          isActive={state.About.top}
          isMaximized={state.About.fullscreen}
          isMinimized={state.About.minimize}
        >
          <About isMaximized={state.About.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Projects.open && (
        <AppScreenFrame
          appInfo={Menu[1]}
          className=""
          isActive={state.Projects.top}
          isMaximized={state.Projects.fullscreen}
          isMinimized={state.Projects.minimize}
        >
          <Projects isMaximized={state.Projects.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Mail.open && (
        <AppScreenFrame
          appInfo={Menu[2]}
          className=""
          isActive={state.Mail.top}
          isMaximized={state.Mail.fullscreen}
          isMinimized={state.Mail.minimize}
        >
          <Mail isMaximized={state.Mail.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Certificates.open && (
        <AppScreenFrame
          appInfo={Menu[3]}
          className=""
          isActive={state.Certificates.top}
          isMaximized={state.Certificates.fullscreen}
          isMinimized={state.Certificates.minimize}
        >
          <Certificates isMaximized={state.Certificates.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Cv.open && (
        <AppScreenFrame
          appInfo={Menu[4]}
          className=""
          isActive={state.Cv.top}
          isMaximized={state.Cv.fullscreen}
          isMinimized={state.Cv.minimize}
        >
          <Cv isMaximized={state.Cv.fullscreen} />
        </AppScreenFrame>
      )}
    </>
  );
};

export default AppScreen;
