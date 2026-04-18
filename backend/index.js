require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const path = require('path');
const userRoutes = require('./routes/userRoutes');
const connectDB =require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors())
app.use(express.json());                                                                         

app.use('/api/user',userRoutes);



app.listen(PORT, ()=>{
   console.log(`Server running on http://localhost:${PORT}`);
});
