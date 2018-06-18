import React from 'react'

export const VideoListItem = ({video, onVideoSelect}) =>  {
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={ () => onVideoSelect(video)} className='list-group-item'>
            <div className='media'>
                <div className='media-left'>
                    <img alt="video thumbnail" className='media-object' src={imageUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};