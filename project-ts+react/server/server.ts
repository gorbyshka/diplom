import { serverType } from "./types/serverType";

import express from 'express';
const app = express();

app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/complex-object', (_req: any, res: { json: (arg0: serverType) => void; }) => {
  const complexObject: serverType = {
    id: 1,
    name: Math.random().toString(36).substring(7),
    price: Math.floor(Math.random() * 51),
  };
  
  res.json(complexObject);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
