
const express = require('express');
const router = express.Router();

const vids = require('./videos.json');

router.get('/', function(req, res, next){
        res.json(vids);
});

router.get('/:id', function(req, res, next) {
        console.log(`route has been hit with id ${req.params.id}`)
        const id = req.params.id;
        const vid = vids.find((video)=>{
                return video.id === parseInt(id);
        });
        res.json(vid);
});


router.post('/:id/comments', function(req, res, next) {
        // req.body ={
        //         name: 'Darragh',
        //         comment: e.target.comment.value,
        //     }
        const incomingData = {
                
                comment: req.body.comment,
                name: req.body.name,
                id: null,
                timestamp: null,
        }

        if (!incomingData.comment || !incomingData.name) {
                res.status(400);
                res.send('Please provide a comment and a name.');
        } else {
                const id = req.params.id;
                const vid = vids.find((video)=>{
                        return video.id === parseInt(id);

                });
                if(vid) {
                        let acc = 0;
                        vid.comments.map( (comment)=>{
                                if (comment.id > acc ){
                                        acc = comment.id;
                                }                                
                        });

                        vids.map( (video)=>{
                                if (video.id === parseInt(id)){
                                        incomingData.id= acc + 1;
                                        incomingData.timestamp = Date.now();
                                        video.comments.push(incomingData)
                                }                                
                        });
                res.json(incomingData);
                }else {
                        res.send("Video does not exist")
                }
                }
            });

            router.post('/upload', function(req, res, next){
                
                    const incomingData2 = {
                
                        title: req.body.title,
                        description: req.body.description,
                        id: null,
                        channel: "MLB",
                        views: 14934,
                        duration: "11:31",
                        image: "https://i.imgur.com/3WPEmCJ.jpeg",
                        video: "http://localhost:8081/RogueOne.mp4",
                        thumbsUp: 78634,
                        thumbsDown: 213,
                        subscriberCount: "1.2M",
                        comments: []

                    }
                
                    if(!incomingData2.title || !incomingData2.description) {
                        res.status(400);
                        res.send('Please provide a title & a description');
                    }else{
                        
                       
                                vids.push(incomingData2);
                                console.log(vids);
                        

                        res.json(incomingData2);
                        
                    }
                })


module.exports = router;