const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')

//forgott password 
//profile photo

const userSchema=mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email:{
        type:String,
        required:[true,'Please provide your email'],
        validate:[validator.isEmail,'Please enter correct email address'],
        unique:true,
        lowercase:true
    },userType: {
        type: String,
        enum: ['admin', 'regular'],
        required: true,
      },
    password:{
        type:String,
        required:[true,'Please enter the password'],
        minlength: 8, //set minimum lenght to 8 
        select: false  // didn't send when use to fetch details
    },
    phoneNumber:{
        type:String,
        match: /^[0-9]{10}$/,
        select:false
    },
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


userSchema.methods.correctPassword = async function (userEnteredPassword, userPasswordFromDatabase) {
    return await bcrypt.compare(userEnteredPassword,userPasswordFromDatabase)
}

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

const User=mongoose.model('User',userSchema)
module.exports=User