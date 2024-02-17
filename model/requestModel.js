const mongoose =require('mongoose')

const requestSchema=new mongoose.Schema({
    event:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    expectedGuests:{
        type:Number
    },
    perPersonBudget:{
        type:Number
    },
    eventDate:{
        type:Date
    },
    name:{
        type:String
    },
    phoneNumber:{
        type:String,
        match: /^[0-9]{10}$/
    },
    email:{
        type:String
    },
    typeOfplaceRequired:{
        type:String
    }
})

const Request=mongoose.model('Request',requestSchema)
module.exports=Request