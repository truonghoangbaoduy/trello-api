import express from "express";
// const express = require("express");

const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, hostname, () => {
  console.log(`Hello Duy, I am running at port http://${hostname}:${port}`);
});
