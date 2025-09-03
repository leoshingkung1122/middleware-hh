import express from "express";
import { postValidation } from "./middlewares/post.validation.mjs";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.post("/assignments", postValidation, (req, res) => {
  // สมมุติว่าตรงนี้มีโค้ดที่เขียน Query เชื่อมต่อกับฐานข้อมูล
  // เพื่อสร้าง Assignment เขียนเอาไว้แล้ว
  return res.status(201).json({ message: "Create assignment successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
