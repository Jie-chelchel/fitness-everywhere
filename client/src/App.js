import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Classes from "./components/Classes";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import NavBar from "./components/navbar";
import CreateClassForm from "./components/CreateClassForm";
import MyClasses from "./components/MyClasses";
import MyBookings from "./components/MyBookings";
import UpcomingClasses from "./components/UpcomingClasses";
import History from "./components/History";
import Class from "./components/Class";
import ClassDetails from "./components/ClassDetails";
import { LoginForm } from "./components/accountBox/loginForm";
import EditClassForm from "./components/EditClassForm";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={AccountBox} />
          <Route path="/signup" component={AccountBox} />
          <Route exact path="/classes" component={Classes} />
          <Route path="/class-details/:id" component={ClassDetails} />
          <Route path="/bookings" component={MyBookings} />
          <Route path="/upcoming-classes" component={UpcomingClasses} />
          <Route path="/adding-new" component={CreateClassForm} />
          <Route path="/classes/edit/:id" component={EditClassForm} />
          <Route path="/history" component={History} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
