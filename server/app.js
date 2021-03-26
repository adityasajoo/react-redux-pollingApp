const express = require("express");
const {
    sequelize
} = require('./models');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//routes 
app.use("/",require('./routes/poll'));

const PORT = process.env.PORT||5000;
//create tables
app.listen(PORT, async () => {

  await sequelize.authenticate();
    console.log("DB Connected");
    console.log(`App running in port ${PORT}`)
})
