import React, { useState } from 'react'
import "./style.scss"
import useFetch from '../../../hook/useFetch';
import dayjs from 'dayjs';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { PlayIcon } from '../PlayIcon';
import { VideoPopup } from '../VideoPopup';

export const PosterSection = ({mediaType ,id}) => {
    const {data, loading} = useFetch(`/${mediaType}/${id}/full`);
    const [videoId, setVideoId] = useState("");
    const [show, setShow] = useState(false);
  return (
        <>
        {
            !loading ? (
                <div className="details-section">
                <div className="poster">
                    <img src={data?.data?.images.jpg.image_url} alt="" />
                </div>

                <div className="content">
                    <h2 className="title">
                        {data?.data?.title_english || data?.data?.name}
                    </h2>
                    <div className="chart">
                    { mediaType === "characters" ? "" : <CircularProgressbar value={data?.data?.score} maxValue={10} text={`${data?.data?.score}`}  styles={buildStyles({pathColor: `var(--pink)`, textColor: '#fff', trailColor: 'var(--background)'})}/>}
                        
                        <div className="playbtn" onClick={()=>{
                            setVideoId(data?.data?.trailer.embed_url)
                            setShow(true)
                        }}>
                        { mediaType === "anime" ? <PlayIcon /> : ""}              
                        </div>
                    </div>
                    <p className="description">
                        {data?.data?.synopsis || data?.data?.about}
                    </p>
                    <div className="details">
                        <span className="aired">
                           { mediaType === "anime" ? <b>Release Date: </b> : <b>Publish Date: </b>}
                            {
                                `${dayjs(
                                    data?.data?.aired?.from || data?.data?.published?.from
                                ).format("d MMMM YYYY")}`
                            }
                        </span>
                        <span className="aired">
                       { mediaType === "anime" ? <b>Episodes: </b> : <b>volumes: </b>}
                            {data?.data?.episodes || data?.data?.volumes || "not avilable"}
                        </span>
                        <span className="studios">
                        <b>Studio: </b>
                            {data?.data?.studios?.map((item)=>item.name) || data?.data?.authors?.map((item)=>item.name)}
                        </span>
                    </div>
                </div>
                <VideoPopup videoId={videoId} setVideoId={setVideoId} show={show} setShow={setShow} />
    </div>
            ) : (
                <div className='skeleton-items-poster'>
                    <div className="poster skeleton"></div>
                    <div className="content">
                        <div className="title skeleton"></div>
                        <div className="chart">
                            <div className="round skeleton"></div>
                            <div className="round skeleton"></div>
                        </div>
                        <div className="desc skeleton"></div>
                        <div className='details'>
                            <div className="details-item skeleton"></div>
                            <div className="details-item skeleton"></div>
                            <div className="details-item skeleton"></div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    
            
  )
}
