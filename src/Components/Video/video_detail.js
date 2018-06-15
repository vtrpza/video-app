import React from 'react'

export const VideoDetail = ({video}) =>  {
    if (!video) {
        return <div>Welcome, search above for a video you want to see.</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div>
                <iframe title="video" className='embed-resposive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};
