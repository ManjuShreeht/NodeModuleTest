const express=require("express")
const mongoose=require("mongoose")
const userRoute=require('./routes/userRoute')
const loginRoute=require("./routes/LoginRoute")

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

const URL="mongodb+srv://manjushree:manjushree123@cluster0.9vzini2.mongodb.net/Profile_display?retryWrites=true&w=majority"
mongoose.set('strictQuery', false)

mongoose.connect(URL)
.then(()=>{
    console.log(" db connected")
})
.catch((err)=>{
    console.log(err)
})


app.use("/",userRoute)
app.use('/',loginRoute)


app.listen(4000,()=>{
    console.log("hi")
})