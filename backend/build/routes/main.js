"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var main_controller_1 = require("../controllers/main-controller");
var router = express_1.Router();
exports.router = router;
var mainController = new main_controller_1.MainController();
router.get("/", mainController.getWords);
router.put("/", mainController.knowWord);
router.post("/addword", mainController.addWord);
