
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

//importing our routes 

const commentRoutes = require('./comments');
const videoRoutes = require('./videos');

//require cors in project so that our backend serves our front end 
const cors = require('cors');
app.use(cors());

app.use(bodyparser());


//code for serving the react app at localhost
app.use(express.static('app/build'));

//code to instruct express to serve any files in the 'static'files' folder such as videos
app.use(express.static('mediaVideos'));

app.use('/comments', commentRoutes);
app.use('/videos', videoRoutes);




app.listen(8081, (err) => {
    if(err) return console.error(err);
    console.log('Listening on 8081');
})