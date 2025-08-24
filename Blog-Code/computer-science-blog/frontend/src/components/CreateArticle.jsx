import { useRef, useState } from "react"

export default function CreateArticle() {
    const [errors, setErrors] = useState([]);

    const userData = JSON.parse(localStorage.getItem('user'));

    const articleTitle = useRef();
    const articleType = useRef();
    const articleContent = useRef();
    const articleDesc = useRef();
    const articleLongImg = useRef();
    const articleShortImg = useRef();

    function formSubmit(event) {
        event.preventDefault();

        setErrors([]);

        let articleTitleValue = articleTitle.current.value;
        let articleCategoryValue = articleType.current.value;
        let articleContentValue = articleContent.current.value;
        let articleDescValue = articleDesc.current.value;

        if (articleTitleValue.length < 10 || articleTitleValue.length > 100) {
            setErrors((prevErrors) => [...prevErrors, "Article Title is not the right length, must be between 10 and 100 characters long!"]);
            return
        };
        if (articleCategoryValue.length < 20 || articleCategoryValue.length > 50) {
            setErrors((prevErrors) => [...prevErrors, "Article type must be between 20 and 50 characters long"]);
            return
        };
        if (articleContentValue.length < 500 || articleContentValue.length > 5000) {
            setErrors((prevErrors) => [...prevErrors, "Article content is not the right length, must be between 500 and 5000 characters long!"]);
            return
        };
        if (articleDescValue.length < 10 || articleDescValue.length > 100) {
            setErrors((prevErrors) => [...prevErrors, "Article Description is not the right length, mus be between 10 and 100 characters long!"]);
            return
        };

        const maxSizeMB = 5;
        if (longImageFile.size > maxSizeMB * 1024 * 1024) {
            setErrors(prev => [...prev, `Long image must be smaller than ${maxSizeMB}MB`]);
            return;
        }
        if (shortImageFile.size > maxSizeMB * 1024 * 1024) {
            setErrors(prev => [...prev, `Short image must be smaller than ${maxSizeMB}MB`]);
            return;
        }

        let articleDate = new Date();
        let author = userData.name;



    }

    return (

        <form
            onSubmit={formSubmit}
            className="w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg"
        >
            <div className="flex flex-col">
                <label htmlFor="title" className="mb-1 text-white font-semibold">
                    Title
                </label>
                <input
                    required
                    ref={articleTitle}
                    type="text"
                    id="title"
                    name="title"
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex flex-col">
                <label className="mb-1 text-white font-semibold">
                    Type
                </label>
                <input
                    required
                    ref={articleType}
                    type="text"
                    id="title"
                    name="title"
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="body" className="mb-1 text-white font-semibold">
                    Article Content
                </label>
                <textarea
                    required
                    ref={articleContent}
                    name="body"
                    rows={5}
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="body" className="mb-1 text-white font-semibold">
                    Desc
                </label>
                <textarea
                    required
                    ref={articleDesc}
                    name="body"
                    rows={2}
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex justify-between max-w-4/5 mx-auto mb-10 mt-5">
                <div>
                    <label htmlFor="longImg" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-center">Long Image</label>
                    <input id="longImg" type="file" ref={articleLongImg} required accept="image/*" className="hidden" />
                </div>
                <div>
                    <label htmlFor="shortImg" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-center">Short Image</label>
                    <input id="shortImg" type="file" ref={articleShortImg} required accept="image/*" className="hidden" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}