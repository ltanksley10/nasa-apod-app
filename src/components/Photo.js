import React from 'react';

const Photo = props => (
    <div className="viewMorePhoto">
        <img src={props.photo.url} alt={props.photo.title} />
        <div className="viewMorePhotoSummary">
            <h1>{props.photo.title}</h1>
            <p>{props.photo.explanation}</p>
        </div>
    </div>
);

export default Photo;