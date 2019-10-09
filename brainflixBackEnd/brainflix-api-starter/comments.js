
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

        res.json([

            {
                "name": "Nigel",
                "comment": "Never gonna give you up...",
                "id": 0,
                "timestamp": 1530744338878
            },

            {
                "name": "Ian",
                "comment": "You could make $5000 a day too!",
                "id": 1,
                "timestamp": 1530744338878
            },
        ]);
});




module.exports = router;