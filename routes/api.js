const router = require('express').Router();

router.post('/name', (req, res, next) => {
    const name = req.body.name;
    console.log('hitting backend?');
    if (name != null) {
        res.json(`Hello, ${name}`);
    } else {
        next();
    }
})

module.exports = router;