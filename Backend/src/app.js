import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += 1;
  }
  res.send(`Hello World! ${sum}`);
});

export default app;
