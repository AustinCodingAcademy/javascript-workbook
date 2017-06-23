import React from 'react';
import VideoListItem from './videoListItems';//importing returned data from other component

const VideoList = (props) => {//list function here taking props as arg from App
 const videoItems = props.videos.map((video) => {//array o videos each iteration being a video
  return <VideoListItem
    onVideoSelect = {props.onVideoSelect}//video prop data sending selected video
    key = {video.etag}//unique key for videos
    video={video} />//passing video here
});
//building up list of videos by passing props for building list and selecting and mapping over the returned list
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
//returning items as a bootstrap column
export default VideoList;
