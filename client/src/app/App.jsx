import React from "react";
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

const App = () => {
    return (
        <>
            <div className="page">
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
                                            <Route
                                                path="/users/:userId?/:edit?"
                                                component={Users}
                                            />
                                            <Route
                                                path="/collaborations"
                                                component={CollaborationsPage}
                                            />
                                            <Route
                                                path="/remix"
                                                component={RemixPage}
                                            />
                                            <Route
                                                path="/login/:type?"
                                                component={Login}
                                            />
                                            <Route
                                                path="/"
                                                exact
                                                component={Main}
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
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
