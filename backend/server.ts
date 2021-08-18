import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { router } from "./routes/main";

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use("/", router);
const PORT: any = process.env.PORT;
const MONGO: any = process.env.MONGO_URI;

async function start() {
  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();
