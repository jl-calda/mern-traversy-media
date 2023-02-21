const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");

const port = process.env.PORT || 8000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

router.get(`/api/goals`, router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
