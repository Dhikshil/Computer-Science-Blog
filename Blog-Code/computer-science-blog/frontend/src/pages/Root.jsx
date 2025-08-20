import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";

import HEADERICONS from  '../../HEADERICONS.jsx'

export default function RootLayout() {
    return (
        <>
            <div className='min-h-screen min-w-100 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white p-8'>
                <Header actions={HEADERICONS}>Computer Science Blog</Header>
                <main><Outlet /></main>
            </div>
            <Footer />
        </>
    )
}