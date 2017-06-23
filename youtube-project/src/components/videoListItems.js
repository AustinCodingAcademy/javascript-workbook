import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {//2 callbacksfrom video List
  const imageUrl = video.snippet.thumbnails.default.url;//const for getting and working with images from youtube
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className= "media-left">
          <img className= "media-object" src={imageUrl} />
        </div>
    <div className = "media-body">
      <div className="media-heading">{video.snippet.title}</div>
      </div>
    </div>
    </li>
  );
};
//above setting framework for the VideoListItem's.displaying video thumbnails with their titles etc.
//this is imported into video list and ultimately rendered to the dom via index.js
export default VideoListItem;
