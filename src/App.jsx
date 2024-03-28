import './App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Details } from './pages/details/Details'
import { Home } from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import { SearchResult } from './pages/searchResult/SearchResult'
import { Explore } from './pages/explore/Explore'

function App() {
    

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
