
import React from "react";
import './App.css';
import Register from './pages/SignIn/Register';
import Login from './pages/SignIn/SignIn'
import Home from "./pages/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import { AuthContext } from './contenxt/contenxt';
import { useHistory } from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const login = () => {
    // debugger
    setLoggedIn(true);
  }
  const logout = () => {
    // debugger
    setLoggedIn(false);
  }

  React.useEffect(() => {
    if (!loggedIn) {
      history.push('/login');
    } else if (history.location.pathname === '/') {
      history.push('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  if (loggedIn) {
    history.push('/home');
  }else{
    history.push('/login');
  }


  return (
    <AuthContext.Provider value={{
      isLoggedIn: loggedIn,
      login: login, logout: logout
    }}>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/login" component={Login}/>

        <Route exact path="/home" component={Home}/>
      </Switch>
    {/* <Register />
    <Login /> */}
    </AuthContext.Provider>
  );
}

export default App;
