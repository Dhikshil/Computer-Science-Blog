import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ArticlePage from "./pages/Article.jsx";
import HomePage from './pages/Home.jsx';
import SearchPage from './pages/Search.jsx';
import RootLayout from "./pages/Root.jsx";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/Signup.jsx";

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:[
      {index: true, element: <HomePage />},
      {path: 'search', element: <SearchPage />},
      {path: 'search/:articleId', element: <ArticlePage />},
      {path: 'login', element: <LoginPage />},
      {path: 'signup', element: <SignupPage />},
    ]
  }
])

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
