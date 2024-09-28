const mongoose = require('mongoose')

const dbConnection = ()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/apparelrecycling').then(()=>{
    console.log("DB Connected...")
  }).catch((err)=>{
    console.log("There is some error while connecting with database",err.message)
  })
}
module.exports = { dbConnection };

