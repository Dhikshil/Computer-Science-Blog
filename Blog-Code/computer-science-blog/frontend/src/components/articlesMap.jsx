import { Link } from "react-router-dom"

export default function ArticlesMap({ article }) {
    return (
        <li className="flex mb-4 text-left rounded p-4">
            <Link to={`/search/${article.id}`} className="flex-1 border-gray-600 border-b-1  hover:p-2 hover:border-gray-100 pb-3">
                <div className="flex flex-col">
                    <h2>{article.name}</h2>
                    <p className="text-[0.9rem]">{article.desc}</p>
                    <div className='mt-auto'>
                        <p className='text-[0.7rem]'>{article.author} | {article.date.toISOString().split("T")[0]}</p>
                    </div>
                </div>
                <img src={article.imgShort} alt={article.name} className="w-1/8 object-cover h-24" />
            </Link>
        </li>
    )
}