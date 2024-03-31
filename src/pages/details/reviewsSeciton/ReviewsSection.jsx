import React from 'react'
import "./style.scss"
import useFetch from '../../../hook/useFetch'


export const ReviewsSection = ({mediaType ,id}) => {
    const {data, loading} = useFetch(`/${mediaType}/${id}/reviews`)
  return (
    <div className='Reviews-section'>
        <h2>Reviews</h2>
        <div className="review-slider">
            {
                data?.data?.map((item)=>{
                    return(
                    <div key={item.mal_id} className='slide'>
                        <div className="header">
                            <img src={item.user.images.jpg.image_url} alt="" />
                            <h4>{item.user.username}</h4>
                            <span className='score'>{item.score}/10</span>
                        </div>
                        <div className="body">
                            <p>{item.review}</p>
                        </div>   
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}
