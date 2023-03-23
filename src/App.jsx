import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";
import Main from "./Views/Main";
import Applications from "./Views/Applications";
import Likes from "./Views/Likes";
import Notifications from "./Views/Notifications";
import PageNotFound from "./Views/PageNotFound";
import MiArea from "./Views/MiArea";
import CV from "./Views/CV";
import Test from "./Views/Test";
import Config from "./Views/Config";
import { useState, useEffect } from "react";

function App() {
    const [screen, setScreen] = useState(0);
    const screens = [
        <Main />,
        <Applications />,
        <Likes />,
        <Notifications />,
        <MiArea />,
        <CV />,
        <Test />,
        <Config />,
        <PageNotFound />,
    ];

    const changeScreen = function (id) {
        setScreen(id);
    };

    useEffect(() => {
        changeScreen(0);
    }, []);

    useEffect(() => {}, [screen]);

    return (
        <div>
            <div className="text-left">
                <div className="row gx-0 justify-content-end">
                    <div className="col-1">
                        <Sidebar
                            changeScreen={changeScreen}
                            buttonActive={screen}
                        />
                    </div>
                    <div className="col-11 container-fluid">
                        <div className="mt-4">
                            <Navbar
                                buttonActive={screen}
                                changeScreen={changeScreen}
                            />
                        </div>
                        <div>{screens[screen]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
