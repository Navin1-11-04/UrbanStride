const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGO_URI;

mongoose.connect(
     mongoUrl
).then(()=>
    console.log("connected to mongoose sucessfully")
).catch((e)=>
    console.log(e));

app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);
app.use('/order',orderRoutes);
app.use('/favourites',favouriteRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
