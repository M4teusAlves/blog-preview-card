import User from "../assets/image-avatar.webp"


export function Profile(){
    return(
        <footer className="flex self-start ml-3.5 mt-3.5 items-center">
            <img src={User} alt="Perfil" className="w-7"/>
            <p className="ml-2 text-xs font-extrabold font-[Figtree]">Greg Hopper</p>
        </footer>
    )
}