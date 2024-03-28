import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { ImCross } from "react-icons/im";


export const VideoPopup = (props) => {
  return (
    props.show && (
    <div className='VideoPopup'>
        <div className="video">
            <ImCross onClick={()=> props.setShow(false)}/>
            <ReactPlayer url={props.videoId}/>
        </div>
    </div>)
  )
}
