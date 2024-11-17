import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const chapterId = useLocation().pathname.split("/")[1]
    return (
        <aside className="flex w-[30%] h-[100%] border-white border-2 rounded-xl p-[2px]">
            <div className="flex flex-col bg-white w-full rounded-[8px] p-[2px] gap-[2px]">
                <Link className={`${chapterId === '' ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2 `} to="/">Главная</Link>
                <Link className={`${Number(chapterId) === 1 ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to="/1">Раздел 1</Link>
                <Link className={`${Number(chapterId) === 2 ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to="/2">Раздел 2</Link>
                <Link className={`${Number(chapterId) === 3 ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to="/3">Раздел 3</Link>
                <Link className={`${Number(chapterId) === 4 ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to="/4">Раздел 4</Link>
                <Link className={`${Number(chapterId) === 5 ? 'bg-[#a8c7d0] text-white' : 'hover:bg-[#F0F1F7]'} rounded-[6px] p-2`} to="/5">Раздел 5</Link>
            </div>
        </aside>
    )
}

export default Sidebar
