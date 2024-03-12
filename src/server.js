import express from "express";
import { CONNECT_DB, GET_DB } from "./config/mongodb";

const START_SERVER = () => {
  const app = express();

  const hostname = "localhost";
  const port = 8017;

  app.get("/", (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    console.log(`Hello Duy, I am running at http://${hostname}:${port}`);
  });
};

// Chỉ khi kết nối thành công tới Database thì mới Start Server (IIFE - Immediately Invoked Function Expression)
(async () => {
  try {
    await CONNECT_DB();

    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();

// Chỉ khi kết nối thành công tới Database thì mới Start Server
// CONNECT_DB()
//   .then(() => console.log("Connected to Database!"))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.log(error);
//     process.exit(0);
//   });
