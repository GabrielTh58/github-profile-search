import { createContext, useState } from "react";
import { IUser, IUserProfileContext } from "../interfaces/IUser";  

export const UserProfileContext = createContext({} as IUserProfileContext);

export const UserProfileContextProvider = ({ children }: any) => {  
    const [userData, setUserData] = useState<IUser | null>(null)
    const [hasSearched, setHasSearched] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    
    function setUserProfile(data: IUser) {
        setUserData(data)
        setHasSearched(true)
        setIsLoading(false)
    }

    return(
        <UserProfileContext.Provider value={{setUserProfile, userData, hasSearched, isLoading, setIsLoading}}>
            {children}        
        </UserProfileContext.Provider>
    )
}