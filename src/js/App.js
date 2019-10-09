import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from './NavBar'
import MainContent from './MainContent'
import SideBar from './SideBar' 
import videos from './VideoData'
import VideoList from './VideoList'
import Upload from './Upload'

class App extends Component {

    //setting state and assigning an empty array to it 

    state = {
        videosArray: []       
    }


    componentDidMount() {
        
                //When the component mounts a GET request is sent to the server to get videos
                fetch('http://localhost:8081/videos/')

                .then (response => {
                    console.log(response);
                    return response.json();
                    
                })
        
                .then(data => {
                    console.log('from server', data);
                    this.setState({videosArray: data});
                })
            }

    getVideos = () => {
        fetch('http://localhost:8081/videos/')

        .then (uploadResponse => {
            return uploadResponse.json();
        })

        .then (uploadData => {
            this.setState({videosArray: uploadData});
        })
    }

    //rendering below to display components on the app

    render() {
        return (
            
                
                
                <Router>
                    <div> 
                <NavBar/> 
                    <Switch>
                    
                        <div className="Component_Main_Wrapper">
                            
                            <Route exact path="/" render={(props)=>{
                                return  <div className="Component_Inner_Wrapper">
                                    <MainContent match={props.match}/>                            
                                    <VideoList videos={this.state.videosArray}/>
                                </div>
                            }}/>                       
                                
                            
                            <Route path="/videos/:videoId" render={(props)=>{
                                return  <div className="Component_Inner_Wrapper">
                                    <MainContent match={props.match}/>                            
                                    <VideoList videos={this.state.videosArray}/>
                                </div>
                            }}/>

                            <Route path="/Upload" exact render={(props)=>{
                                return <Upload getVideos={this.getVideos}/> 
                            }}/>
                        
                        </div>  
                    </Switch> 
                    </div>
                </Router>
          
        );
    }
}



export default App;