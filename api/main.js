const dotenv = require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middlware/errorMiddlware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/schedule", require("./routes/daySchedule"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port: ${port}`));
