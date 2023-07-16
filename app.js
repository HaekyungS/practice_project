import * as http from "http";
import fs from "fs";
import path from "path";
import { writeHead } from "./models/response.js";

// console.log(import.meta.url);
const root = path.resolve();

const app = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      console.dir(req.url);
      if (req.url === "/") {
        console.log(root);
        const page = fs.readFileSync(`${path.join(root, "view", "html", "index.html")}`);
        writeHead(res, req.url, page);
      } else if (req.url?.includes("favicon")) {
        const page = "favicon";

        writeHead(res, req.url, page);
      } else {
        const page = fs.readFileSync(`${path.join(root, "view", req.url)}`);
        writeHead(res, req.url, page);
      }
    } else if (req.method === "POST") {
    }
  })
  .listen(1101, () => {
    console.log("port on 1101");
  });
