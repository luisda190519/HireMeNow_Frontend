import Sidebar from "../Partials/Sidebar";
import Navbar from "../Partials/Navbar";
import Jobs from "./Jobs";
import Applications from "./Applications";
import Likes from "./Likes";
import Notifications from "./Notifications";
import MiArea from "./MiArea";
import CV from "./CV";
import Posted from "./Posted";
import Test from "./Test";
import Config from "./Config";
import Authpopup from "../components/Authpopup";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { getRequest } from "../utils/request";

function Dashboard() {
    const [screen, setScreen] = useState(0);
    const [authPopup, setAuthpopup] = useState(false);
    const [blurScreen, setBlurScreen] = useState({});
    const { logout } = useContext(AuthContext);
    const { userAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState(userAuthenticated || false);

    const changeScreen = function (id) {
        if (id !== 0 && id !== 6 && !user) {
            setBlurScreen({ filter: "blur(1px)", position: "absolute" });
            return setAuthpopup(
                <Authpopup
                    setAuthpopup={setAuthpopup}
                    setBlurScreen={setBlurScreen}
                />
            );
        }
        return setScreen(id);
    };

    const utils = {
        changeScreen,
        buttonActive: screen,
    };

    const screens = [
        (props) => <Jobs {...props} />,
        (props) => <Applications {...props} />,
        (props) => <Likes {...props} />,
        (props) => <Notifications {...props} />,
        (props) => <MiArea {...props} />,
        (props) => <CV {...props} />,
        (props) => <Test {...props} />,
        (props) => <Config {...props} />,
        (props) => <Posted {...props} />,
    ];

    useEffect(() => {
        changeScreen(0);
        setUser(userAuthenticated);
    }, []);

    useEffect(() => {
        setUser(userAuthenticated);
    });

    useEffect(() => {}, [screen, user]);

    return (
        <div id="dashboard">
            <div className="text-left" style={blurScreen}>
                <div className="row gx-0 justify-content-end">
                    <div className="col-1">
                        {<Sidebar utils={utils} user={user} logout={logout} />}
                    </div>
                    <div className="col-11 container-fluid">
                        <div className="mt-4 ">
                            {<Navbar utils={utils} user={user} />}
                        </div>
                        <div className="my-3" style={{ zIndex: "-1" }}>
                            {user || screen == 0 ? (
                                screens[screen]({ user: user })
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {authPopup}
        </div>
    );
}

export default Dashboard;
