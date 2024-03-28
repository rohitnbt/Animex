import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hook/useFetch'
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { setIsMobile } from '../../store/mobileSlice'
import { AnimexLogo } from '../icons/AnimexLogo'
export const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [result, setResult] = useState(false)
  const {data, loading} = useFetch(`/anime?q=${query}`)
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.mobile.isMobile);

  const handleSearch = (input) => {
    setQuery(input)
    setResult(true)
  }

  useEffect(()=>{
    handleResize();
  })

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      dispatch(setIsMobile(true));
    }
    else {
      dispatch(setIsMobile(false));
    }
    
    console.warn(isMobile);
  }

  window.addEventListener('resize', handleResize);
  return (
    <header className='Header'>
        <div className="logo">
            <AnimexLogo onClick={() => navigate("/")}/>
        </div>
        <div className="nav-items">
          {
            !isMobile ? (
            <div className='search-box'>
              <input type="text" placeholder='Search here...' onChange={(e)=>handleSearch(e.target.value)}/>
              {
                result && (
                  <div className="result-box">
                    <div className="content">
                    {
                      data ? (
                        data?.data.map((item)=>
                        <div className="item" key={item.mal_id} onClick={()=> {navigate(`/${item.type}/${item.mal_id}`)
                        setResult(false)}}>
                          <img src={item.images.jpg.image_url} alt="" />
                          <h4>{item.title || item.given_name || item.name}</h4>
                        </div>
                        )
                      ) : (
                        <>
                          <div className="item skeleton"></div>
                          <div className="item skeleton"></div>
                          <div className="item skeleton"></div>
                          <div className="item skeleton"></div>
                          <div className="item skeleton"></div>
                          <div className="item skeleton"></div>
                        </>
                      )
                    }
                    </div>
                  </div>
                  
                )
              }
            </div> 
            ) :
            ( <RiSearch2Line onClick={()=>setShowSearchBox(!showSearchBox)}/> )
          }
            <ul>
                <li onClick={() => navigate("explore/anime")}>Anime</li>
                <li onClick={() => navigate("explore/manga")}>Manga</li>
            </ul>
        </div>
        {
          (showSearchBox && isMobile) && (
          <div className="mobile-search">
          <div className='search-box'>
                <input type="text" placeholder='Search here...' onChange={(e)=>handleSearch(e.target.value)}/>
                {
                  result && (
                    <div className="result-box">
                      <div className="content">
                      {
                        data ? (
                          data?.data.map((item)=>
                          <div className="item" key={item.mal_id} onClick={()=> {navigate(`/${item.type}/${item.mal_id}`)
                          setResult(false)}}>
                            <img src={item.images.jpg.image_url} alt="" />
                            <h4>{item.title || item.given_name || item.name}</h4>
                          </div>
                          )
                        ) : (
                          <>
                            <div className="item skeleton"></div>
                            <div className="item skeleton"></div>
                            <div className="item skeleton"></div>
                            <div className="item skeleton"></div>
                            <div className="item skeleton"></div>
                            <div className="item skeleton"></div>
                          </>
                        )
                      }
                      </div>
                    </div>
                    
                  )
                }
              </div> 
          </div> )
        }
    </header>
  )
}
