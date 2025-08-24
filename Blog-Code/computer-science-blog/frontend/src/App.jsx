import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ArticlePage from "./pages/Article.jsx";
import HomePage from './pages/Home.jsx';
import SearchPage from './pages/Search.jsx';
import RootLayout from "./pages/Root.jsx";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/Signup.jsx";

import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // initialize login state from localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  function handleLoginChange(status) {
    setLoggedIn(status);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout loggedIn={loggedIn} />,
      children:[
        {index: true, element: <HomePage />},
        {path: 'search', element: <SearchPage />},
        {path: 'search/:articleId', element: <ArticlePage />},
        {path: 'login', element: <LoginPage onLoginChange={handleLoginChange} loggedIn={loggedIn} />},
        {path: 'signup', element: <SignupPage onLoginChange={handleLoginChange} loggedIn={loggedIn} />},
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;