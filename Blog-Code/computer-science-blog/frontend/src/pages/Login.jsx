import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import { loginUser } from "../services/authService.js";
import UserProfile from "../components/User.jsx";

export default function LoginPage({ loggedIn, onLoginChange }) {
    const [errors, setErrors] = useState([]);

    const emailInput = useRef();
    const passwordInput = useRef();

    async function handleSubmit(event) {
        event.preventDefault();

        setErrors([]);

        const emailValue = emailInput.current.value;
        const passwordValue = passwordInput.current.value;

        const userData = {
            email: emailValue,
            password: passwordValue
        }

       const data = await loginUser(userData);
       if (!data.success) {
        setErrors((prevErrors) => [...prevErrors, data.message]);
        return;
       }
       console.log("Logged in")
       onLoginChange(true);
    }

    return (
        <>
            {!loggedIn && (<main className="max-w-4xl w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg mt-25">
                <h1 className="font-bold">Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="max-w-2xl mx-auto my-3 pb-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <p className="mt-2">EMAIL:</p>
                                <input ref={emailInput} type="email" name="emailInput" defaultValue="example@email.com" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div className="flex gap-2">
                                <p className="mt-2">Passowrd:</p>
                                <input ref={passwordInput} type="text" name="passwordInput" defaultValue="" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                        </div>
                        <ul>
                            {errors && errors.map((error, index) => <li className="mt-3 text-red-600 text-left" key={index}>{error}</li>)}
                        </ul>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <Link to="/"><button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Cancel</button></Link>
                            <Link to="/signup"><button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Register</button></Link>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Log In</button>
                    </div>
                </form>
            </main>)}
            {loggedIn && <UserProfile loggedIn={loggedIn} onLoginChange={onLoginChange} />}
        </>
    )
}