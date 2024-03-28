import React, { useEffect, useState } from 'react';
import { HomeBanner } from './homeBanner/HomeBanner';
import "./style.scss";
import { Sliders } from '../../components/slider/Sliders';
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSliders, setShowSliders] = useState(false);
  const isMobile = useSelector((state) => state.mobile.isMobile);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSliders(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Home-page'>
      <div className="banner-wrapper">
        <HomeBanner url="/top/anime" />
        {
          !isMobile && (
            <>
              <HomeBanner url="/top/manga" />
              <HomeBanner url="/top/characters" />
            </>
          )
        }
        <div className="banner-overlay"></div>
        <div className='banner-content'>
          <div className='search-box'>
            <input type="text" placeholder='Search here...' onChange={(e)=>setQuery(e.target.value)} />
            <button onClick={()=>navigate(`/search/${query}`)}>Search</button>
          </div>
          <h1>Welcome</h1>
          <p>Find all information about latest Anime and Manga at one place.</p>
        </div>
      </div>
      {showSliders && (
        <ContentWrapper>
          <Sliders title="Anime" url="/top/anime" />
          <Sliders title="Manga" url="/top/manga" />
          <Sliders title="Characters" url="/top/characters" />
        </ContentWrapper>
      )}
    </div>
  );
};
