import { createContext, useContext } from "react";

export const context= createContext()

export const useAuth = () => {
    const context = useContext()
    if( !context) throw new Error("No hay un usuario comprobado")
    return context  
}

export function AuthProvider({children}){
    const user = {
        login: true
    }
    
    return(
        <context.Provider value={{user}}>
            {children}
        </context.Provider>
    )
}