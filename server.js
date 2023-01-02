import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import mongoose from 'mongoose';


const app = express()


/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();



/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://supriyahatele:Hatele@1998@cluster0.qldb2.mongodb.net/?retryWrites=true&w=majority',{
    
    useNewUrlParser: true
})
.then(() => console.log('Connected with mongoDB...✔✔'))
.catch((error) => console.log(error.message));


const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Express is running on port: ${port}`);
});



