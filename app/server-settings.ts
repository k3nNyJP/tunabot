import * as express from "express";
import * as http from "http";
import { scheduleJob } from "node-schedule";

export class Server {
  static start() {
    return express()
      .get("*", (req, res) => {
        res.send("tunabot running...");
      })
      .listen(process.env.PORT || 8000);
  }

  static keepalive() {
    scheduleJob("*/20 * * * *", () => {
      http.get(process.env.APP_URL);
    });
  }
}

