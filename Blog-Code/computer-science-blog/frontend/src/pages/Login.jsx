import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <main className="max-w-4xl w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg">
            <h1 className="font-bold">Login Page</h1>
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <Link to="/"><button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Cancel</button></Link>
                    <Link to="/signup"><button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Register</button></Link>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Log In</button>
            </div>
        </main>
    )
}