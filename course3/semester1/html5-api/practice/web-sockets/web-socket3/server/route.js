import { Router } from "express";
const router = Router();

export default router.get("/", (req, res) => {
  res.send("Сервер исправено работает!");
});
