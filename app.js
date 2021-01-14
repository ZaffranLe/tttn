const express = require("express");
const app = express();

app.use(
    express.json({
        limit: "50mb",
    })
);
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.get("/", (req, res) => {
    res.json({ status: true });
});

const port = 3001;

app.listen(port, () => {
    console.log("Server started");
});
