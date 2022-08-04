const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { response } = require("express");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/counter", (request, response) => {
    console.log("COUNTER, COME IN!");
    // response.send("That counts")
    response.json({ counter });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});