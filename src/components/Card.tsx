import ArticleImage from "../assets/illustration-article.svg"
import { Header } from "./Header"
import { Content } from "./Content"
import { Profile } from "./Profile"

export function Card(){
    return(
        <main className="flex flex-col items-center bg-white w-80 h-[27rem] rounded-xl border-black border-solid border shadow-[7px_7px_0px_black]">
            <img src={ArticleImage} className="w-72 rounded-xl my-3.5"/>
            <Header/>
            <Content/>
            <Profile/>
        </main>
    )
}