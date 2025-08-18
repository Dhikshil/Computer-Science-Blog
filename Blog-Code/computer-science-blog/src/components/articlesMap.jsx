export default function ArticlesMap({ article }) {
    return (
        <li className="flex mb-8 text-left border-b-1 rounded p-4">
            <div className="flex flex-col">
                <h2>{article.name}</h2>
                <p className="text-[0.9rem]">{article.desc}</p>
                <div className='mt-auto'>
                    <p className='text-[0.7rem]'>{article.author} | {article.date}</p>
                </div>
            </div>
            <img src={article.imgShort} className="w-1/8 object-cover h-24" />
        </li>
    )
}