import http from "http";

export const writeHead = (res: http.ServerResponse, url: string, page: Buffer) => {
  if (url.endsWith("html") || url.endsWith("/")) {
    if (url.endsWith("/")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    }
  } else if (url.endsWith("css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(page);
    res.end();
  } else if (url.endsWith("ts")) {
    res.writeHead(200, { "Content-Type": "text/typescript" });
    res.write(page);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
  }
};
