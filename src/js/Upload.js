import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Upload extends React.Component {

    state = {
        comments: {
            title: '',
            description: '',
        }
    }; 

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //the function below sends a POST request 

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.details);

        let data = {
            title: this.state.title,
            description: this.state.description,
        }

        let init = {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        } ;         
            
        //POST request being sent to /videos/upload route 
            fetch(`http://localhost:8081/videos/upload`, init)



        .then((response) => {
            console.log(response)
            this.props.getVideos();
            return response.json(); 


        })
    }

    //rendering below: please note "Public" button calls the functions above 

    render() {
        return (
            <div className="background-div">
        <div className="main-div">

            <div className="section-div">
                <img src="../../Images/hqdefault.jpg" alt="baseball" className="image-upload"/> 
                <h4>Upload status:</h4>
                <h4 className="processing-header">Processing</h4>
            </div>

            <div className="section-div-center">
                <h5>Processing 80%</h5>
                <h5 className="publish-text-header">Click Publish to make your video live.</h5>
                <h5>Basic information</h5>
                <form onSubmit={this.submitHandler}>
                    <p>Title:</p>
                    <input 
                    type="text" 
                    placeholder="Add a title to your video" 
                    className="form-input-title"
                    name="title"
                    onChange={this.changeHandler}
                    />

                    <p>Description:</p>
                    <input 
                    type="text" 
                    placeholder="Add a description of your video" 
                    className="form-input-description"
                    name="description"
                    onChange={this.changeHandler}
                    />

                    <p>Tags:</p>
                    <input 
                    type="text" 
                    placeholder="e.g, albert einstein, flying pig, mashup, videos" 
                    className="form-input-tags"/>
                    <br />
                    <button type="submit">
                        <p>Public</p>
                    </button>
                </form>
                <h4>Video Thumbnails</h4>

                <div>
                    <img src="../../Images/hqdefault.jpg" alt="baseball" className="image-upload"/>
                    <img src="../../Images/hqdefault.jpg" alt="baseball" className="image-upload"/>
                    <img src="../../Images/hqdefault.jpg" alt="baseball" className="image-upload"/>
                </div>
            </div>

            <div className="section-div-publish">
                <button 
                className="publish-button"
                
                >
                Publish
                </button>
                <p className="draft-text">Draft Saved</p>
            </div>

        </div>
    </div>
        );
    }
}


export default Upload; 