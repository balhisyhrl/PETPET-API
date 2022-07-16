const express = require("express")
const path = require("path")
const cors = require('cors')
const secure = require('ssl-express-www')
const fs = require('fs')
const petPetGif = require('pet-pet-gif')
//const main = require('./routes/main')
const apirouter = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8080 || 5000 || 3000

app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("assets"))

app.use('/', async (req, res, next) => {
    const petpet = req.query.url
    if(!petpet) return res.json({
      status: false,
      creator: `Balhisyhrl`,
      msg: "Cannot GET parameter url"
      })
    try{
      let animatedGif = await petPetGif(petpet)
      res.status(200).send(animatedGif)
      //let filename = "./tmp/Anon-BOT-" + new Date().getTime() + + Math.floor(Math.random() * 999)+'.gif'
      //await fs.writeFileSync(filename, animatedGif)
      //let imggiff = filename
      /*res.json({
        status: true,
        creator: `Balhisyhrl`,
        result: "https://anon-petpetgif.herokuapp.com/" + imggiff
      })*/
    //fs.unlinkSync(filename)
    } catch(e){
      console.log(e)
      res.json({
        status: false,
        creator: `Balhisyhrl`,
        msg: "Cannot GET parameter url"
    })}
})
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

module.exports = app

