const express = require("express")
const router  = express.Router()
router.get('/', async (req, res, next) => {
    const petpet = req.query.petpet
     if(!petpet) return res.json({
        status: false,
        creator: `Balhisyhrl`,
        result: 'abc'
    })
    try {
     res.status(200).send(petpet)
    } catch (e) {
        console.log(e)
        res.json({
            status: false,
            creator: `Balhisyhrl`,
            result: 'abc'
        })
    }
   })

module.exports = router