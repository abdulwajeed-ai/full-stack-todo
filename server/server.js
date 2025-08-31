const express = require("express")
const app = express()
const cors = require("cors")
const todoRouter = require("./routes/todoRoutes")

const connectDB = require("./db/db")

// using middleware for taking the json body
app.use(express.json())

// allowing to different ports of ip use CORS
app.use(cors())

app.use("/api", todoRouter)

// database connection
connectDB();

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})

