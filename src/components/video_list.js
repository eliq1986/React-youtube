import React from 'react';
import VideoListItem from './video_list_item';
import './video_list.css';

const VideoList = ({videos, onVideoSelect}) => {
  const listOfVideos = videos.map(video => <VideoListItem key={video.etag} selectedVideo={onVideoSelect} video={video}/>)
  return (
   <ul className="col-md-4 list-group">
     {listOfVideos}
   </ul>
    )
}

export default VideoList;
