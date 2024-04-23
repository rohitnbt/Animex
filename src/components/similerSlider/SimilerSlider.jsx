import React, { useState } from 'react'
import "./style.scss"
import Slider from "react-slick";
import useFetch from '../../hook/useFetch'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


export const SimilerSlider = ({title, mediaType, url}) => {
    const {data, loading} = useFetch(url);
    const navigate = useNavigate();

    const isMobile = useSelector((state) => state.mobile.isMobile);

    const handleClick = (id) => {
       if( title === "Anime")
       {
        navigate(`/anime/${id}`);
       }
       else if(title === "Manga"){
        navigate(`/manga/${id}`);
       }
       else
       {
        navigate(`/characters /${id}`);
       }
        alert(id)
    }

    const settings = {
        infinite: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          }]
      };

  return (
    <div className='slider'>
        <div className="slider-top">
        <h2>{title}</h2>
        </div>
        {
            !loading ? (
        <div className="slider-container slides">
        <Slider {...settings}>
          {data?.data?.map((item) => (
              <div className="slide" key={item.mal_id} onClick={() => { handleClick(item?.anime?.mal_id || item?.manga?.mal_id);  }}>
              <div className="poster">
                  <img src={item?.anime?.images?.jpg?.image_url || item?.manga?.images?.jpg?.image_url} alt="" />
                  <div className="slide-overlay"></div>
              </div>
              <div className="slide-content">
                  <h3>{item?.anime?.title || item?.manga?.title}</h3>
              </div>
          </div>
          ))}
        </Slider>
      </div>
        ) : ( 
            <div className="skeleton-items">
                <div className="slide skeleton"></div>
                <div className="slide skeleton"></div>
                {
                  !isMobile && (
                    <>
                      <div className="slide skeleton"></div>
                      <div className="slide skeleton"></div>
                      <div className="slide skeleton"></div>
                    </>
                  )
                }
            </div>
        )
    }
    </div>
  )
}
