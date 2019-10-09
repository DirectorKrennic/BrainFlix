import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainContent extends React.Component {

    //I set state below

    state = {
        mainVideo: {
            id: '', 
            comments: []
        },

       comment: '',
    }

    //in life cycle componentDidMount I am sending a GET request to the API to set a default video when page loads i.e the first video in array

    componentDidMount() {

       
       fetch(`http://localhost:8081/videos/0`)

        .then (response => {
            console.log(response);
            return response.json();
            
        })

        .then(data => {
            this.setState({mainVideo: data});
        })
    }

    // In the componentDidUpdate lifecycle method the user changing video updates the state of main video

    componentDidUpdate(prevProps, prevState) {
        console.log("previous.props", prevProps)
        const videoID = this.props.match.params.videoId;
       console.log("this.props", this.props)
              
        
        if (prevProps.match.params.videoId!== videoID){
            

            fetch(`http://localhost:8081/videos/${videoID}`)
            
            .then (response => {
                return response.json();
                
            })

            .then(data => {
                this.setState({mainVideo: data});
            })
            
        }
    }

    

    changeHandler = (e) => {
       
       console.log(e.target.value);
        this.setState({
            comment: e.target.value
        });    
    }


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.comment);

        let videoID = this.props.match.params.videoId

        let data = {
            name: 'Darragh',
            comment: e.target.comment.value,
        }

        let init = {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        };         
           
        //POST request being sent to the server with video ID
        //I am then using the response to set state of main video
        
        fetch (`http://localhost:8081/videos/${videoID}/comments`, init)

        .then((response) => {
            
            return response.json(); 
        })
        .then((data)=>{
           // 
           
            fetch(`http://localhost:8081/videos/${videoID}`)
            .then ((response2)=>{
                return response2.json();
            })
            .then((data2) =>{
                this.setState({
                    mainVideo: data2
        
                })

               
            })
        })

       
    }

    //rendering components below to appear on app front end     

    render() {

                
            
        return (
            

            <div className="main_content_wrapper">

                <div className="main_video_container">

                    <Link to="/">
                    
                    <video src={`${this.state.mainVideo.video}?api_key=da2e053d-cc82-43fd-9c9b-8d7d05e9de4d/`} controls poster={this.state.mainVideo.image}
                    className="main_video"></video>
                    </Link> 

                    <section>

                        <div className="video_details">

                            <h5 className="video_details_description">
                                {`${this.state.mainVideo.title}`}
                            </h5>

                            <div className="video_details_container">

                                <div className="video_details_start_box">
                                    <p>{`${this.state.mainVideo.views} views`}</p>
                                </div>

                                <div className="video_details_end_box">

                                    <div className= "ThumbsUp_Div"> 
                                        <img src = "/Icons/Thumbs_Up.svg" className="thumb_image"/>
                                        <p className="video_text">{`${this.state.mainVideo.thumbsUp}`}</p>
                                    </div>
                                
                                    <div className="ThumbsDown_Div">
                                        <img src = "/Icons/Thumbs_Down.svg"/> 
                                        <p className="video_text">{`${this.state.mainVideo.thumbsDown}`}</p>
                                    </div>

                                    <div className="Share_Div">
                                        <img src = "/Icons/Share.svg"/>
                                        <p className="video_text">SHARE</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    <section>

                        <div className = "video_comments">

                            <div className = "video_comments_start_box">

                                <div className="profile_circle_div">
                                    <div className = "profile_circle">
                                    </div>
                                </div>
                                <div className = "comment_date_div">
                                    <div>
                                        <h5 className = "MLB_uploader_Heading">{`${this.state.mainVideo.channel}`}</h5>
                                        <p className = "published_date_text">Published on Oct 14, 2015</p>
                                    </div>
                                </div> 

                                <div className="Subscribe_btn_div">
                                    <div className = "Subscribe_btn">
                                        <h6 className = "Subscribe_text">SUBSCRIBE 
                                            <span className="numbers_subscribed"> 1.2M</span></h6>
                                    </div>
                                </div>



                            </div>

                            <div className = "video_comments_end_box">
                                <h6 className="video_details_description">
                                    {`${this.state.mainVideo.description}`}
                                </h6>

                                <h6 className = "show_more_text">SHOW MORE</h6>

                            </div>

                           
                        </div>

                        <div>
                            <div className="comment_form_div">
                                <img src="../.././Images/john_gibbons.jpg" className="user_profile_icon2"/>
                                <form className="my_form" onSubmit={this.submitHandler}>
                                    <input 
                                        type="text" 
                                        placeholder="Add a public comment" 
                                        className="comment_text_field" 
                                        name="comment"
                                        value={this.state.comment}
                                        onChange={this.changeHandler}
                                    />
                                    <div className="comment_buttons_div">
                                        <h6 className="cancel_button">Cancel</h6>
                                        <button 
                                            className="comment_button"
                                            type="submit" 
                                            > 
                                            Comment
                                        </button>
                                    </div>
                                </form>                            
                                                              
                                                            
                            </div>

                            {this.state.mainVideo.comments.map((Comments)=> {
                                return (
                                    <div className="comment_output">
                                        <img src="../.././Images/john_gibbons.jpg" className="user_profile_icon2"/>
                                        <div>
                                            <h6 className="username_header">John Gibbons <span className="span_text"> 1 second ago</span></h6>
                                            <p className="user_comment">{Comments.comment}</p> 
                                        </div> 
                                    </div>
                                )
                            })}


                        </div> 
                    
                    </section>
                    
                </div>

            </div>

                
            
        )
    }

}

export default MainContent;

