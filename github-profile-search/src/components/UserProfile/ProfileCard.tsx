import { IUser } from "../../interfaces/IUser"

interface ProfileCardProps {
  userData: IUser
}
export function ProfileCard({userData}: ProfileCardProps) {
    return (
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
                    {userData.bio ? userData.bio : "Não Possui Biografia"}
                </p>
            </div>
        </div>
    )
}