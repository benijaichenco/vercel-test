import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Express Typescript on Vercel");
  return;
});

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.send("pong 🏓");
  return;
});
