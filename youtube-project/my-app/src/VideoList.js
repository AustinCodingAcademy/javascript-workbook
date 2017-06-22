import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
 const videoItems = props.videos.map((video) => {
  return (
    <VideoListItem
    onVideoSelect = {props.onVideoSelect}//importing prop from app render in index.js
    key = {video.etag}
    video={video} />
  );
});

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
