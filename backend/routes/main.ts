import { Router } from "express";
import { MainController } from "../controllers/main-controller";

const router = Router();
const mainController = new MainController();

router.get("/", mainController.getWords);
router.put("/", mainController.knowWord);
router.post("/addword", mainController.addWord);

export { router };
