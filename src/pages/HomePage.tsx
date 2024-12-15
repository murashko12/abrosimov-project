import { useState } from "react";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from "../components/Input";

const HomePage = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const generateOldId = () => {
        const now = new Date()
        const timestamp = now.getTime()
        const random = Math.floor(Math.random() * 1000000)
        return `${timestamp}-${random}`
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);
        
        try {
            await axios.post('http://localhost:3001/api/articles', { 
                oldId: generateOldId(),
                title,
                content: text,
                type: "text"
            });
            setTitle("");
            setText("");
            // alert("Статья добавлена успешно!");
        } catch (err) {
            console.error('Ошибка при добавлении статьи:', err);
            setError('Не удалось добавить статью');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Заголовок статьи"
                    label={""}
                    required
                />
                <br />
                <ReactQuill 
                    value={text}
                    onChange={setText}
                    placeholder="Текст статьи"
                    required
                
                />
                <br />
                <button className="bg-[#a8c7d0] text-white py-2 px-4 rounded hover:bg-[#397585]" type="submit" disabled={loading}>
                    {loading ? 'Добавление...' : 'Добавить статью'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default HomePage;