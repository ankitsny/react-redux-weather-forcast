import React from 'react';
import PropType from 'prop-types';

const VideoListItem = (props) => {
  const { video } = props;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => props.onVideoSelect(video)} role="button">
      <div className="video-list media">
        <div className="media-left">
          <img alt={imageUrl} className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};


VideoListItem.propTypes = {
  video: PropType.shape({}),
  onVideoSelect: PropType.func,
};

VideoListItem.defaultProps = {
  video: {},
  onVideoSelect: null,
};

export default VideoListItem;
