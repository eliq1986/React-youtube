import React from 'react';
import './video_detail.css';

const VideoDetail = ({video}) => {

  if (!video) {
   return <h3>Loading......</h3>
  }

  const videoId = video.id.videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;
   return (
    <div>
      <div class="video-container">
        <iframe height="315" width="560" allowfullscreen="" frameborder="" className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>

  );
}

export default VideoDetail;
