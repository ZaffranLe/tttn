require('dotenv').config()
const morgan = require('morgan')
const express = require("express");
const app = express();

app.use(morgan('dev'))

app.use(
    express.json({
        limit: "50mb",
    })
);
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.get("/", (req, res) => {
    res.json({ status: true });
});

app.listen(process.env.PORT, () => {
    console.log("Server started at port " + process.env.PORT);
});
