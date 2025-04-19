import { useContext } from "react"
import { UserProfileContext } from "../context/UserProfileContext"

export function UserProfile() {
    const { userData, hasSearched } = useContext(UserProfileContext)
    
    if (!hasSearched) return null
    return (
        <div className={`max-w-[800px] bg-[#D9D9D9] rounded-3xl py-6 xl:w-[800px]`}>
            {userData ? (
                <div className="flex flex-col items-center gap-8 px-7  sm:flex-row md:pr-10 lg:pr-16">
                    <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-(--color-primary)">
                        <img                     
                            src={userData.avatar_url}
                            className="w-full h-full rounded-full"
                            alt="Imagem de Perfil" 
                        />
                    </div>

                    <div className="text-center sm:text-start sm:flex-1">
                        <h2 className="text-xl font-bold text-(--color-primary) mb-5">
                            {userData.name ? userData.name : userData.login}
                        </h2>
                        <p className="text-[15px]">
                            {userData.bio ? userData.bio : "Não Possui Biografia" }
                        </p>
                    </div>
                </div>
            ) : (
                <div className="w-full text-center">
                    <p className="w-3/5 text-lg text-red-500 mx-auto lg:3/5 ">Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente</p>   
                </div>
            )}
        </div>
    )
}