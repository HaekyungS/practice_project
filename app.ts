import http from "http";
import { writeHead } from "./models/writeHead";
import fs from "fs";
import path from "path";

const app = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        const page = fs.readFileSync(`${path.join(__dirname, "view", "html", "index.html")}`);
        writeHead(res, req.url as string, page);
      } else {
        const page = fs.readFileSync(`${path.join(__dirname, "view", req.url as string)}`);
        writeHead(res, req.url as string, page);
      }
    }
  })
  .listen(1101, () => {
    console.log("port on 1101");
  });
