import { createContext, useState } from "react";

export const UserContext = createContext()

export const ContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{
            isAuthenticated, setIsAuthenticated, user, setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}