const express=require('express')
const morgan=require('morgan')
const cookieParser = require('cookie-parser');

const AppError =require('./utils/appError')
const globleErrorHandler=require('./controller/errorController')

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const userRouter=require('./routes/userRoutes')
const venueRouter=require('./routes/venueRoutes')

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

app.use('/user',userRouter)
app.use('/venue',venueRouter)

app.all('*',function(req,res,next){
    next(new AppError(`Can't find the ${req.originalUrl} on this server`))
})

app.use(globleErrorHandler.handleErrors)


module.exports=app 