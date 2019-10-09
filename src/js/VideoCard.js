import React from 'react';

class VideoCard extends React.Component {

    render() {
        return(
            <div className ="side_wrapper_div">
                <div className="side_videos_div">
                    <img src={this.props.image} className = "side_videos"/>
                </div>
                <div className="side_videos_details_div">
                    <h6 className="video_title_text">{this.props.title}</h6>
                    <p className="video_uploader_text">MLB</p>
                    <p className= "video_views_text">{this.props.views} views</p>
                </div> 
            </div>
        );
    }
}

export default VideoCard;
