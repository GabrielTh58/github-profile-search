import { IconSearch } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { fetchUser } from "../api/fetchUser";
import { UserProfileContext } from "../context/UserProfileContext";
import { IUser } from "../interfaces/IUser";

export function SearchInput() {
    const [userName, setUserName] = useState('')
    const {setUserProfile, setIsLoading} = useContext(UserProfileContext)
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!userName.trim()) return
    
        setIsLoading(true)
        try {
          const dataUser = await fetchUser(userName)
          setUserProfile(dataUser)
        } catch (error) {
          setUserProfile({} as IUser)
        } finally {
          setIsLoading(false)
        }
    }

    return (
        <form className="w-full sm:w-[500px] flex items-center justify-between bg-white rounded-lg p-[1px]">
            <input
                className="w-full pl-4 bg-transparent text-lg focus:outline-none hover:outline-none placeholder:text-base placeholder:text-black placeholder:font-semibold sm:placeholder:text-lg"
                type="text"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Digite um usuário do Github" />

            <button 
                onClick={handleSubmit}
                type="submit"
                className="text-white p-4 bg-(--color-primary) rounded-lg cursor-pointer transition-all ease-in hover:bg-blue-700">
                <IconSearch stroke={1} />
            </button>
        </form>
    )
}