const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const productDetails = require("./productDetails.json")

app.get("/", (req, res) => {
    res.send("Portfolio Server is running")
})

app.get("/productDetails/:id", (req, res) => {
    const id = req.params.id;
    const detail = productDetails.find(pd => pd.id === id)
    res.send(detail)
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})