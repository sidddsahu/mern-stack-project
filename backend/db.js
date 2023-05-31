const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectDatabase = () => {
   mongoose.connect(process.env.DB_URI)
   .then(() => console.log("connected to the database"))
   .catch((err) => console.log(err))  
};
module.exports = connectDatabase;


