import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header/Header'
import HomePage from './pages/Home.jsx';

import SearchPage from './pages/Search.jsx';
import RootLayout from "./pages/Root.jsx";

import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:[
      {index: true, element: <HomePage />},
      {path: 'search', element: <SearchPage />}
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
