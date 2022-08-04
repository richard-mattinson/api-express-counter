const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { response } = require("express");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

// --- GET ----
app.get("/counter", (request, response) => {
    console.log("COUNTER, COME IN!");
    // response.send("That counts")
    response.json({ counter });
});

// --- DELETE ----
app.delete("/counter", (request, response) => {
  console.log("COUNTER, GO AWAY!");
  // response.send("I wouldn't count on it")
  counter = 0
  response.json({ counter });
});

// ---- INCREMENT ----
app.put("/counter/increment", (request, response) => {
  console.log("COUNTER, GET EXTRA!");
  // response.send("Count me in")
  if (counter === 10) {
    response.send("STRIKE!")
  } else {
    counter = counter +1
  }
  response.status(201).json({ counter });
});

// --- DECREMENT ---- 
app.put("/counter/decrement", (request, response) => {
  console.log("COUNTER, GET EXTRA!");
  // response.send("Count me in")
  if(counter === 0) {
    response.send("That doesn't count!")
  } else {
    counter = counter -1;
  }
  response.status(201).json({ counter });
});

// --- DOUBLE ---- 
app.put("/counter/double", (request, response) => {
  console.log("COUNTER, GET EXTRA!");
  // response.send("Count me in")
  if(counter === 256) {
    response.send("All the colours you'll ever need")
  } else {
    counter = counter *2;
  }
  response.status(201).json({ counter });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});