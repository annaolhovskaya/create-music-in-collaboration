import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Collaborations from "./components/collaborations";
import Wrapper from "./components/wrapper/wrapper";
import Footer from "./components/footer";
import Main from "./components/main";

import NavBar from "./components/navBar";
import Remix from "./components/remix";
import Users from "./components/users";
import UserPage from "./components/userPage";
import Login from "./layouts/login";

const App = () => {
    return (
        <div className="page">
            <NavBar />
            <Wrapper>
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/user" component={UserPage} />
                    <Route path="/collaborations" component={Collaborations} />
                    <Route path="/remix" component={Remix} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </Wrapper>
            <Footer />
        </div>
    );
};

export default App;
