import { config } from 'dotenv';
import {app} from './api'
import http from "http"

if (process.env.NODE_ENV !== 'production') {
  config();
}
// call after config() to access the env variables
const server = http.createServer(app);
const port = process.env.PORT || 3333;

server.listen(port, () =>
  console.log(`API available on http://localhost:${port}`)
);
