import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IArticle } from "../models/articles"

const Sidebar = () => {
    const chapterId = useLocation().pathname.split("/")[1]

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/articles")
                setArticles(response.data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchArticles()
    }, [])
    
    if (loading) {
        return <div>Загрузка статей...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <aside className="flex w-[30%] h-[100%] border-white border-2 rounded-xl p-[2px]">
            <div className="flex flex-col bg-white w-full rounded-[8px] p-[2px] gap-[2px]">
                <Link className={`${chapterId === '' ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2 `} to="/">Главная</Link>
                {articles.map((article: IArticle) => (
                    <Link className={`${chapterId === article.oldId ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to={`/${article.oldId}`}>{article.title}</Link>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar
