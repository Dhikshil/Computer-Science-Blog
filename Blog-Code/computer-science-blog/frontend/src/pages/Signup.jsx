import { Link } from "react-router-dom"
import { useState, useRef } from "react"

import { registerUser } from "../services/authService.js";


export default function LoginPage() {
    const [errors, setErrors] = useState([]);
    const [registered, setRegistered] = useState(false);
    
    const usernameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    async function handleSubmit(event) {
        event.preventDefault();

        const usernameValue = usernameInput.current.value;
        const emailValue = emailInput.current.value;
        const passwordValue = passwordInput.current.value;
        const confirmPasswordValue = confirmPasswordInput.current.value;

        setErrors([]);

        if (confirmPasswordValue !== passwordValue) {
            setErrors((prevErrors => [...prevErrors, "Passwords must match"]))
            return;
        }

        const userData = {
            name: usernameValue,
            email: emailValue,
            password: passwordValue,
        };

        const data = await registerUser(userData);
        if (!data.success) {
            console.log(data.message);
            setErrors((prevItems => [...prevItems, data.message]));
            console.log(errors);
            return;
        };

        console.log("Registered")
        setRegistered(true);

    };


    return (
        <>
            {!registered && (<main className="max-w-4xl w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg mt-25">
                <h1 className="font-bold">Sign Up  Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="max-w-2xl mx-auto">
                        <div className="my-3 flex flex-col justify-between pb-4">
                            <div className="flex flex-col gap-4 mt-2">
                                <div className="flex gap-2">
                                    <p className="mt-2">Username:</p>
                                    <input ref={usernameInput} type="text" name="usernameInput" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                                </div>
                                <div className="flex gap-2">
                                    <p className="mt-2">Email:</p>
                                    <input ref={emailInput} type="email" name="emailInput" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <div className="flex gap-2">
                                    <p className="mt-2">Passowrd:</p>
                                    <input ref={passwordInput} type="text" name="passwordInput" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                                </div>
                                <div className="flex gap-2">
                                    <p className="mt-2">Confirm Passowrd:</p>
                                    <input ref={confirmPasswordInput} type="text" name="passwordInput" className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                                </div>
                            </div>
                            <ul>
                                {errors && errors.map((error, index) => <li className="mt-3 text-red-600 text-left" key={index}>{error}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <Link to="/"><button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Cancel</button></Link>
                            <Link to="/login"><button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Login</button></Link>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300">Create Account</button>
                    </div>
                </form>
            </main>)}
            {registered && <h1 className="mt-25 font-semibold">Registered Successfully! Please <Link to="/login" className="text-blue-200 underline hover:text-purple-400">Log in</Link></h1>}
        </>
    )
}