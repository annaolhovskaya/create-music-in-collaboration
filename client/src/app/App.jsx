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
import { ToastContainer } from "react-toastify";
import StartPage from "./components/page/startPage/startPage";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

const App = () => {
    return (
        <>
            <div className="page">
                <AppLoader>
                    <NavBar />
                    <Wrapper>
                        <Switch>
                            <Route
                                path="/initialize"
                                component={InitializeDataFirebase}
                            />
                            <ProtectedRoute
                                path="/users/:userId?/:edit?"
                                component={Users}
                            />
                            <ProtectedRoute
                                path="/collaborations"
                                component={CollaborationsPage}
                            />
                            <ProtectedRoute
                                path="/remix"
                                component={RemixPage}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <ProtectedRoute path="/main" component={Main} />
                            <Route path="/logout" component={LogOut} />
                            <Route path="/" exact component={StartPage} />

                            <Redirect to="/" />
                        </Switch>
                    </Wrapper>
                    <Footer />
                </AppLoader>
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
