import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CollaborationsPage from "./components/page/collaborationsPage";
import Wrapper from "./components/ui/wrapper/wrapper";
import Footer from "./components/ui/footer/footer";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar/navBar";
import RemixPage from "./components/page/remixPage";
import Users from "./layouts/users";
import Login from "./layouts/login";
import InitializeDataFirebase from "./layouts/initializeDataFirebase";
import { UserProvider } from "./hooks/useUsers";
import { DawProvider } from "./hooks/useDaws";
import { ExperienceProvider } from "./hooks/useExperience";
import { WorkFormatProvider } from "./hooks/useWorkFormats";
import { StyleProvider } from "./hooks/useStyles";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./hooks/useAuth";
import StartPage from "./components/page/startPage/startPage";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import { useDispatch } from "react-redux";
import { loadStylesList } from "./store/styles";
import { loadDawsList } from "./store/daws";
import { loadWorkformatsList } from "./store/workformats";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadStylesList());
        dispatch(loadDawsList());
        dispatch(loadWorkformatsList());
    }, []);

    return (
        <>
            <div className="page">
                <AuthProvider>
                    <NavBar />
                    <Wrapper>
                        <UserProvider>
                            <ExperienceProvider>
                                <DawProvider>
                                    <StyleProvider>
                                        <WorkFormatProvider>
                                            <Switch>
                                                <Route
                                                    path="/initialize"
                                                    component={
                                                        InitializeDataFirebase
                                                    }
                                                />
                                                <ProtectedRoute
                                                    path="/users/:userId?/:edit?"
                                                    component={Users}
                                                />
                                                <ProtectedRoute
                                                    path="/collaborations"
                                                    component={
                                                        CollaborationsPage
                                                    }
                                                />
                                                <ProtectedRoute
                                                    path="/remix"
                                                    component={RemixPage}
                                                />
                                                <Route
                                                    path="/login/:type?"
                                                    component={Login}
                                                />
                                                <Route
                                                    path="/main"
                                                    component={Main}
                                                />
                                                <Route
                                                    path="/logout"
                                                    component={LogOut}
                                                />
                                                <Route
                                                    path="/"
                                                    exact
                                                    component={StartPage}
                                                />

                                                <Redirect to="/" />
                                            </Switch>
                                        </WorkFormatProvider>
                                    </StyleProvider>
                                </DawProvider>
                            </ExperienceProvider>
                        </UserProvider>
                    </Wrapper>
                    <Footer />
                </AuthProvider>
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
