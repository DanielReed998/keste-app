const router = require('express').Router();

router.post('/name', (req, res, next) => {
    const name = req.body.name;
    if (name != null) {
        res.json(`Hello, ${name}`);
    } else {
        next();
    }
})

module.exports = router;