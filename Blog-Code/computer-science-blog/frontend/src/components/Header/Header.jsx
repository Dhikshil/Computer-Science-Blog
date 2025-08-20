import { Link } from "react-router-dom";
import HeaderMap from "./HeaderMap";

export default function Header({ children, actions }) {
    return (
        <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-b border-cyan-500/30">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 ">
                <div className="flex gap-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 mt-1"><Link className="text-gray-900 font-black text-sm" to={''}>CS</Link></div>
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 pb-3">
                        {children}
                    </h1>
                </div>
                <ul className="flex space-x-6">
                    {actions.map((Item) => <HeaderMap key={Item.title} {...Item} />)}
                </ul>
            </div>
        </nav>
    );
};