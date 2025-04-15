import Logo from '../assets/images/Logo_github.svg'
import Github from '../assets/images/Github.svg'

export function Header() {
    return (
        <div className="flex items-center gap-2 mb-7">
            <img src={Logo} className="w-14 h-14" alt="Logo Github" />
            <h1 className="text-white text-3xl lg:text-6xl font-semibold">Perfil</h1>
            <img src={Github} alt="GitHub" className="w-20 lg:w-40" />
        </div>
    )
}