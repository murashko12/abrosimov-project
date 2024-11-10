import { FC, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/default"

const Routers:FC = () => {
    return (
        <>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<>asdaasdasdasd</>}/>
                    <Route path="/1" element={<>asdaasdasdasd1</>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Routers