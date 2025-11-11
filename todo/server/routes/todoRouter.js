import { Router } from "express";
import { getTasks, postTask, delTask } from "../controllers/TaskController.js";
const router = Router();

router.get("/", getTasks);

router.post("/create",postTask )

router.delete("/delete/:id", delTask)
export default router;
