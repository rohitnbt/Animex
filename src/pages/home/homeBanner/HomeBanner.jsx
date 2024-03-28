import React, { useEffect, useState } from 'react'
import useFetch from '../../../hook/useFetch';
import "./style.scss"

export const HomeBanner = ({url}) => {
    const [background, setBackground] = useState("");


    const {data, loading} = useFetch(url);

    useEffect(() => {
      const bg = data?.data?.[Math.floor(Math.random() * 24)]?.images?.jpg?.large_image_url || data?.data?.[Math.floor(Math.random() * 24)]?.images?.jpg?.image_url || data?.data?.[Math.floor(Math.random() * 24)]?.images?.jpg?.small_image_url
      setBackground(bg);
    },[data])

  return (
    <>
    {
      background && (
   
    <div className='Home-banner'>
      {
      !loading && (
        <img src={background} alt="" />
      )}
    </div>
     )}
    </>
  )
}
