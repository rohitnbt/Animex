import React from 'react'
import "./style.scss"
import Slider from "react-slick";
import useFetch from '../../../hook/useFetch'
import { useSelector } from 'react-redux';

export const CharactersSection = ({mediaType ,id}) => {
    const {data, loading} = useFetch(`/${mediaType}/${id}/characters`);
    const isMobile = useSelector((state) => state.mobile.isMobile);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
            breakpoint: 580,
              settings: {
                slidesToShow: 1,
              }    
            }
        ]
      };
  return (
    
            <div className='characters-section'>
        <h2>Characters</h2>
        {
        !loading ? (
            
            <div className="slider-container round-slider">
            <Slider {...settings}>
            {
                data?.data?.map((item)=>{
                    return(
                        <div>
                            <div key={item.character.mal_id} className="slide">
                                <img src={item.character.images.jpg.image_url} alt="" />
                                <h3>{item.character.name}</h3>
                            </div> 
                        </div>
                    )                   
                })
            }
            </Slider>
            </div>

        ) : (
            <div className='skeleton-items'>
                <div className='item'>
                    <div className="round skeleton"></div>
                    <div className="title skeleton"></div>
                </div>
                {
                    !isMobile && (
                        <>
                            <div className='item'>
                                <div className="round skeleton"></div>
                                <div className="title skeleton"></div>
                            </div>
                            <div className='item'>
                                <div className="round skeleton"></div>
                                <div className="title skeleton"></div>
                            </div>
                            <div className='item'>
                                <div className="round skeleton"></div>
                                <div className="title skeleton"></div>
                            </div>
                            <div className='item'>
                                <div className="round skeleton"></div>
                                <div className="title skeleton"></div>
                            </div>
                            <div className='item'>
                                <div className="round skeleton"></div>
                                <div className="title skeleton"></div>
                            </div>
                        </>
                    )
                }
            </div>
        )}
    </div>
  )
}
