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
      github: `https://github.com/balhisyhrl`,
      msg: "Cannot GET parameter url",
      example: "https://anon-petpet.herokuapp.com/?url=https://upload.wikimedia.org/wikipedia/en/3/3d/480px-Gawr_Gura_-_Portrait_01.png"
      })
    try{
      let animatedGif = await petPetGif(petpet)
      let filename = "Anon-BOT-" + new Date().getTime() + + Math.floor(Math.random() * 999)+'.gif'
      await fs.writeFileSync(`./tmp/${filename}`, animatedGif)
      let imggiff = filename
      res.json({
        status: true,
        creator: `Balhisyhrl`,
        github: `https://github.com/balhisyhrl`,
        result: "https://anon-petpet.herokuapp.com/tmp/" + imggiff
      })
    //fs.unlinkSync(filename)
    } catch(e){
      //console.log(e)
      res.json({
        status: false,
        creator: `Balhisyhrl`,
        github: `https://github.com/balhisyhrl`,
        msg: "Cannot GET parameter url",
        example: "https://anon-petpet.herokuapp.com/?url=https://upload.wikimedia.org/wikipedia/en/3/3d/480px-Gawr_Gura_-_Portrait_01.png"
    })}
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

module.exports = app

