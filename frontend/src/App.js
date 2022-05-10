import React from 'react'
import 'materialize-css'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {token, login, logout, userId, accountType} = useAuth()
    const  isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated, accountType)
    return (
        <AuthContext.Provider value={{
            token,
            login,
            logout,
            userId,
            isAuthenticated
        }}>
            { isAuthenticated }
            <div className="back-test">
                <div className="container background-test">
                    {
                        routes
                    }
                </div>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
