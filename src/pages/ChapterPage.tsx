import { useParams } from "react-router-dom"

const ChapterPage = () => {
    const { chapterId } = useParams<{ chapterId: string }>()
    return (
        <div>
            <h1>Раздел {chapterId}</h1>
        </div>
    )
}

export default ChapterPage