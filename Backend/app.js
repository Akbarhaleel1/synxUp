const express=require("express")
require('dotenv').config();
const session = require('express-session');
const app = express();
const route=require("./Routes/routes")


app.use(session({
    secret: '89093789021', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));




const allowedOrigins = [process.env.DOMAIN,];

console.log(allowedOrigins)

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 4444;

app.use("/", Route);




app.listen(port, () => {
    console.log(`Server is running and you can listen from this port: http://localhost:${port}`);
}); 