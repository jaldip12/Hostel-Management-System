import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import router from "./api/index.js" 


const app = express();


const PORT = process.env.PORT || 5000

// Config Body Parser
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json())
app.use(cors({
  // origin:process.env.CORS_ORIGIN,
  // credentials:true
}));
app.get("/hello", (req, res) => {
  res.send("Hello");
});
// const uri = process.env.MONGODB_URI 


// // Database connection
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => {
//   console.log(`Server Running on Port ${PORT}`)
//   runEscalater()
// }))
// .catch((error) => {
//   console.log(`${error} did not connect`)
// }
// );

app.use(router)
export {app}