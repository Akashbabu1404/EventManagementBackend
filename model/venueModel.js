const mongoose=require('mongoose')

const venueSchema=mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please provide venue name']
    },
    feature:{
        type:String,
        enum:['premium']
    },
    state:{
        type:String,
        required:[true, 'Please provide state name']
    },
    city:{
        type:String,
        required:[true, 'Please provide city name']
    },
    address:{
        type:String,
        required:[true, 'Please provide address name']
    },
    minCapacity:{
        type:Number,
        required:[true, 'Please provide minCapacity name']
    },
    maxCapacity:{
        type:Number,
        required:[true, 'Please provide maxCapacity name']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min:[1,'rating must be above 1'],
        max:[5,'rating must be less 5.0'],
        set: val=>Math.round(val*10)/10
    },
    propertyType:{
        type:String,
        enum:['garden','hotel','pool','hall','confress hall']
    },
    description:{
        type:String,
    },
    food:{
        type:String,
    },
    capacity:{
        type:String,
    },
    servicesOffered:{
        type:String,
    },
    accessibility:{
        type:String,
    },
    facilites:{
        type:String,
    },
    pouplarFor:{
        type:String,
        required:[true, 'Please provide the event name for which you are famous']
    },
    eventSupported: {
        type: [String], 
        default: [] 
      },
    cuisines: {
        type: [String], 
        default: [] 
      },
     facilites: {
        type: [String], 
        default: [] 
      },
      noOfHalls:{
        type:Number
      },
      noOfRooms:{
        type:Number
      },
      refundPolicy:{
        type:String,
        default:"no refund"
      }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const Venue=mongoose.model('Venue',venueSchema)
module.exports=Venue