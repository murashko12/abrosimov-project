// import axios from "axios"
// import { useEffect, useState } from "react";
import { IArticle } from "../models/articles";



const HomePage = () => {
    // const [articles, setArticles] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState<any>(null)

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3001/api/articles")
    //             setArticles(response.data)
    //             setLoading(false)
    //         } catch (err) {
    //             setError(err)
    //             setLoading(false)
    //         }
    //     }
    //     fetchArticles()
    // }, [])
    
    // if (loading) {
    //     return <div>Загрузка статей...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <div>
            <h1>Список статей</h1>
            {/* <ul>
                {articles.map((article: IArticle) => (
                    <li key={article.oldId}>
                        <h2>{article.title}</h2>
                        <p>{article.content.substring(0, 100)}...</p>
                    </li>
                ))}
            </ul> */}
        </div>
    ) 
}

export default HomePage