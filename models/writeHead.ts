import type * as http from 'http';

export const writeHead = (res: http.ServerResponse, url: string, page: Buffer | string): void => {
  if (url.endsWith('html') || url.endsWith('/')) {
    if (url.endsWith('/') || url.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(page);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(page);
      res.end();
    }
  } else if (url.endsWith('css')) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(page);
    res.end();
  } else if (url.endsWith('js')) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(page);
    res.end();
  }
};

// export default writeHead;
