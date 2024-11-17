import { FC, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/default"

const Routers: FC = () => {
    const LazyHomePage = lazy(async () => await import('./pages/HomePage'))
    const LazyChapterPage = lazy(async () => await import('./pages/ChapterPage'))
    return (
        <>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<LazyHomePage/>}/>
                    <Route path="/:chapterId" element={<LazyChapterPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Routers