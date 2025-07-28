/*import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js';
//APP CONFIG

const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

// MIDDLE WARES 

app.use(express.json())
app.use(cors())
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
// API END POINTS

app.use('/api/user',userRouter)

app.use('/api/product',productRouter)


   
app.get('/',(req,res)=>{
  res.send('SERVER WORKING')
})

app.listen(port,()=>console.log('SERVER IS RUNNING PORT 4000 AND')); */

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
// middile wares

app.use(express.json())
app.use(cors())

// api end points
app.use('/api/user',userRouter)

app.use('/api/product',productRouter)

app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=> console.log("server started on port :" + port))


