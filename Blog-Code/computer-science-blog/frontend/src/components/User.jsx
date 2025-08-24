import { logoutUser } from "../services/authService"

export default function UserProfile({loggedIn, onLoginChange}) {

    const userData = JSON.parse(localStorage.getItem('user'))

    function logUserOut() {
        logoutUser();
        onLoginChange(false);
    }

    return (
        <main className="text-left max-w-4xl w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg mt-25">
            <h1 className="text-center mb-3">Welcome {userData.name}</h1>
            <h3>Email: {userData.email}</h3>
            <div className="flex justify-end">
                <button className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300" onClick={logUserOut}>Log out</button>
            </div>
        </main>
    )
}
