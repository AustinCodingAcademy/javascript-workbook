import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className='video-detail'>Waiting...</div>;
}//if theres no search yet

  const videoId = video.id.videoId;//targetting video.id.videoId and setting to const videoId to be used in line just below
  const Url = `https://www.youtube.com/embed/${videoId}`;//creating const to have data for embedding unique video on the page
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
       <iframe className="embed-responsive-item" src={Url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
    </div>
  </div>
  );
//above is framework for actual embed of videos with their title and decripstions
};
export default VideoDetail;
