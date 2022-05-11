const express = require("express");
const { errorHandler } = require("./middlware/errorMiddlware");

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/schedule", require("./routes/daySchedule"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
