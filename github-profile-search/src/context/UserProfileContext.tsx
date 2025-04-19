import { createContext, useState } from "react";
import { IUser, IUserProfileContext } from "../interfaces/IUser";  

export const UserProfileContext = createContext({} as IUserProfileContext);

export const UserProfileContextProvider = ({ children }: any) => {  
    const [userData, setUserData] = useState<IUser | null>(null)
    const [hasSearched, setHasSearched] = useState(false)
    
    function setUserProfile(data: any) {
        setUserData(data)
        setHasSearched(true)
    }

    return(
        <UserProfileContext.Provider value={{setUserProfile, userData, hasSearched}}>
            {children}        
        </UserProfileContext.Provider>
    )
}