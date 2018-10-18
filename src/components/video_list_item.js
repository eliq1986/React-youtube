import React from 'react';
import './video_list_item.css';

const VideoListItem = ({video, selectedVideo}) => {
 const imgUrl = video.snippet.thumbnails.default.url;



  return (
    <li className="list-group-item" onClick={()=> selectedVideo(video)}>

      <div className="list-item-description">
        <img src={imgUrl} />
        <p>{video.snippet.title}</p>
      </div>
    </li>
    )
}

export default VideoListItem;
