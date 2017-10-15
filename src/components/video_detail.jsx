import React from 'react';

import PropTypes from 'prop-types';

const VideoDetail = (props) => {
  const { video } = props;

  if (!video || !Object.keys(video).length) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          title={video.snippet.title}
          frameBorder="0"
          className="embed-responsive-item"
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape({}),
};

VideoDetail.defaultProps = {
  video: {},
};

export default VideoDetail;
