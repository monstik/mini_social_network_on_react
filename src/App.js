import React from 'react';
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="content">
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
};

export default App;
