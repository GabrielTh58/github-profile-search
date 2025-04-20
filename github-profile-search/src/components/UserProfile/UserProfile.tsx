import { useContext } from "react"
import { UserProfileContext } from "../../context/UserProfileContext"
import { ErrorMessage } from "./ErrorMessage"
import { LoadingSpinner } from "./LoadingSpinner"
import { ProfileCard } from "./ProfileCard"

export function UserProfile() {
    const { userData, hasSearched, isLoading } = useContext(UserProfileContext)

    if (!hasSearched) return null

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className={`max-w-[800px] bg-[#D9D9D9] rounded-3xl py-6 xl:w-[800px]`}>
            {userData ? (
                <ProfileCard userData={userData} />
            ) : (
               <ErrorMessage />
            )}
        </div>
    )
}