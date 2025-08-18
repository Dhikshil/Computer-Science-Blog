import Header from './components/Header/Header'
import HomePage from './components/Home.jsx';

import Footer from './components/Footer.jsx';

import SearchPage from './components/Search.jsx';

import './App.css'

import HEADERICONS from  '../HEADERICONS.jsx'

function App() {
  return (
    <>
      <div className='min-h-screen min-w-100 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white p-8'>
        <Header actions={HEADERICONS}>Computer Science Blog</Header>  
        <HomePage />
        <SearchPage />
      </div>
      <Footer />
    </>
  )
}

export default App
