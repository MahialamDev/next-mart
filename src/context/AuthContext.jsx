'use client'
import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const user = 'rahat';
    const [isAuth, setIsAuth] = useState(false);


    const authInfo = {
        user,
        isAuth,
        setIsAuth
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
    

}

export default AuthProvider;
