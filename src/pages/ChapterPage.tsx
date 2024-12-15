import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IArticle } from "../models/articles"

const ChapterPage = () => {
    const { chapterId } = useParams<{ chapterId: string }>()

    const [article, setArticle] = useState<IArticle | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/articles/${chapterId}`)
                setArticle(response.data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchArticles()
    }, [article])

    if (loading) {
        return <div>Загрузка статей...</div>
    }

    if (error) {  
        return <div>{error}</div>
    }

    return (
        <div>
            <h2>{article?.title}</h2>
            <p>{article?.content}</p>
        </div>
    )
}

export default ChapterPage