import * as http from 'http';
import { writeHead } from './models/writeHead';
import * as fs from 'fs';
import * as path from 'path';

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("???");
    // res.end();
    if (req.url === '/') {
      const page = fs.readFileSync(
        `${path.join(__dirname, 'view', 'html', 'index.html')}`
      );
      writeHead(res, req.url as string, page);
    } else if ((req.url as string).includes('favicon')) {
      const page = 'favicon';

      writeHead(res, req.url as string, page);
    } else {
      const page = fs.readFileSync(
        `${path.join(__dirname, 'view', req.url as string)}`
      );
      writeHead(res, req.url as string, page);
    }
  }
});

app.listen(1101, () => {
  console.log('port on 1101');
});
