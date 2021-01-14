import { createContext } from "react";

import React from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    token: null,
    login: () => { },
    logout: () => { }
});