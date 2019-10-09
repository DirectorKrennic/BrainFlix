import React from 'react';
import VideoCard from './VideoCard'
import {Link } from 'react-router-dom';

//this function will receive one video object and return a <VideoCard> component 

function transform (videoObject){

           

    return (
            <Link to={`/videos/${videoObject.id}`}>
                <VideoCard 
                    image={videoObject.image}
                    title={videoObject.title}
                    uploader={videoObject.channel} 
                    views={videoObject.views}
                    key={videoObject.id} />
            </Link>
    );
}



class VideoList extends React.Component {

    render() {
        const videos = this.props.videos;        
        const videoCards = videos.map(transform);    
            
        return (
            <div className="side_wrapper">
                <div>
                    <h5 className = "sidebar_header">Up Next</h5>
                </div>
                <div className="video-list">
                    {videoCards}            
                </div>
            </div>
        );
   }
}


export default VideoList;