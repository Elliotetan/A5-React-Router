import { useState } from 'react'
// import AxiosEg from './components/AxiosExample'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import Header from './components/header'
import Hero from './components/Hero'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}/>

      </Routes>
    </BrowserRouter>






  )

  //   <div className='page'>
  //   <Header />
  //   <Hero />
  //   </div>

  // <AxiosEg />

  // const [count, setCount] = useState(0)
  // console.log(import.meta.env.VITE_TMDB_KEY);

  // return (
  //   <div>
  //   </div>
  // )
}

export default App
