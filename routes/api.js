const express = require("express")
const fs = require('fs')
const petPetGif = require('pet-pet-gif')
const router  = express.Router()

router.get('/petpet', async (req, res, next) => {
  const petpet = req.query.url
  if(!petpet) return res.json({
    status: false,
    creator: `Balhisyhrl`,
    msg: "Cannot GET parameter url"
    })
   //res.status(200).send(petpet)
  try{
    let animatedGif = await petPetGif(petpet)
    res.status(200).send(Buffer.animatedGif)
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
/*
router.get('/petpet', async (req, res, next) => {
    const petpet = req.query.petpet
    if(!petpet) return res.send("s")
     res.status(200).send(petpet)
    try{
      let animatedGif = await petPetGif(petpet)
      let filename = Math.floor(Math.random() * 1000)+'.gif'
      await fs.writeFileSync(filename, animatedGif)
      let imggiff = filename
      res.json({
        status: true,
        creator: `Balhisyhrl`,
        result: "https://anon-petpetgif.herokuapp.com/tmp/" + imggiff
      })
    //fs.unlinkSync(filename)
    } catch(e){
      res.json({
        status: false,
        creator: `Balhisyhrl`,
        result: null
    })}
})*/

module.exports = router